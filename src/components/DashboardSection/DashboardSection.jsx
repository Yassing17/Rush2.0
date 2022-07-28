import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BeatTheHeat from '../MapComponents/BeatTheHeatMap/BeatHeatMap'
import FoodSecMap from '../MapComponents/FoodSecurityMap/FoodSecMap'
import MarineFaunaMap from '../MapComponents/MarineFaunaMap/MarineFaunaMap'
import SensEcoDisc from '../MapComponents/SensitiveEcosystemsMap/SensEcoDisc'
import SensEcoMap from '../MapComponents/SensitiveEcosystemsMap/SensEcoMap'
import ContentPage from '../Content/contentPage'
import { SEcontent, BHcontent, MFAcontent, MFLcontent, FScontent } from '../Content/content'
import MarineFloraMap from '../MapComponents/MarineFloraMap/MarineFloraMap'



const DashboardSection = () => {
  return (
   
    <Container fluid>
        <Row>
          <Col>
            <h1 style={{margin: "50px"}}>Dashboards</h1>
          </Col>
          <Col>
            {/* <h1>Button goes here</h1> */}
          </Col>
        </Row>
        
        {/* sensitive ecosystem map and content */}
        <Row>
          <Col>
              <SensEcoMap />
          </Col>
          <Col>
            <div className='mapDisc'>
              <ContentPage {...SEcontent}/>
            </div>
          </Col>
        </Row>


        <Row>
          <Col>
              <BeatTheHeat />
          </Col>
          <Col>
            <div className='mapDisc'>
              <ContentPage {...BHcontent}/>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
              <MarineFaunaMap />
          </Col>
          <Col>
            <div className='mapDisc'>
              <ContentPage {...MFAcontent}/>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
              <MarineFloraMap />
          </Col>
          <Col>
            <div className='mapDisc'>
              <ContentPage {...MFLcontent}/>
            </div>
          </Col>
        </Row>
      
        <Row>
          <Col>
              <FoodSecMap />
          </Col>
          <Col>
            <div className='mapDisc'>
              <ContentPage {...FScontent}/>
            </div>
          </Col>
        </Row>
      
      
      
      
      
 
     

    </Container>
  )
}

export default DashboardSection