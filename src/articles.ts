import { articleConfig, links } from './content'

export type Article = { title: string; link: string; description: string; thumbnail?: string; pubDate?: string }

const FEED = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/${links.medium.split('/').pop()}`)}`

// Compare Medium URLs without query string, hash or trailing slash.
export const normalizeUrl = (url: string) => url.split(/[?#]/)[0].replace(/\/+$/, '').toLowerCase()

const clean = (html: string) => {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim()
  return text.length <= 180 ? text : text.slice(0, 180).replace(/\s+\S*$/, '') + '…'
}

// Applies the pin / hide rules from content.ts: pinned first (in config order), then newest first.
export function selectArticles(items: Article[]): Article[] {
  const hidden = new Set(articleConfig.hidden.map(normalizeUrl))
  const pinned = articleConfig.pinned.map(normalizeUrl)
  const visible = items.filter((a) => !hidden.has(normalizeUrl(a.link)))
  const rank = (a: Article) => { const i = pinned.indexOf(normalizeUrl(a.link)); return i === -1 ? Infinity : i }
  const time = (a: Article) => (a.pubDate ? Date.parse(a.pubDate.replace(' ', 'T') + 'Z') || 0 : 0)
  return visible.sort((a, b) => rank(a) - rank(b) || time(b) - time(a)).slice(0, articleConfig.max)
}

export async function fetchArticles(): Promise<Article[]> {
  const r = await fetch(FEED)
  if (!r.ok) throw new Error('Medium feed unavailable')
  const data = await r.json()
  if (data.status !== 'ok' || !Array.isArray(data.items)) throw new Error('Invalid Medium feed')
  const items: Article[] = data.items.map((item: { title: string; link: string; description?: string; content?: string; thumbnail?: string; pubDate?: string }) => ({
    title: item.title,
    link: item.link.split('?')[0],
    description: clean(item.description || item.content || ''),
    thumbnail: item.thumbnail || undefined,
    pubDate: item.pubDate,
  }))
  return selectArticles(items)
}
