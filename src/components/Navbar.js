import './Navbar.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBeer } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

    const [click, setClick] = useState(false);

    const[color,setColor] = useState(false);
    const changeColor=()=>
    {
        if(window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    const handleClick = () => {
        setClick(!click);
    }


    return (
        <div className={color?"header header-bg":"header"}>
            <Link to="/">
                <h1 className="portfolio">Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu " : "nav-menu active"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/myportfoliowebsite/project">Project</Link>
                </li>
                <li>
                    <Link to="/myportfoliowebsite/about">About</Link>
                </li>
                <li>
                    <Link to="/myportfoliowebsite/contact">Contact</Link>
                </li>

            </ul>

            <div className="hamburger" onClick={handleClick}>
                { click ?(
                 <RxCross2 size={20} style={{ color: "#fff" }} />
                 ):(
                <FaBeer size={20} style={{ color: "#fff" }}/>
                 )}
            </div>


        </div>
    )
}

export default Navbar