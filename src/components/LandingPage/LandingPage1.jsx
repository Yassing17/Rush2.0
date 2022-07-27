import React, { useState } from 'react'
import './LandingPageStyles1.css'
import { Link } from 'react-scroll'
import Carousel from '../Carousel/Carousel'

const LandingPage1 = () => {
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
        <div name='landingpage1' className='landingpage1'>
            <div className="container">
                <div className="top">
                    <h1>RUSH</h1>
                </div>
                <div className='container2'>
                    <p>
                        The RUSH project within the Inspire program aims to support the RUSH initiative.
                        The RUSH initiative seeks to foster ecological healing through community engagement
                        by centralizing information on an interactive landing page that reports regional 
                        climate change vulnerabilities. As a result, the community can develop consensus on 
                        the risks and corresponding preventative actions that are needed. This tool is necessary
                        because communities often feel disconnected from the data that motivates policymaking. 
                        Further, by leveraging geographic information systems (GIS), the data can be made 
                        comprehensible and accessible to all community members. In the long term, the RUSH platform 
                        can become a tool for the region to develop community autonomy, awareness, and agency.
                    </p>
                </div> 
                <div className='container3'>
                    <Carousel />
                </div>
                <div className="bottom">
                    <Link onClick={handleClose} activeClass="active" to="dashpage" spy={true} smooth={true} duration={500}><button className="btn btn-dark">Learn</button></Link>
                    <Link onClick={handleClose} activeClass="active" to="eventpage" spy={true} smooth={true} duration={500}><button className="btn btn-dark">Act</button></Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage1