import { useEffect, useMemo, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, BookOpen, ChevronRight, Code2, Download, Github, Globe, Linkedin, Lock, Mail, Menu, Star, Terminal, X } from 'lucide-react'
import { about, areas, education, experience, hero, langPath, links, meta, projects, repos, ui, type Area, type Lang, type Tx } from './content'
import { fetchArticles, type Article } from './articles'

type ContributionDay = { date: string; count: number; level: number }
type Props = { initialLang: Lang; initialArticles: Article[] }

const ext = { target: '_blank', rel: 'noreferrer' } as const

function App({ initialLang, initialArticles }: Props) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [activeArea, setActiveArea] = useState<Area | 'all'>('all')
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([])
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [contributionTotal, setContributionTotal] = useState(0)
  const [contributionState, setContributionState] = useState<'loading' | 'ready' | 'error'>('loading')
  const [articles, setArticles] = useState<Article[]>(initialArticles)
  const [articleState, setArticleState] = useState<'loading' | 'ready' | 'error'>(initialArticles.length ? 'ready' : 'loading')
  const [mobileMenu, setMobileMenu] = useState(false)
  const t = (v: Tx) => v[lang]

  const setLang = (next: Lang) => {
    setLangState(next)
    try { localStorage.setItem('portfolio-lang', next) } catch { /* storage unavailable */ }
    window.history.replaceState(null, '', langPath(next) + window.location.hash)
  }

  // Preferences are read after hydration so the prerendered HTML and the first client render match.
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio-theme')
      if (savedTheme === 'light') setTheme('light')
      const savedLang = localStorage.getItem('portfolio-lang') as Lang | null
      if (window.location.pathname === '/' && (savedLang === 'fr' || savedLang === 'ar')) setLang(savedLang)
    } catch { /* storage unavailable */ }
  }, [])
  useEffect(() => { try { localStorage.setItem('portfolio-theme', theme) } catch { /* storage unavailable */ } }, [theme])
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = meta.title[lang]
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description[lang])
  }, [lang])

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/hamzakhalem?y=last', { cache: 'no-store' })
      .then((r) => { if (!r.ok) throw new Error('GitHub contribution data unavailable'); return r.json() })
      .then((data: { contributions?: ContributionDay[]; total?: { lastYear?: number } }) => {
        if (!Array.isArray(data.contributions)) throw new Error('Invalid GitHub contribution response')
        setContributions(data.contributions)
        setContributionTotal(data.total?.lastYear ?? data.contributions.reduce((total, day) => total + day.count, 0))
        setContributionState('ready')
      })
      .catch(() => setContributionState('error'))
  }, [])

  // Articles are prerendered at build time; refresh them in the browser so new posts show up between deploys.
  useEffect(() => {
    fetchArticles()
      .then((items) => { if (items.length) { setArticles(items); setArticleState('ready') } else if (!initialArticles.length) setArticleState('error') })
      .catch(() => { if (!initialArticles.length) setArticleState('error') })
  }, [])

  useEffect(() => {
    if (!terminalOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setTerminalOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [terminalOpen])

  const visibleProjects = useMemo(() => activeArea === 'all' ? projects : projects.filter((p) => p.category === activeArea), [activeArea])
  const dateFmt = (d: Date) => new Intl.DateTimeFormat(lang === 'ar' ? 'ar-DZ' : lang, { dateStyle: 'medium' }).format(d)

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return
    const responses: Record<string, string> = {
      help: t(ui.termHelp),
      about: t(ui.termAbout),
      skills: 'PHP · Moodle · PostgreSQL · Redis · Python/Django · React · Docker · REST APIs · LLM APIs',
      projects: t(ui.termProjects),
      contact: `Email: ${links.email} · GitHub: github.com/hamzakhalem`,
    }
    if (cmd === 'clear') { setHistory([]); setCommand(''); return }
    setHistory((old) => [...old, { cmd: raw, output: responses[cmd] ?? `${t(ui.termNotFound)} ${raw}. ${t(ui.termHelpHint)}` }])
    setCommand('')
  }

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMobileMenu(false) }
  const artLabel = (a: Area) => t(a === 'software' ? ui.artSoftware : a === 'ai' ? ui.artAi : ui.artLms)
  const nav: [string, Tx][] = [['experience', ui.navExperience], ['projects', ui.navWork], ['education', ui.navEducation], ['github', ui.navOpenSource], ['medium', ui.navArticles], ['about', ui.navAbout]]

  return <main data-theme={theme} dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
    <header className="nav shell">
      <a className="brand" href="#top" aria-label="Hamza Khalem"><span className="brand-mark">hk<span>.</span></span><span className="brand-caption">{t(ui.brandCaption)}</span></a>
      <nav className={mobileMenu ? 'nav-links open' : 'nav-links'}>
        {nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>{t(label)}</a>)}
      </nav>
      <div className="nav-actions">
        <div className="preferences">
          <select aria-label="Language" value={lang} onChange={(e) => setLang(e.target.value as Lang)}><option value="en">EN</option><option value="fr">FR</option><option value="ar">عربي</option></select>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>{theme === 'dark' ? '☼' : '☾'}</button>
        </div>
        <button className="terminal-trigger" onClick={() => setTerminalOpen(true)}><Terminal size={15} /> <span>{t(ui.terminal)}</span><kbd>↵</kbd></button>
        <a className="contact-link" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>{t(ui.letsTalk)} <ArrowUpRight size={15}/></a>
        <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">{mobileMenu ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="status"><span className="status-dot"/> <span>{t(hero.availability)}</span></div>
        <p className="overline hero-eyebrow">{t(hero.eyebrow)}</p>
        <h1>{t(hero.headline)} <span className="accent-word">{t(hero.headlineAccent)}</span></h1>
        <p className="hero-subtitle">{t(hero.sub)}</p>
        <div className="hero-buttons">
          <a className="button-primary" href={links.cv} download="Hamza-Khalem-CV.pdf"><Download size={16}/> {t(ui.downloadCv)}</a>
          <a className="button-secondary" href={links.github} {...ext}><Github size={16}/> {t(ui.viewGithub)} <ArrowUpRight size={15}/></a>
          <a className="button-secondary" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}><Mail size={16}/> {t(ui.contactMe)}</a>
        </div>
        <ul className="hero-meta">{hero.stats.map((s) => <li key={s.value}><b>{s.value}</b> {t(s.label)}</li>)}</ul>
      </div>
      <aside className="hero-facts" aria-label={t(ui.atAGlance)}>
        <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span>{t(ui.atAGlance)}</span></div>
        <div className="facts-profile"><img src="/hamza-khalem.webp" alt={t(ui.photoAlt)} width={64} height={64} fetchPriority="high"/><div><strong>Hamza Khalem</strong><span>{t(ui.profileRole)}</span></div></div>
        <dl>{hero.facts.map((f) => <div key={f.label.en}><dt>{t(f.label)}</dt><dd>{t(f.value)}</dd></div>)}</dl>
      </aside>
      <button className="scroll-cue" onClick={() => scrollTo('experience')}><span>{t(ui.scroll)}</span><ArrowDownRight size={15}/></button>
    </section>

    <section className="experience-section shell" id="experience">
      <div className="section-heading"><div><p className="overline">{t(ui.expOverline)}</p><h2>{t(ui.expHeading)} <span>{t(ui.expHeadingAccent)}</span></h2></div></div>
      <ol className="timeline">{experience.map((role) => <li className="role" key={role.company}>
        <div className="role-head"><h3>{t(role.title)} <span className="role-company">· {role.company}</span></h3><span className="role-dates">{t(role.dates)}{role.location && <> · {t(role.location)}</>}</span></div>
        {role.stack && <p className="role-stack">{role.stack}</p>}
        <ul>{role.bullets.map((b) => <li key={b.en}>{t(b)}</li>)}</ul>
      </li>)}</ol>
    </section>

    <section className="projects-section shell" id="projects">
      <div className="section-heading"><div><p className="overline">{t(ui.workOverline)}</p><h2>{t(ui.workHeading)} <span>{t(ui.workHeadingAccent)}</span></h2></div>
        <div className="project-filters"><button className={activeArea === 'all' ? 'filter active' : 'filter'} onClick={() => setActiveArea('all')}>{t(ui.allWork)}</button>{areas.map((a) => <button key={a.id} className={activeArea === a.id ? 'filter active' : 'filter'} onClick={() => setActiveArea(a.id)}>{a.id === 'software' ? t(ui.filterSoftware) : a.id === 'ai' ? 'AI' : 'EdTech & LMS'}</button>)}</div>
      </div>
      <div className="projects-grid">{visibleProjects.map((p, index) => <article className={p.featured ? 'project-card featured' : 'project-card'} key={p.title} style={{ animationDelay: `${index * 70}ms` }}>
        <div className={`project-art art-${p.category}`}><span className="project-index">{String(projects.indexOf(p) + 1).padStart(2, '0')}</span>{p.featured && <span className="tag tag-featured"><Star size={11}/> {t(ui.featured)}</span>}<div className="art-decoration"><span/><span/><span/></div><span className="project-art-label">{artLabel(p.category)}</span></div>
        <div className="project-content">
          <p className="project-eyebrow">{t(p.eyebrow)}</p>
          <h3>{p.title}</h3>
          {p.proprietary && <p className="tag tag-private"><Lock size={11}/> {t(ui.proprietary)}</p>}
          <dl className="project-fields">
            <div><dt>{t(ui.context)}</dt><dd>{t(p.context)}</dd></div>
            <div><dt>{t(ui.myRole)}</dt><dd>{t(p.role)}</dd></div>
            <div><dt>{t(ui.stack)}</dt><dd className="stack-list">{p.stack.map((s) => <span key={s}>{s}</span>)}</dd></div>
            {p.result && <div className="project-outcome"><dt>{t(ui.result)}</dt><dd>{t(p.result)}</dd></div>}
            {p.status && <div className="project-outcome"><dt>{t(ui.status)}</dt><dd>{t(p.status)}</dd></div>}
          </dl>
          {p.links && <div className="project-links">{p.links.map((l) => <a key={l.href} href={l.href} {...ext}>{l.kind === 'site' ? <Globe size={14}/> : <Github size={14}/>} {t(l.label)} <ArrowUpRight size={13}/></a>)}</div>}
        </div>
      </article>)}</div>
    </section>

    <section className="areas-section shell" id="areas">
      <div className="section-heading"><div><p className="overline">{t(ui.areasOverline)}</p><h2>{t(ui.areasHeading)} <span>{t(ui.areasHeadingAccent)}</span></h2></div><p className="section-aside">{t(ui.areasAside)}</p></div>
      <div className="area-grid">{areas.map((area) => <button className={`area-card area-${area.id} ${activeArea === area.id ? 'selected' : ''}`} key={area.id} onClick={() => { setActiveArea(activeArea === area.id ? 'all' : area.id); scrollTo('projects') }}>
        <div className="area-card-top"><span className="area-number">/{area.number}</span><span className="area-arrow"><ArrowUpRight size={18}/></span></div>
        <div className="area-icon">{area.id === 'software' ? <Code2 size={23}/> : area.id === 'ai' ? <span className="ai-glyph">✳</span> : <span className="lms-glyph">▤</span>}</div>
        <h3>{t(area.title)}</h3><p>{t(area.description)}</p>
        <p className="area-proof"><span>{t(ui.proof)}</span>{t(area.proof)}</p>
        <div className="area-tags">{area.tags.map((tag) => <span key={tag.en}>{t(tag)}</span>)}</div>
        <div className="area-bottom"><span>{t(ui.exploreArea)}</span><ChevronRight size={16}/></div>
      </button>)}</div>
    </section>

    <section className="education-section shell" id="education">
      <div className="section-heading"><div><p className="overline">{t(ui.eduOverline)}</p><h2>{t(ui.eduHeading)} <span>{t(ui.eduHeadingAccent)}</span></h2></div></div>
      <div className="edu-grid">
        <div className="edu-card"><h3>{t(ui.degrees)}</h3><ul>{education.degrees.map((d) => <li key={d.years}><strong>{t(d.degree)}</strong><span>{t(d.school)} · {d.years}</span></li>)}</ul></div>
        <div className="edu-card"><h3>{t(ui.certifications)}</h3><ul>{education.certifications.map((c) => <li key={c.en}><strong>{t(c)}</strong></li>)}</ul></div>
        <div className="edu-card"><h3>{t(ui.languages)}</h3><ul>{education.languages.map((l) => <li key={l.name.en}><strong>{t(l.name)}</strong><span>{t(l.level)}</span></li>)}</ul></div>
      </div>
    </section>

    <section className="github-section shell" id="github">
      <div className="github-header"><div><p className="overline">{t(ui.ossOverline)}</p><h2>{t(ui.ossHeading)} <span>{t(ui.ossHeadingAccent)}</span></h2><p className="github-intro">{t(ui.ossIntro)}</p></div><a className="github-profile" href={links.github} {...ext}><Github size={18}/> github.com/hamzakhalem <ArrowUpRight size={15}/></a></div>
      <div className="repo-heading"><h3>{t(ui.selectedRepos)}</h3></div>
      <div className="repo-grid">{repos.map((repo) => <a className="repo-card" href={repo.url} {...ext} key={repo.name}><div className="repo-name"><Github size={15}/><strong>{repo.name}</strong><ArrowUpRight size={14}/></div><p>{t(repo.description)}</p><div className="repo-meta"><span><i/> {repo.tech}</span></div></a>)}</div>
      <div className="contributions-card"><div className="contrib-top"><div><span className="live-dot"/> {t(ui.contribActivity)}</div><span className="contrib-hint">{contributionState === 'ready' ? <>{new Intl.NumberFormat(lang).format(contributionTotal)} {t(ui.contribPastYear)}</> : t(ui.contribCalendar)}</span></div>
        <div className="contrib-image-wrap">{contributionState === 'loading' && <span className="contrib-hint">{t(ui.contribCalendar)}</span>}{contributionState === 'ready' && <div className="contrib-calendar" role="img" aria-label={`${contributionTotal} ${t(ui.contribPastYear)}`}>{contributions.map((day) => <span className={`contrib-day level-${Math.min(Math.max(day.level, 0), 4)}`} key={day.date} title={`${day.count} · ${dateFmt(new Date(`${day.date}T12:00:00`))}`} />)}</div>}{contributionState === 'error' && <p className="contrib-fallback">{t(ui.contribError)} <a href={links.github} {...ext}>{t(ui.openProfile)}</a></p>}</div>
        <div className="contrib-bottom"><span>{t(ui.less)} <i className="level level-0"/><i className="level level-1"/><i className="level level-2"/><i className="level level-3"/><i className="level level-4"/> {t(ui.more)}</span><a href={links.github} {...ext}>{t(ui.fullActivity)} <ArrowUpRight size={14}/></a></div>
      </div>
    </section>

    <section className="medium-section shell" id="medium">
      <div className="medium-header"><div><p className="overline">{t(ui.articlesOverline)}</p><h2>{t(ui.articlesHeading)}</h2></div><a className="medium-profile" href={links.medium} {...ext}><BookOpen size={17}/> {t(ui.moreOnMedium)} <ArrowUpRight size={15}/></a></div>
      {articleState === 'loading' && <div className="medium-loading"><span className="live-dot"/> {t(ui.articlesLoading)}</div>}
      {articleState === 'error' && <div className="medium-error">{t(ui.articlesError)} <a href={links.medium} {...ext}>{t(ui.moreOnMedium)} <ArrowUpRight size={14}/></a></div>}
      {articleState === 'ready' && <div className="medium-grid">{articles.map((a) => <article className="medium-card" key={a.link}>{a.thumbnail && <a className="medium-thumb" href={a.link} {...ext}><img src={a.thumbnail} alt="" loading="lazy"/></a>}<div className="medium-card-body">{a.pubDate && <span className="medium-date">{dateFmt(new Date(a.pubDate.replace(' ', 'T') + 'Z'))}</span>}<h3><a href={a.link} {...ext}>{a.title}</a></h3>{a.description && <p>{a.description}</p>}<a className="medium-read" href={a.link} {...ext}>{t(ui.readArticle)} <ArrowUpRight size={14}/></a></div></article>)}</div>}
    </section>

    <section className="about-section shell" id="about">
      <div className="about-label"><p className="overline">{t(ui.aboutOverline)}</p><img className="about-photo" src="/hamza-khalem.webp" alt={t(ui.photoAlt)} width={640} height={640} loading="lazy"/></div>
      <div className="about-copy"><h2>{t(about.heading)}<br/><span>{t(about.headingAccent)}</span></h2><p>{t(about.body)}</p></div>
    </section>

    <section className="contact-section shell" id="contact"><div className="contact-panel"><div className="contact-orb"/>
      <p className="overline">{t(ui.contactOverline)}</p>
      <h2>{t(ui.contactHeading)}<br/><span>{t(ui.contactHeadingAccent)}</span></h2>
      <p>{t(ui.contactBody)}</p>
      <a className="button-primary contact-email" href={`mailto:${links.email}`}><Mail size={17}/> <span dir="ltr">{links.email}</span></a>
      <div className="contact-links">
        <a href={links.linkedin} {...ext}><Linkedin size={15}/> LinkedIn <ArrowUpRight size={12}/></a>
        <a href={links.github} {...ext}><Github size={15}/> GitHub <ArrowUpRight size={12}/></a>
        <a href={links.cv} download="Hamza-Khalem-CV.pdf"><Download size={15}/> {t(ui.downloadCv)}</a>
      </div>
    </div></section>

    <footer className="footer shell"><a className="brand" href="#top" aria-label="Hamza Khalem"><span className="brand-mark">hk<span>.</span></span></a><span>{t(ui.footer)}</span><span>© {new Date().getFullYear()} Hamza Khalem</span></footer>

    {terminalOpen && <div className="terminal-modal" role="dialog" aria-modal="true" aria-label={t(ui.terminal)} onMouseDown={(e) => { if (e.target === e.currentTarget) setTerminalOpen(false) }}><div className="terminal-dialog">
      <div className="window-top"><div className="window-dots"><i/><i/><i/></div><span><Terminal size={13}/> interactive-terminal — bash</span><button onClick={() => setTerminalOpen(false)} aria-label="Close terminal"><X size={17}/></button></div>
      <div className="modal-terminal-body">
        <p className="terminal-muted">{t(ui.termWelcome)} <b>help</b> {t(ui.termStart)}</p>
        {history.map((item, i) => <div className="term-example" key={`${item.cmd}-${i}`}><p><span className="prompt-symbol">➜</span> <span className="syntax-blue">~</span> {item.cmd}</p><p className="term-result">{item.output}</p></div>)}
        <form className="terminal-input-line" onSubmit={(e) => { e.preventDefault(); runCommand(command) }}><span className="prompt-symbol">➜</span><span className="syntax-blue">~</span><input autoFocus value={command} onChange={(e) => setCommand(e.target.value)} placeholder={t(ui.termPlaceholder)} aria-label="Terminal command"/><span className="cursor"/></form>
      </div>
      <div className="terminal-modal-footer"><span>{t(ui.termTry)} <button onClick={() => runCommand('about')}>about</button> <button onClick={() => runCommand('skills')}>skills</button> <button onClick={() => runCommand('contact')}>contact</button></span><span>{t(ui.termClose)}</span></div>
    </div></div>}
  </main>
}

export default App
