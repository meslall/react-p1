import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'

const links = ["Overons","Social Media","Counters","Contact"]
const company = ["Terms & Conditions","Privacy Policy","Contact"]
const getin = ["Crechterwoord K12 182 DK Alknjkcb","085-132567","info@payme.net"]
function Footer() {
  return (
    <div className='footer_container section__margin'>
      <div className='footer_container-early-access'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <div id='Open_AI' className='footer_container-early-access-button'>
          <button className="button">
            <span className="text">Request Early Access</span>
          </button>
        </div>
      </div>
      <div className='footer_container-more'>
        <div className='footer_container-more-logo'>
          <img src={logo} alt="logo" />
          <h6>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</h6>
        </div>
        <div className='footer_container-more-links'>
          <h3>Links</h3>
            {links.map((link,i)=>
              <ul key={i}>{link}</ul>
          )}
        </div>
        <div className='footer_container-more-company'>
            <h3>Company</h3>
            {company.map((company,i)=>
            <ul key={i}>{company}</ul>
          )}
        </div>
        <div className='footer_container-more-getin'>
            <h3>Get in touch</h3>
            {getin.map((getin,i)=>
            <ul key={i}>{getin}</ul>
          )}
        </div>
      </div>
      <div className='footer_container-copyright'>
        &copy; 2024 GPT-5. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
