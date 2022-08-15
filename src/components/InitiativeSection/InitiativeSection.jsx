import React, { useState } from 'react'
import './InitiativeSectionStyles.css'
import Hexagons from './hexagons'


const Initiative = () => {
    return (
        <>
        
        <div name='initiativepage' className='initiativepage'>
        <div className='initiativepageTitle'>
          <h1>Inititatives</h1>
          <div className='text'>
            <h5>Read more about local initiatives in the CRD</h5>
          </div>
        </div>
        <div className='initiativeSection'>
      
        <div className='hexbox'>
            <Hexagons/>
        </div>
      </div>
      <div name='aboutpageAnchor' className='aboutpageAnchor'></div>
     </div></>
    )
}

export default Initiative 