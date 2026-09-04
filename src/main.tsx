import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import './i18n'
import { applyStoredConsent } from './lib/consent'

// Google Fonts and Sentry only load once the visitor has accepted the cookie
// notice. On a return visit where they already accepted, this re-applies that
// choice silently before the first paint. See src/lib/consent.ts.
applyStoredConsent()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
