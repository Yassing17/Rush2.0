import React from 'react'
import './AboutStyles.css'
import teamPhoto1 from '../../assets/pictures/teamPhoto1.png'
import teamPhoto2 from '../../assets/pictures/teamPhoto2.png'
import { Button } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <>
    {/* <div name='aboutpageAnchor' className='aboutpageAnchor'></div> */}
    <div className='aboutpage'>
    <div className='aboutpageTitle'>
        <h1>About</h1>
    </div>
   
    <div className='aboutSection'>
      <p>The reality of climate change and other threats to our health is not easy to understand. We need to be able to take action now. NatuR&D started The Resilient Urban Systems & Habitat (RUSH) Initiative to support communities to secure a healthy future where they live. Peninsula Streams & Shorelines came on as a key collaborator with expertise in watershed health and urban ecosystem restoration and conservation. The Map Shop in the UVIC Geography Department contributes to the project by asking important questions about health indicator data through community mapping and participatory community research.</p>
      <p>The RUSH team comprises four UVIC students who were introduced to the project through the UVIC INSPIRE program during a summer co-op. The team worked with Anne-Marie Daniel to understand the problem within the community and work to find a solution.</p>
      <p>The team could understand the barriers that prevent community members from climate action through extensive research. Based on community surveying, the team found that the three most significant barriers people experience to climate action were time, climate apathy and the overwhelming sense of helplessness. Community members also reported that online sources were their primary resource for climate change data and information. </p>
      <p>To address these issues, the RUSH team created this online platform. This website makes local climate vulnerability accessible and engaging while providing tangible solutions community members can incorporate into their everyday lives. Guided by AGILE methodologies, the team researched the problem and developed a scalable prototype. The intensive 4-month co-op term resulted in this 100% open access platform.</p>
      <p>If you would like to learn more about our RUSH team, please check out the INSPIRE UVIC website.</p>
      <p>This project is also in collaboration with The Coalition, CRD, CHN GVPN, SeaChange Marine Conservation Society, RBC Tech for Nature and interdisciplinary teams at UVIC.</p>
      <p>Credit and thanks goes to Ken Josephson and Seth Galewyrick for contributing photos to the RUSH Initiative</p>
      <a href='https://www.inspireuvic.org/rush' ><button className='btn btn-dark custom'>Inspire uvic</button></a>
      <a href='https://drive.google.com/file/d/1MM2Z93AECnZtaScZoP6sCrGJ_NmkWU0E/view?usp=sharing' ><button className="btn btn-dark custom" >See References</button></a>
    </div>
    </div>
    </>

  )
}

export default AboutPage;