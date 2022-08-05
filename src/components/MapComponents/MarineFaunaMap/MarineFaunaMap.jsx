import React from 'react'

import '../MapObject.css'


function MarineFaunaMap() {
  return (
  <div className='mapElement' id='Who do I share my home with?'>  
    <div className='mapContainer'>
      <div className='mapObj'>

        <iframe 
        src="/mapData/marineFauna/index.html"
        name="marine fauna"
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

export default MarineFaunaMap;