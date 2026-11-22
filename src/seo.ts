import { LANGS, SITE_URL, education, langPath, links, meta, type Lang } from './content'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const ogLocale: Record<Lang, string> = { en: 'en_US', fr: 'fr_FR', ar: 'ar_DZ' }

export const pageUrl = (lang: Lang) => `${SITE_URL}${langPath(lang)}`

// Everything that goes in <head> for one language version of the page.
export function headTags(lang: Lang): string {
  const url = pageUrl(lang)
  const title = meta.title[lang]
  const description = meta.description[lang]
  const image = `${SITE_URL}/og-image.png`
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Hamza Khalem',
    jobTitle: 'Software Engineer',
    knowsAbout: ['Software engineering', 'Web development', 'REST APIs', 'LLM integrations', 'Python', 'PHP', 'React'],
    url: pageUrl('en'),
    image: `${SITE_URL}/hamza-khalem.webp`,
    email: `mailto:${links.email}`,
    sameAs: [links.linkedin, links.github, links.medium],
    address: { '@type': 'PostalAddress', addressLocality: 'Algiers', addressCountry: 'DZ' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: education.degrees[0].school.en },
    knowsLanguage: ['ar', 'fr', 'en'],
  }
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${pageUrl(l)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${pageUrl('en')}" />`,
    `<meta property="og:type" content="profile" />`,
    `<meta property="og:site_name" content="Hamza Khalem" />`,
    `<meta property="og:title" content="${esc(meta.ogTitle[lang])}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${ogLocale[lang]}" />`,
    ...LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${ogLocale[l]}" />`),
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Hamza Khalem — Software Engineer" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.ogTitle[lang])}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}
