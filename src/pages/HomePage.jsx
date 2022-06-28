import React from 'react'
import LandingPage from '../components/LandingPage/LandingPage'
import DashboardSection from '../components/DashboardSection/DashboardSection'
import EventSection from '../components/EventSection/EventSection'


const Home = () => {
  return (
    <div>
        {/* <div>Heading Test</div> */}
        <LandingPage></LandingPage>
        <DashboardSection></DashboardSection>
        <EventSection></EventSection>
    </div>
  )
}

export default Home

//this is the index for the "Home" page, the entire smooth scroll page