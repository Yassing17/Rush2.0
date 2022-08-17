import React from 'react'
import './territoryStyles.css'

const Territory = () => {
  return (
    <div className='territoryPage'>
        <div className='territorySection'>
            <div className='territoryTitle'>
                <h1>Territory Acknowledgement</h1>
                <div className='text'>
                    <p>The RUSH Initiative would like to acknowledge and respect that all of the efforts of their project have been on the uncended and unsurrended territory of the lək̓ʷəŋən speaking peoples, the Songhees, Esquimalt and W̱SÁNEĆ peoples whose historical relationships with the land continue to this day. Maps have a long history of erasure of Indigenous cultures and the RUSH Initiave acknowledges that the information provided does not honour the rich cultures and languages that exist, and were present pre-contact. It is extremely important to understand that Indigenous peoples make up 5% of the world’s population and protect 80% of the world’s biodiversity. </p>
                    <p>If you are interested in learning more about the traditional names of these lands, there are some incredible resources availble: </p>
                    <ol style={{textAlign: 'left'}}>
                      <li style={{fontSize:18}}>The BC Assembly of First Nations (BCAFN) has an interactive map showing the nations in BC. </li>
                      <li style={{fontSize:18}}>Learn about native plants in your ecosystem and how to spot them. Check out the Camosun College Native Plants website which can teach you about native plants on Vancouver Island using the English, Latin and SENĆOŦEN languages</li>
                      <li style={{fontSize:18}}>Dr. Margaret Pearce, an award-winning cartographer, created a map with Indigenous place names all over Canada called “Coming Home”.</li>
                    </ol>
                </div>
            </div>
    
        </div>
    </div>
  )
}

export default Territory