import './stylescss/App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Umrah from './pages/Umrah'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Boeking from './pages/Boeking'


function App() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/umrah" element={<Umrah />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/boeking" element={<Boeking />} />
        </Routes>
      </main>
    </>
  )
}



export default App
