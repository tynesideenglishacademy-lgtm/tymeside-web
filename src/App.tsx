import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Courses from './components/Courses'
import About from './components/About'
import ExamPrep from './components/ExamPrep'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import TripsCamps from './components/TripsCamps'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileCta from './components/MobileCta'
import WhatsAppFab from './components/WhatsAppFab'
import CookieBanner from './components/CookieBanner'
import LegalPage from './components/LegalPage'
import { initReveal } from './lib/reveal'

// jsPDF + html2canvas are ~380 kB and only the level test ever uses them.
// Split out so a visitor landing on the marketing page never downloads them.
const LevelTest = lazy(() => import('./components/LevelTest'))

// A campaign landing: nobody arrives here from the home page, so it has no
// business sitting in the main bundle everyone else downloads.
const AptisOposiciones = lazy(() => import('./components/AptisOposiciones'))

// Same reasoning: a B2B / FUNDAE landing linked from the Services block, not
// somewhere a general visitor lands, so it stays out of the main bundle.
const Empresas = lazy(() => import('./components/Empresas'))

function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Ir al contenido principal</a>
      <Navigation />
      <main id="main">
        <Hero />
        <Courses />
        <About />
        <ExamPrep />
        <Testimonials />
        <Services />
        <TripsCamps />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </>
  )
}

function App() {
  const location = useLocation()

  // Re-run per route: the level-test page mounts a different tree.
  useEffect(() => initReveal(), [location.pathname])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<LegalPage slug="aviso-legal" />} />
        <Route path="/privacidad" element={<LegalPage slug="privacidad" />} />
        <Route path="/cookies" element={<LegalPage slug="cookies" />} />
        <Route
          path="/aptis-oposiciones"
          element={
            <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: 'var(--color-deep-navy)' }} />}>
              <AptisOposiciones />
            </Suspense>
          }
        />
        <Route
          path="/empresas"
          element={
            <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: 'var(--color-deep-navy)' }} />}>
              <Empresas />
            </Suspense>
          }
        />
        <Route
          path="/level-test"
          element={
            <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: 'var(--color-deep-navy)' }} />}>
              <LevelTest />
            </Suspense>
          }
        />
      </Routes>
      <WhatsAppFab />
      <CookieBanner />
      {/* Cookieless page + custom-event analytics (see src/lib/analytics.ts).
          No consent gate: it sets no cookies and stores no personal data. */}
      <Analytics />
    </>
  )
}

export default App
