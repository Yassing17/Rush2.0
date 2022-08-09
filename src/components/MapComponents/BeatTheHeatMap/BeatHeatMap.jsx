import React from 'react'

import '../MapObject.css'


function BeatTheHeat() {
  return (
  <div className='mapElement' >  
    <div className='mapContainer'>
      <div className='mapObj'>

        <iframe 
        src="/mapData/beat_the_heat/index.html"
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

export default BeatTheHeat;