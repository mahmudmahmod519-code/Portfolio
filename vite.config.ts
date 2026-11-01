import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  // The native app is served from the WebView root, while GitHub Pages
  // serves the site from /Portfolio.
  base: mode === 'capacitor' ? '/' : '/Portfolio',
}))
