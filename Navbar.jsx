import React from 'react'

const Navbar = () => {
  return (
    
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
  )
};

export default Navbar