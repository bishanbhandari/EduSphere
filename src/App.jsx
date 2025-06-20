import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Video from "./Components/Video/Video";


const App = () => {

    const [playState,setPlayState]=useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus/>
        <Title subtitle="Testimonials" title="what student says"/>
        <Testimonials/>
        <Title subtitle="Contact Us" title="Get in Touch"/>
        <Contact/>
       <Footer/>
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </>

  );
};

export default App;
