import React from 'react'

import '../MapObject.css'


function MarineFaunaMap() {
  return (
  <div className='mapElement'>  
    <div className='mapContainer'>
      <div className='mapObj'>

        <iframe 
        src="/mapData/marineFauna/index.html"
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

export default MarineFaunaMap;