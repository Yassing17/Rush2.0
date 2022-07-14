import React from 'react'

import './SensEcoMap.css'


function SensEcoMap() {
  return (
   
   <div className='mapContainer'>

    <iframe 
    src="/mapData/SensitiveEcosystems/index.html"
    name="Sensitive Ecosystems"
    height="700px"
    width="700px"
    allowFullScreen
    />
    
    
    <iframe 
    src="/mapData/LeafletTutorial/index.html" 
    name="Leaflet Tutorial"
    scrolling="no"
    height="700px"
    width="700px"
    allowFullScreen
    />
    

   </div>
  );
}

export default SensEcoMap;