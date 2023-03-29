import React, { useEffect } from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const About = () => {
  useEffect(()=>{
    document.title="about"
  },[])
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="I am a sutdent at Jspider" text="I am trying to be a good programer..."/>
      <AboutContent/>
      <Footer/>

    </div>
  )
}

export default About