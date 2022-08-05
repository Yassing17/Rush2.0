import React from 'react'

import '../MapObject.css'


function CoastalSensMap() {
  return (
  <div className='mapElement' id="How can I protect our coasts?">  
    <div className='mapContainer'>
      <div className='mapObj'>

        <iframe 
        src="/mapData/coastal-sensitivity/index.html"
        name="Coastal Sensitivity"
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

export default CoastalSensMap;