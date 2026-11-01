/**
 * Build an absolute URL that works both on GitHub Pages (base `/Portfolio/`)
 * and inside the native Capacitor app (base `/`).
 */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
