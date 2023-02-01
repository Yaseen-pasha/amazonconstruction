import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = (props) => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (<>
    <nav className={showMediaIcons ? props.bg : props.nav}>
            <NavLink to="/"><img src="images/logo2.jpg" alt="logo"/></NavLink>
            <ul className={showMediaIcons ? "nav-list" : "nav-list v-class"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact US</NavLink></li>
            </ul>
            <div className={showMediaIcons ? "rightNav v-class" : "rightNav"}>
                <input type="text" name="query" id="search"/>
                <button className="btn-sm">Search</button>
            </div>
            <div className={showMediaIcons ? "burger openburger" : "burger"} onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
  </>);
};
export default Navbar;