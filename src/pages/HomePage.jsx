import React from 'react'

import DashboardSection from '../components/DashboardSection/DashboardSection'
import EventSection from '../components/EventSection/EventSection'
import Navbar from '../components/Navbar/Navbar'
import Contact from '../components/Contact/Contact'
import LandingPage1 from '../components/LandingPage/LandingPage1'
import AboutPage from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Initiative from '../components/InitiativeSection/InitiativeSection'
import Carousel from '../components/Carousel/Carousel'
import './HomePageStyles.css'

const Home = () => {
  return (
    <div>
      <div className='allBackground'>
        <div>
          <Navbar/>
        </div>
        <LandingPage1 />
        <Carousel />
        <DashboardSection></DashboardSection>
        <EventSection></EventSection>
        <Initiative />
        <AboutPage />
        <Footer />
        </div>
    </div>
  )
}

export default Home

//this is the index for the "Home" page, the entire smooth scroll page