import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const Project = () => {
  useEffect(()=>{
    document.title="projects"
  })
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECT" text="currently project not available"/>
      <Footer/>

    </div>
  )
}

export default Project