import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaUniversity } from "react-icons/fa";
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';
const Navbar = () => {

    const [sticky,setSticky]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
        window.scrollY > 50 ?setSticky(true):setSticky(false);
      })
    },[]);

    const [mobileMenu,setMobileMenu]=useState(false);
    
    const toggleMenu=()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
      <h1 className='logo'>EduSphere <FaUniversity/></h1>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
  <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
  <li><Link to="program" smooth={true} offset={-260} duration={500}>Programs</Link></li>
  <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
  <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
  <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
  <li><Link to="contact" className="btn" smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
</ul>

    <img  onClick={toggleMenu} src={menu_icon} alt="" className='menu'/>
    </nav>
  )
}

export default Navbar;