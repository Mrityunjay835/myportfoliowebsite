import React, { useEffect } from 'react'

import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const Contact = () => {
  useEffect(()=>{
    document.title="contact"
  },[])
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="contact me" text="lets chave a coffee !"/>
      <Form/>
      <Footer/>

    </div>
  )
}

export default Contact