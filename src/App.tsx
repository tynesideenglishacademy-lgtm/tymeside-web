import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Courses from './components/Courses'
import About from './components/About'
import ExamPrep from './components/ExamPrep'
import Services from './components/Services'
import TripsCamps from './components/TripsCamps'
import BlogPreview from './components/BlogPreview'
import Contact from './components/Contact'
import Footer from './components/Footer'

// ⚡ Bolt: Lazy load LevelTest to reduce initial bundle size and improve page load time.
// LevelTest imports jspdf, which is large and only needed when the user visits /level-test.
const LevelTest = lazy(() => import('./components/LevelTest'))

function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Courses />
      <About />
      <ExamPrep />
      <Services />
      <TripsCamps />
      <BlogPreview />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--color-warm-gold)', backgroundColor: 'var(--color-deep-navy)' }}>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level-test" element={<LevelTest />} />
      </Routes>
    </Suspense>
  )
}

export default App
