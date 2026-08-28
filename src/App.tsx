import { lazy, Suspense } from 'react'
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

// ⚡ Bolt: Lazy load the LevelTest route component
// This significantly reduces the main bundle size since LevelTest includes
// heavy dependencies (jspdf, supabase) and a large question bank that
// aren't needed on the landing page.
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/level-test"
        element={
          <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--color-bg-base)' }}>Loading...</div>}>
            <LevelTest />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default App
