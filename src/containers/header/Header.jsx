import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header_content'>
        <h1 className='header_slogan gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p className='header_discreption'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='header_input'>
          <input type="enter your email" placeholder='Enter your email'/>
          <button>Get Started</button>
        </div>
      </div> 
      <div className='header_image'>
        {/* <img src='https://cdn.pixabay.com/photo/2016/11/29/08/00/abstract-1867008_960_720.jpg' alt='header_image' className='header_img'/> */}
        </div>
      </div>
  )
}

export default Header