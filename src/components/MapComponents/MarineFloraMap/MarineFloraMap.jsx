import React from 'react'

import '../MapObject.css'


function MarineFloraMap() {
  return (
  <div className='mapElement'>  
    <div className='mapContainer'>
      <div className='mapObj'>

        <iframe 
        src="/mapData/marineFlora/index.html"
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

export default MarineFloraMap;