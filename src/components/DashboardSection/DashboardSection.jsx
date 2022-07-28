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
import { SEcontent } from '../Content/content'



const DashboardSection = () => {
  return (
   
    <Container fluid>
        <Row>
          <Col>
            <h1 style={{margin: "50px"}}>Dashboards</h1>
          </Col>
          <Col>
            <h1>Button goes here</h1>
          </Col>
        </Row>
        
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
      
        <SensEcoMap />
 
      <div className='mapDisc'>
        <SensEcoDisc />
      </div>
      <div className='mapElement'>
        <FoodSecMap />
      </div>
      <div className='mapElement'>
        <MarineFaunaMap />
      </div>
      <div className='mapElement'>
        <BeatTheHeat />
      </div>
    </Container>
  )
}

export default DashboardSection