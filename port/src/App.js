import React from 'react'

import { Article, Brand, Feature, Cta, Navbar } from './component'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers'
import './App.css'
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header /> 
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App