import React from 'react'
import './LandingPageStyles1.css'

const LandingPage1 = () => {
    return (
        <div name='landingpage1' className='landingpage1'>
            <div className="container">
                <div className="top">
                    <h1>RUSH</h1>
                </div>
                    <div className='container2'>
                        <h3>
                            The RUSH project within the Inspire program aims to support the RUSH initiative.
                            The RUSH initiative seeks to foster ecological healing through community engagement
                            by centralizing information on an interactive landing page that reports regional 
                            climate change vulnerabilities. As a result, the community can develop consensus on 
                            the risks and corresponding preventative actions that are needed. This tool is necessary
                            because communities often feel disconnected from the data that motivates policymaking. 
                            Further, by leveraging geographic information systems (GIS), the data can be made 
                            comprehensible and accessible to all community members. In the long term, the RUSH platform 
                            can become a tool for the region to develop community autonomy, awareness, and agency.
                        </h3>
                    </div>    
                <div className="bottom">
                    <button className="btn btn-dark">Learn</button>
                    <button className="btn btn-dark">Act</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage1