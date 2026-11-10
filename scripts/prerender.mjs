// Renders one static HTML page per language into dist/ so the full content is in the initial response.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle in dist-server/).
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const { render, headTags, fetchArticles, LANGS, langPath } = await import(pathToFileURL(join(root, 'dist-server', 'entry-server.js')).href)
const template = await readFile(join(root, 'dist', 'index.html'), 'utf8')

let articles = []
try {
  articles = await fetchArticles()
  console.log(`prerender: ${articles.length} Medium article(s) embedded`)
} catch (err) {
  console.warn(`prerender: Medium feed unavailable (${err.message}); articles will load in the browser`)
}
const data = `<script>window.__ARTICLES__=${JSON.stringify(articles).replace(/</g, '\u003c')}</script>`
// Apply a saved light theme before first paint to avoid a dark flash.
const themeScript = `<script>try{if(localStorage.getItem('portfolio-theme')==='light')document.querySelector('main').setAttribute('data-theme','light')}catch(e){}</script>`

for (const lang of LANGS) {
  const html = template
    .replace(/<html lang="[^"]*" dir="[^"]*">/, `<html lang="${lang}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}">`)
    .replace(/<!--head:start-->[\s\S]*?<!--head:end-->/, headTags(lang))
    .replace('<!--app-html-->', render(lang, articles))
    .replace('<!--app-data-->', themeScript + data)
  const dir = join(root, 'dist', langPath(lang))
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'index.html'), html)
  console.log(`prerender: wrote ${join('dist', langPath(lang), 'index.html')}`)
}
