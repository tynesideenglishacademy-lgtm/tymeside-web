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

// ⚡ Bolt: Lazily load LevelTest to reduce main bundle size.
// The LevelTest component imports heavy libraries like jsPDF and Supabase.
// Lazy loading it reduces the main bundle and improves initial load time on the homepage.
// Expected impact: Reduces main bundle by ~425KB (unminified).
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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level-test" element={<LevelTest />} />
      </Routes>
    </Suspense>
  )
}

export default App
