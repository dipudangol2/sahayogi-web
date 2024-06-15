import React from 'react'
import './camp.css'
import '../Campaign'
import '../Campaign.css'
import { Link } from 'react-router-dom'

const Camp = () => {
  return (
    <div className='camp container'>
        <div className="camp-text">
           <h1>Create Your Campaign</h1> 
           <p>When we donate We help Us....
           </p>
           <Link to={'/createcampaign'}><button className='but'> Create Your Campaign </button></Link>
        </div>
    </div>
  )
}

export default Camp