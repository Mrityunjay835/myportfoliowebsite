import React from 'react';
import './Footer.css';
import { IoIosHome, IoIosMail, IoIosContact,IoLogoFacebook,IoLogoTwitter,IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location"><h4>
                        <IoIosHome size={20} style={{ color: "#fff" , marginRight:"2rem"}} /></h4>
                        <div>
                            <p>123 , Bela Hazaribagh</p>
                            <p>Jharkhand</p>
                        </div>
                    </div>
                    <div className="location"><h4>
                        <IoIosContact size={20} style={{ color: "#fff", marginRight: "2rem"  }} />
                        +91 930 461 7353</h4>


                    </div>
                    <div className="location">
                        <h4>
                            <IoIosMail size={20} style={{ color: "#fff",marginRight: "2rem"  }} />
                            mrityunjaykumar835@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the componey</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, deleniti!</p>
                    <div className="social">
                
                            <IoLogoFacebook size={20} style={{ color: "#fff",marginRight: "1rem"  }} />
                            <IoLogoTwitter size={20} style={{ color: "#fff",marginRight: "1rem"  }} />
                            <IoLogoLinkedin size={20} style={{ color: "#fff",marginRight: "1rem"  }} />
                            

                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer