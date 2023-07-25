import React from 'react'
import { Brand, CTA, NaviBar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NaviBar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA/>
      <Blog/>
      <Footer />
    </div>
  )
}

export default App
