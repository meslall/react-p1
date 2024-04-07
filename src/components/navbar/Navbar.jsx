// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'


const Menu = ( ) => {
  return(
    <>
    <p><a href='#HOME'>Home</a></p>
    <p><a href='#What is GPT?'>What is GPT?</a></p>
    <p><a href='#Open AI'>Open AI</a></p>
    <p><a href='#Case Studies'>Case Studies</a></p>
    <p><a href='#Library'>Library</a></p>
    </>
    )
  }

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false)
  return (
    <div className='gpt3ouss__navbar'>
      <div className='gpt3ouss__navbar-links'>
        <div className='gpt3ouss__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3ouss__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3ouss__navbar-sign'>
        <p>sign-in</p>
        <button type='button'>sign-up</button>
      </div>
      <div className='gpt3ouss_navbar-menu'>
        {toggle ? <RiCloseLine color='#fff' size={27} onClick={() => setToggle(!toggle)} /> : <RiMenu3Line color='#fff' size={27} onClick={() => setToggle(!toggle)} />}
        {toggle &&  (
          <div className='gpt3ouss_navbar-menu_container scale-up-center'>
            <div className='gpt3ouss_navbar_container-menu-links'>
              <Menu />
              <div className='gpt3ouss_navbar-menu_container-links-sign'>
                <p>sign-in</p>
                <button type='button'>sign-up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar