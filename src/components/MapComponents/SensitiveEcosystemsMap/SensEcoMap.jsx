import React from 'react'

import '../MapObject.css'


function SensEcoMap() {
  return (
  <div className='mapElement' id="Is development here a good idea?">  
    <div className='mapContainer'>
      <div className='mapObj'>

        <iframe 
        src="/mapData/sensitiveEcosystems/index.html"
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

export default SensEcoMap;