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
        </div>
      <div name='initiativepage' className='initiativepage'>
        {/* <div className='sectionheader'>
            <h1>
                Initiatives
            </h1>
        </div> */}
        <div className='hexbox'>
            <Hexagons/>
        </div>
     </div></>
    )
}

export default Initiative 