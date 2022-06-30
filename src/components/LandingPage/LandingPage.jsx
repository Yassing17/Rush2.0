import React from 'react'
import './LandingPageStyles.css'
import backgroundVideo from '../../assets/videos/waterfall.mp4'


const LandingPage = () => {
  return (
    <div name='landingPage' className='landingPage'>
        <div className='videoBox'>
            <video autoPlay muted loop id="backgroundVideo">
                <source src={backgroundVideo} type="video/mp4"></source>
            </video>
        </div>
        <div className="container">
            <div className="title">
                <h1>RUSH</h1>
            </div>
            <div className="contents">
                <body>Resilient Urban Systems and Habitats Initiative</body>
            </div>    
        </div>
<<<<<<< HEAD
        <div className="carousel">
            carousel
        </div>
        <div className="buttonBox">
            button box
        </div>
 
=======
>>>>>>> 22bd3788b3655d2f23cf3517167dcc00cb506741
    </div>
  )
}

export default LandingPage

{/* <HeroContainer>
<HeroBg>
    <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> 
</HeroBg>
<HeroContent>
  <HeroH1>Resilient Urban Systems & Habitat (RUSH) Initiative</HeroH1>
    <HeroP>
    The RUSH project within the Inspire program aims to support the RUSH initiative.
    The RUSH initiative seeks to foster ecological healing through community engagement
    by centralizing information on an interactive landing page that reports regional 
    climate change vulnerabilities. As a result, the community can develop consensus on 
    the risks and corresponding preventative actions that are needed. This tool is necessary
    because communities often feel disconnected from the data that motivates policymaking. 
    Further, by leveraging geographic information systems (GIS), the data can be made 
    comprehensible and accessible to all community members. In the long term, the RUSH platform 
    can become a tool for the region to develop community autonomy, awareness, and agency. 
    </HeroP>
  <HeroBtnWrapper>
    <ButtonBox>
      <Button to='dashboards' 
              onMouseEnter={onHover1}
              onMouseLeave={onHover1}
              primary='true'
              dark='true'
              >
        Learn {hover1 ? <ArrowForward /> : <ArrowRight/>}
      </Button>
      <Button to='events' 
              onMouseEnter={onHover2}
              onMouseLeave={onHover2}
              primary='true'
              dark='true'
              >
        Act {hover2 ? <ArrowForward /> : <ArrowRight/>}
      </Button>
    </ButtonBox>
  </HeroBtnWrapper>
</HeroContent>
</HeroContainer> */}


