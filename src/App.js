import React from 'react'

// eslint-disable-next-line no-unused-vars
import {Article , Brand , Feature , Navbar ,Cta} from  './components'
import {Blog, Features, Footer,Header, Possibility, WhatGPT3} from './containers'
import './App.css'

export const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header/>
      </div>
      <div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  )
}

export default App