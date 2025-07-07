import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import Home from './home'
import Footer from "./components/footer"
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
      <div className='footer'>
          <Footer/>
               </div>
    </>
  )
}

export default App
