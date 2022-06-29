import React from 'react'
import LandingPage from '../components/LandingPage/LandingPage'
import DashboardSection from '../components/DashboardSection/DashboardSection'
import EventSection from '../components/EventSection/EventSection'
import Navbar from '../components/Navbar/Navbar'
import Contact from '../components/Contact/Contact'


const Home = () => {
  return (
    <div>
        {/* <div>Heading Test</div> */}
        <div>
          <Navbar/>
        </div>
        <LandingPage></LandingPage>
        <DashboardSection></DashboardSection>
        <EventSection></EventSection>
        <Contact />
    </div>
  )
}

export default Home

//this is the index for the "Home" page, the entire smooth scroll page