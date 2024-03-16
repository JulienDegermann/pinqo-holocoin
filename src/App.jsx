import './App.css'
import { useRef } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Roadmap from './pages/Roadmap'
import Footer from './components/Footer'

function App() {

  const anchorRefs = {
    about: useRef(null),
    team: useRef(null),
    rarity: useRef(null),
    contact: useRef(null)
  };
  return (
    <>
      <BrowserRouter>
        <Header anchorRefs={anchorRefs} />
        <main>

          <Routes>
            <Route path="/" element={<Home anchorRefs={ anchorRefs } />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
         
        </main>

        <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
