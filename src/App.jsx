import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navabar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Experience from './Components/Experience.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar style={{position:"fixed"}}/>
  <div className='pt-[3vw] w-full scroll-smooth'>
  <section id='home'><Hero/></section>
  <section id='about'><About/></section>
  <section id='skills'><Skills/></section>
  <section id='Experience'><Experience/></section>
  <section id='projects'><Projects/></section>
  <section id='contact'><Contact/></section>
  </div>
    </>
  )
}

export default App
