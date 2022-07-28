import React, { useState } from 'react'
import './InitiativeSectionStyles.css'
import { Link } from 'react-scroll'
import Hexagons from '../StoryMaps/hexagons'


const Initiative = () => {
    return (
      <div name='initiativepage' className='initiativepage'>
        <div className='sectionheader'>
            <h1>
                Initiatives
            </h1>
        </div>
        <div>
            <Hexagons/>
        </div>
     </div>
    )
}

export default Initiative 