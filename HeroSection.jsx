import React from 'react'

import amazon from "../assets/images/amazon.png"
import flipkart from "../assets/images/flipkart.png"
import heroImage from "../assets/images/shoe_image.png"

const HeroSection = () => {
  return <main className='hero'>
        <div className='hero-content'>
            <h1>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST 
            AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>

            <div className='hero-button'>
            <button>
                SHOP NOW
            </button>
            <button className='secondary-button'>
                CATEGORIES
            </button>
            </div>

            <div className='shopping'>
                <p>
                Also Available On
                </p>

                <div className='brand-icons'>

                    <img src={amazon} alt='amazon_logo'/>
                    <img src ={flipkart} alt='filpkart_logo'/>
                </div>
            </div>
        </div>
        <div className='hero-image'>
            <img src={heroImage} alt='shoe_image'/>
        </div>
  </main>
   
  
};

export default HeroSection