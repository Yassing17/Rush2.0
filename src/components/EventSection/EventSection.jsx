import React from 'react'
import './EventSectionStyles.css'
import EventsMap from '../MapComponents/EventsMap/EventMap'



const EventSection = () => {
  return (
    <div name='eventpage' className='eventpage'>
      <div className='sectionheader'>
        <h1>
          Events
        </h1>
      </div>
      <div>
        <EventsMap ></EventsMap>
      </div>
  </div>
  )
}

export default EventSection