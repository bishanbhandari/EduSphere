import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h1>Excellence in Education provides , Strength for the Future</h1>
            <p>Our curriculum is designed to foster academic excellence, 
                practical skills, and critical thinking across a wide 
                range of disciplines.</p>
                <button className='btn'>Explore <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero;