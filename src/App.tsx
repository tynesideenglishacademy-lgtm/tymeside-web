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

// ⚡ Bolt Optimization: Lazy load LevelTest to reduce initial bundle size by splitting out large dependencies like jspdf.
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
      <Route path="/level-test" element={
        <Suspense fallback={<div>Loading...</div>}>
          <LevelTest />
        </Suspense>
      } />
    </Routes>
  )
}

export default App
