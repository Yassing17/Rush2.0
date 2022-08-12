import React, { useState } from 'react'
import './LandingPageStyles1.css'
import { Link } from 'react-scroll'
import Territory from '../TerritoryAcknowledgment/territory'






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
            

            <div className="container1">
                <div className='background'>
                    <div className="top">
                        <h6>RUSH</h6>

                    </div>
                    <div className='container2'>

                        <h2>Accessibility - Resilience - Collaboration</h2>
                        
                        <p>
                            The RUSH (Resilient Urban Systems and Habitats) Initiative is an open source and accessible platform that consolidates local data on community and ecosystem health and provides a space for all community-members in the Capital Regional District (CRD) to collaborate in fostering resilience within communities.
                        </p>
                    </div>
                    <div className="bottom">
                        <Link onClick={handleClose} activeClass="active" to="carouselAnchor" spy={true} smooth={true} duration={500}><button className="btn btn-dark custom">Learn</button></Link>
                        <Link onClick={handleClose} activeClass="active" to="eventpageAnchor" spy={true} smooth={true} duration={500}><button className="btn btn-dark custom ">Act</button></Link>
                    </div>
                    <Territory/>
                </div>
            </div>

        </div>
    )
}

export default LandingPage1