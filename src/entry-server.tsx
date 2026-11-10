import { renderToString } from 'react-dom/server'
import App from './App'
import type { Lang } from './content'
import type { Article } from './articles'

export { LANGS, langPath } from './content'
export { headTags } from './seo'
export { fetchArticles } from './articles'

export const render = (lang: Lang, articles: Article[]) => renderToString(<App initialLang={lang} initialArticles={articles} />)
