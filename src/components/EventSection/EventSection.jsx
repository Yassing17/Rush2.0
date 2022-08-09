import React from 'react'
import './EventSectionStyles.css'
import EventsMap from '../MapComponents/EventsMap/EventMap'



const EventSection = () => {
  return (
    <>
    <div name='eventpageAnchor' className='eventpageAnchor'></div>
    <div className='eventpageTitle'>
      <h1>Events</h1>
      <div className='text'>
        <h5>Zoom in to find sustainibility events near you.</h5>
        <h7>This map is updated monthly by different organizations located in the CRD. Looking to add your organization's events? Contact us!</h7>
      </div>
    </div>
    <div className='eventSection'>
    <div name='eventpage' className='eventpage'>
      <div>
        <EventsMap ></EventsMap>
      </div>
      </div>
  </div></>
  )
}

export default EventSection