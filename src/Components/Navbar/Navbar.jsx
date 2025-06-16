import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaUniversity } from "react-icons/fa";
const Navbar = () => {

    const [sticky,setSticky]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
        window.scrollY > 50 ?setSticky(true):setSticky(false);
      })
    },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav':''}`}>
      <h1 className='logo'>EduSphere <FaUniversity/></h1>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
             <li> <button className='btn'>Contact Us</button></li>

        </ul>

    </nav>
  )
}

export default Navbar;