import React from 'react'
import './EventSectionStyles.css'
import EventsMap from '../MapComponents/EventsMap/EventMap'



const EventSection = () => {
  return (
    <>
    {/* <div name='eventpageAnchor' className='eventpageAnchor'></div> */}
    <div name='eventpage' className='eventpage'>
    <div className='eventpageTitle'>
      <h1>Events</h1>
      <div className='text'>
        <h5>Want to get involved in the climate movement but don’t know how? Our goal is to make it easier for you to find climate action events happening in your community.</h5>
        <h7>Contact us if you are interested in sharing an event you are organizing!</h7>
      </div>
    </div>


  
    <div className='eventSection'>
      <div>
        <EventsMap ></EventsMap>
      </div>
      </div>
      <div name='initiativepageAnchor' className='inititativepageAnchor'></div>
  </div></>
  )
}

export default EventSection