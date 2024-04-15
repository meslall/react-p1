import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className='possibility_container section__margin'>
      <div className='possibility_container-image'>
        <img src= {possibility} alt="possibility" />
      </div>
      <div className='possibility_container-text'>
        <p>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <p id='sub'>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility