import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Home from './routes/Home';
import Project from './routes/Project';

function App() {
  return (
    <>
    <Routes>
      <Route path="/myportfoliowebsite" element={ <Home/> }/>
      <Route path="/myportfoliowebsite/project" element={ <Project/> }/>
      <Route path="/myportfoliowebsite/about" element={ <About/> }/>
      <Route path="/myportfoliowebsite/contact" element={  <Contact/> }/>
    </Routes>
    </>
  );
}

export default App;
