import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import { langFromPath } from './content'
import type { Article } from './articles'
import './styles.css'

declare global { interface Window { __ARTICLES__?: Article[] } }

const root = document.getElementById('root')!
const app = <React.StrictMode><App initialLang={langFromPath(window.location.pathname)} initialArticles={window.__ARTICLES__ ?? []} /></React.StrictMode>

// Production pages are prerendered (scripts/prerender.mjs), so hydrate them; the dev server serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
