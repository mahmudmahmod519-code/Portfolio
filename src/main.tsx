import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Capacitor } from '@capacitor/core'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

// GitHub Pages serves the app from /Portfolio, the native app from /.
const basename = Capacitor.isNativePlatform() ? '/' : 'Portfolio'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
)
