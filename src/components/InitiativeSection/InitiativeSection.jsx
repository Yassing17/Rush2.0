import React, { useState } from 'react'
import './InitiativeSectionStyles.css'
import { Link } from 'react-scroll'
import Hexagons from '../StoryMaps/hexagons'


const Initiative = () => {
    return (
        <>
        <div name='initiativepageAnchor' className='inititativepageAnchor'></div>
        <div className='initiativepageTitle'>
          <h1>Inititatives</h1>
          <div className='text'>
            <h5>Read more about local initiatives in the CRD</h5>
          </div>
        </div>
        <div className='initiativeSection'>
      <div name='initiativepage' className='initiativepage'>
        <div className='hexbox'>
            <Hexagons/>
        </div>
      </div>
     </div></>
    )
}

export default Initiative 