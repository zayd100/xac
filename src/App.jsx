import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Home from './home'
import './App.css'

function App() {

  return (
    <>
      <div className='app-container'>
        <div> 
          <Navbar/>
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
