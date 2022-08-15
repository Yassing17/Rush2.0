import React, { useState } from 'react'
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
import { GiCarWheel } from 'react-icons/gi'
import './NavigationStyles.css'
import { Link } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'


const Navigation = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const handleClose = () => {
        setNav(!nav)
    }

    return (
        <div className='navigation'>
            <div className="containerYG">
                <div className={slide ? 'logo slide-right' : 'logo'}>
                    <h2><Link style={{color: 'white'}} className='rushTitle' onClick={handleClose} activeClass="active" to="landingpage1" spy={true} smooth={true} duration={500}>R U S H</Link></h2>
                </div>


                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link onClick={handleClose} activeClass="active" to="dashpageAnchor" spy={true} smooth={true} duration={500}>Maps</Link></li>
                    <li><Link onClick={handleClose} activeClass="active" to="eventpageAnchor" spy={true} smooth={true} duration={500}>Events</Link></li>
                    <li><Link onClick={handleClose} activeClass="active" to="initiativepageAnchor" spy={true} smooth={true} duration={500}>Initiatives</Link></li>
                    <li><Link onClick={handleClose} activeClass="active" to="aboutpageAnchor" spy={true} smooth={true} duration={500}>About</Link></li>

                    <div className='mobile-menu'>
                        <LinkR  style={{textDecoration: 'none', color: 'white !important' }} to='/ContactPage'>Contact</LinkR>
                        <div className="social-icons">
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <GiCarWheel className='icon' />
                        </div>
                    </div>

                </ul>

                <ul>
                    <li><LinkR className='contactLink' style={{textDecoration: 'none'}} to='/ContactPage'>Contact</LinkR></li>
                </ul>

               
                <div className="hamburger" onClick={handleNav} >
                    {nav ? (<FaTimes size={20} style={{ color: '#000000' }} />) : (<FaBars style={{ color: '#000000' }} size={20} />)}
                </div>

            </div>
        </div>
    )
}

export default Navigation