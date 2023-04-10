import React from "react";
import "./Navigation.css";
import { Link } from 'react-router-dom';
import  { useState } from 'react';

const Navigation = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogout() {
        localStorage.removeItem('token');
        window.location.href="/";
      }
    
    
    return (
        <>
            <nav className="navbar" >
                <div className="navbar_container container">
                    <input type="checkbox" name="" id="" />
                    <div className="hamburger_lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>

                    <ul className="menu_items">
                        <li><Link to="/" style={{ marginLeft: '-62rem' }}>Home</Link></li>
                        {/* <li><a href="#" style={{ marginLeft: '-59rem' }}>Blood</a></li> */}
                        <li><Link to="/postrequest" style={{ marginLeft: '-59rem' }} id="primary_nav_wrap">Post Request</Link>
                        </li>
                        <li><Link to="/bloodbank" style={{ marginLeft: '-52.6rem' }} id="primary_nav_wrap">Find Blood Bank</Link></li>
                        <li><Link to="/notification" style={{ marginLeft: '-45.1rem' }} id="primary_nav_wrap">Notification</Link></li>

                    </ul>
                    <img src="./BLM.png" style={{ marginLeft: '-135rem' }} className="logo" alt=" " />
                    <div className="signup">
                    {(localStorage.getItem("token")==undefined)?(<> <a href="./login" className="button">Sign In</a></>):(<> <a href="#" onClick={handleLogout} className="button">Sign Out</a></>)}
                       
                    </div>
                </div>

            </nav>

        </>
    )
}

export default Navigation
