import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutUs from './components/AboutUs/AboutUs'
import { initNavbarScrollTrigger, cleanupScrollTrigger } from './components/script'

function App() {
  useEffect(() => {
    // Initialize the navbar scroll trigger when component mounts
    initNavbarScrollTrigger()
    
    // Cleanup function to remove ScrollTrigger instances when component unmounts
    return () => {
      cleanupScrollTrigger()
    }
  }, [])

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App
