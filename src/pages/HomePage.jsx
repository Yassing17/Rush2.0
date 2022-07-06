import React from 'react'
import LandingPage from '../components/LandingPage/LandingPage'
import DashboardSection from '../components/DashboardSection/DashboardSection'
import EventSection from '../components/EventSection/EventSection'
import Navbar from '../components/Navbar/Navbar'
import Contact from '../components/Contact/Contact'
import LandingPage1 from '../components/LandingPage/LandingPage1'


const Home = () => {
  return (
    <div>
        {/* <div>Heading Test</div> */}
        <div>
          <Navbar/>
        </div>
        <LandingPage1 />
        {/*<LandingPage></LandingPage>*/}
        <DashboardSection></DashboardSection>
        <EventSection></EventSection>
    </div>
  )
}

export default Home

//this is the index for the "Home" page, the entire smooth scroll page