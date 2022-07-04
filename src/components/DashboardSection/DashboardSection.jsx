import React from 'react'
import './DashboardSectionStyles.css'

const DashboardSection = () => {
  return (
    <div name='dashpage' className='dashpage'>
      <div className="dpcontainer">
        <div className='top'>
          <div className='dpcontainer2'>
             <h1>Dashbaords</h1>
          </div>
        </div>  
        <div className="bottom">
            <button className="btn btn-dark">Learn</button>
            <button className="btn btn-dark">Act</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardSection