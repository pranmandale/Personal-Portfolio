import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Project from './components/project/Project'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Project/>
     <Skills/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
