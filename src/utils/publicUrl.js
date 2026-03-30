/** Resolves paths under `public/` for any Vite `base` (e.g. GitHub Pages). */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL ?? '/'
  const normalized = path.startsWith('/') ? path.slice(1) : path
  if (base === '/') return `/${normalized}`
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}${normalized}`
}

/** Resolves a file under `public/img/`. Pass e.g. `shape1.png` or `blog-image/9.jpg`. */
export function publicImg(path) {
  const normalized = path.replace(/^img\//, '')
  return publicUrl(`img/${normalized}`)
}
