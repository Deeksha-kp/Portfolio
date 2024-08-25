import { useState } from 'react'
 import './bootstrap.min.css'
import './App.css'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import Works from './Components/Works'
import Intro from './Components/Intro'
import Header from './Components/Header'
import Footer from './Components/Footer'
  //import {Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    <>
<Header/>
      <Intro/>

      {/* <Aboutus/>
      <Contactus/>
      <Works/> */}
      
      <Footer/>
      
      
      {/* <Routes>
      <Route path='/' element={<Intro/>}/>
      <Route path='/Works' element={<Works/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      </Routes> */}
      
    </>
  )
}

export default App

