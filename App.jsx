import React from 'react'
import brandImage from "./assets/images/brand_logo.png"
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'


const App = () => {
  return (
    <div>
      <nav>
        <div className = 'logo'>
         <img src = {brandImage} alt='nike_logo'/>
       </div>

       <ul>
        <li href="#">Home</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
       </ul>

       <button>
        LOGIN
       </button>
      </nav>
     <HeroSection />
    </div>
    
  )
}

export default App