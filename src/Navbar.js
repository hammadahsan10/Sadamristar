import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../src/Assets/sad-logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    const handleToggleMenu = () => {
        if (showMenu === true) {

            setShowMenu(false)
        }
        else {

            setShowMenu(true)
        }
    }

    const openTwitter = () => {
        window.open('https://twitter.com/', '_blank');
    };

    const openFacebook = () => {
        window.open('https://www.facebook.com/', '_blank');
    };

    const openWhatsapp = () => {
        window.open('https://web.whatsapp.com/', '_blank');
    };

    return (

        <>

            <nav className="navbar">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <img src={logo} alt="Logo" style={{cursor:'pointer'}} onClick={() => navigate('/')} className="logo" />
                        <ul className="nav-links mt-3" style={{color:'white', fontSize:'18px', textDecoration:"none", cursor:"pointer"}}>
                            <li onClick={() => navigate('/')} className='fw-bold'>Shiromani Akali Dal (Amritsar)</li>
                            <li onClick={() => navigate('/')}>Home</li>
                            <li onClick={() => navigate('/registerform')}>ID Card Registration Form</li>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <FaTwitter className="social-icon" onClick={openTwitter} />
                        <FaFacebook className="social-icon" onClick={openFacebook} />
                        <FaWhatsapp className="social-icon" onClick={openWhatsapp} />
                    </div>
                </div>
                <div className="navbar-content2">
                    <div className="navbar-left">
                        <a href="/" >
                            <img src={logo} onClick={() => navigate('/')} alt="Logo" className="logo" />
                        </a>
                        <ul className="nav-links mt-3">
                            <li style={{color:"white"}} onClick={() => navigate('/')} className='fw-bold'>S.A.D (Amritsar)</li>
                        </ul>
                    </div>
                    <div className="navbar-right" style={{ float: "right" }}>
                        <GiHamburgerMenu className='hamburger mr-3' onClick={handleToggleMenu} />
                    </div>
                </div>
            </nav>
            {showMenu ?
                <nav className="navbar">
                    <div className="navbar-content2">
                        <div className="navbar-left">
                            <ul className="nav-links2 mt-3" style={{color:"white", fontSize:'16px', textDecoration:"none"}}>
                                <li onClick={() => navigate('/')}>Home</li>
                                <li onClick={() => navigate('/registerform')} className='mt-2'>ID Card Registration Form</li>
                            </ul>
                        </div>

                    </div>
                </nav>
                :
                null}
        </>
    );
};

export default Navbar;
