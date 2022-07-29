import React, { useState } from 'react'
import './LandingPageStyles1.css'
import { Link } from 'react-scroll'






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
                    <div className='background'>
                    <div className="top">
                        <h1>RUSH</h1>
                        
                    </div>
                    <div className='container2'>

                        <h3>Accesibility - Resilience - Collaboration</h3>
                        <p>
                        The RUSH Initiative is an open source and accessible platform that consolidates local data on community and ecosystems health and provides a space for all community-members in the Capital Regional District (CRD) to collaboration in buidling resilience and fostering health within our communities. 
                        </p>
                    </div>
                    <div className="bottom">
                        <Link onClick={handleClose} activeClass="active" to="carouselAnchor" spy={true} smooth={true} duration={500}><button className="btn btn-dark custom">Learn</button></Link>
                        <Link onClick={handleClose} activeClass="active" to="eventpage" spy={true} smooth={true} duration={500}><button className="btn btn-dark custom ">Act</button></Link>
                    </div>
                    {/* <div className='container3'>
                        <Carousel />
                    </div> */}
                    </div>
                </div>

        </div>
    )
}

export default LandingPage1