import React, { useEffect } from 'react'
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';

const Home = () => {
  useEffect(()=>{
    document.title="home"
  },[])
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Footer/>

    </div>
  )
}

export default Home;