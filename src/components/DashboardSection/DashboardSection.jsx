import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BeatTheHeat from '../MapComponents/BeatTheHeatMap/BeatHeatMap'
import FoodSecMap from '../MapComponents/FoodSecurityMap/FoodSecMap'
import MarineFaunaMap from '../MapComponents/MarineFaunaMap/MarineFaunaMap'
import SensEcoMap from '../MapComponents/SensitiveEcosystemsMap/SensEcoMap'
import ContentPage from '../Content/contentPage'
import { SEcontent, BHcontent, MFAcontent, MFLcontent, FScontent, CScontent } from '../Content/content'
import MarineFloraMap from '../MapComponents/MarineFloraMap/MarineFloraMap'
import CoastalSensMap from '../MapComponents/CoastalSensMap/CoastalSensMap'

// pictures 
import tidepools from '../../assets/pictures/slideshow/tidepools.JPG'
import trees from '../../assets/pictures/maps/trees.JPG'
import seaweed from '../../assets/pictures/maps/seaweed.JPG'
import red from '../../assets/pictures/slideshow/red.jpg'
import otter from '../../assets/pictures/maps/otter.jpeg'
import urchin from '../../assets/pictures/maps/urchin.jpeg'
import cook from '../../assets/pictures/maps/cook.jpg'
import table from '../../assets/pictures/maps/table.JPG'
import mushrooms from '../../assets/pictures/maps/mushrooms.jpg'
import eelgrass from '../../assets/pictures/maps/eelgrass.jpg'
import shore from '../../assets/pictures/slideshow/shore.JPG'
import posts from '../../assets/pictures/slideshow/posts.JPG'
import mussles from '../../assets/pictures/maps/mussles.JPG'
import snake from '../../assets/pictures/maps/snake.jpg'
import drink from '../../assets/pictures/maps/drink.jpeg'
import oak from '../../assets/pictures/maps/oak.jpeg'
import sun from '../../assets/pictures/maps/sun.jpg'
import mountains from '../../assets/pictures/slideshow/mountains.jpg'



import "./DashboardSectionStyles.css";

const DashboardSection = () => {
  return (

    <>
    <div name='dashpageAnchor' className='dashpageAnchor'></div>
    <div className='dashpageTitle'>
      <div className='word'>
      <h1>Maps</h1>
      <div className='text'>
      <h5>Click on and off the maps to interact or exit.</h5>
      <h7>Search for your address, explore different data layers, zoom in and out, and click on features to learn more.</h7>
      </div>
    </div>
    </div>
      <div name='dashpage' className='dashpage'>

        <Container fluid>


        
        {/* Sensitive Ecosytems  */}
        <div className='mapbreaker' id='Is development here a good idea?'/>
        <div className='mapSection'>
            <div className='word'>
              <h1>Sensitive Ecosystems</h1>
            </div>
          <Row>
            <Col>
              <SensEcoMap />
            </Col>
            <Col>
              <div className='mapDisc'>
                <ContentPage {...SEcontent} />
              </div>
            </Col>
          </Row>
          <div className='image'>
              <img src={trees} height='250px' width='300px'/>
              <img src={posts} height='250px' width='300px'/>
              <img src={oak} height='250px' width='300px'/>
            </div>
          </div>


          {/* Beat the Heat  */}
        <div className='mapbreaker' id='How to beat the heat?'/>
          <div className='mapSection' >
            <div className='word' >
              <h1>Beat the Heat</h1>
            </div>
          <Row>
            <Col>
              <BeatTheHeat />
            </Col>
            <Col>
              <div className='mapDisc'>
                <ContentPage {...BHcontent} />
              </div>
            </Col>
          </Row>
          <div className='image'>
            <img src={mountains} height='250px' width='300px'/>
              <img src={drink} height='250px' width='300px'/>
              <img src={sun} height='250px' width='300px'/>
            </div>
          </div>
          


        {/* Coastal Sensitivity  */}
        <div className='mapbreaker' id='How can I protect our coasts?'/>
          <div className='mapSection'>
            <div className='word'>
              <h1>Coastal Sensitivity</h1>
            </div>
          <Row>
            <Col>
              <CoastalSensMap />
            </Col>
            <Col>
              <div className='mapDisc'>
                <ContentPage {...CScontent} />
              </div>
            </Col>
          </Row>
          <div className='image'>
              <img src={tidepools} height='250px' width='300px'/>
              <img src={mussles} height='250px' width='300px'/>
              <img src={shore} height='250px' width='300px'/>
            </div>
          </div>


        {/* Marine Fauna   */}
        <div className='mapbreaker' id='Who do I share my home with?'/>
          <div className='mapSection'>
            <div className='word'>
              <h1>Marine Fauna</h1>
            </div>
          <Row>
            <Col>
              <MarineFaunaMap />
            </Col>
            <Col>
              <div className='mapDisc'>
                <ContentPage {...MFAcontent} />
              </div>
            </Col>
          </Row>
          <div className='image'>
              <img src={urchin} height='250px' width='300px'/>
              <img src={otter} height='250px' width='300px'/>
              <img src={snake} height='250px' width='300px'/>
            </div>
          </div>


          {/* Marine Flora   */}
        <div className='mapbreaker' id='Plants?'/>
          <div className='mapSection'>
            <div className='word'>
              <h1>Marine Flora</h1>
            </div>
          <Row>
            <Col>
              <MarineFloraMap />
            </Col>
            <Col>
              <div className='mapDisc'>
                <ContentPage {...MFLcontent} />
              </div>
            </Col>
          </Row>
          <div className='image'>
              <img src={seaweed} height='250px' width='300px'/>
              <img src={red} height='250px' width='300px'/>
              <img src={eelgrass} height='250px' width='300px'/>
            </div>
          </div>


          {/* Food Security   */}
          <div className='mapbreaker' id='How can I eat local?'/>
          <div className='mapSection'>
            <div className='word'>
              <h1>Food Security</h1>
            </div>
          <Row>
            <Col>
              <FoodSecMap />
            </Col>
            <Col>
              <div className='mapDisc'>
                <ContentPage {...FScontent} />
              </div>
            </Col>
          </Row>
          <div className='image'>
              <img src={cook} height='250px' width='300px'/>
              <img src={mushrooms} height='250px' width='300px'/>
              <img src={table} height='250px' width='300px'/>
            </div>
          </div>


        </Container>

      </div></>

      )
      }

      export default DashboardSection;