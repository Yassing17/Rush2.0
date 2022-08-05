import React from 'react'

import '../MapObject.css'


function FoodSecMap() {
  return (
  <div className='mapElement' id="How can I eat local?">  
    <div className='mapContainer'>
      <div className='mapObj'>

        <iframe 
        src='https://www.google.com/maps/d/embed?mid=1ZWiCRavDMbBciCnZDlhn8ceuv3NzGbw&ehbc=2E312F'
        name="Food Security"
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

export default FoodSecMap;