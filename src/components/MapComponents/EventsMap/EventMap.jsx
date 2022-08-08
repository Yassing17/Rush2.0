import React from 'react'

import '../MapObject.css'


function EventMap() {
  return (
  <div className='mapElement'>  
    <div className='mapContainer'>
      <div className='mapObj'>

        <iframe 
        src="https://www.google.com/maps/d/embed?mid=1wBj-35JazgLtit-0DaecVo-PKlE_iRg&ehbc=2E312F"
        name="Sensitive Ecosystems"
        height="760vh"
        width="1090vh"
        justify-content="center"
        allowFullScreen
        />



      </div>
    </div>
  </div>  
  );
}

export default EventMap;