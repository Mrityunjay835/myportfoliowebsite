import React from 'react';
import './HeroImg.css';
import IntroImg from "../assets/Milky1.jpg";
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img src={IntroImg} alt="IntroImg" className="intro-img" />
            </div>

            <div className="content">
                <p>My name is <br/>
                 Mrityunjay Kumar.</p>
                <h1>FULL STACK Decveloper</h1>
                <div>
                    <Link to="/project" className="btn">PROJECT</Link>
                    <Link to="/contact" className="btn btn-light">CONTACT</Link>
                </div>

            </div>

        </div>
    )
}

export default HeroImg