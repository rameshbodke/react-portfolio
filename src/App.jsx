import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContactUs from "./pages/ContactUs"
import AboutUs from './pages/AboutUs'

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
       <Routes> 
         <Route path='/' element={<Home/>}></Route>
         <Route path='/Projects' element={<Projects />}></Route>
         <Route path='/ContactUs' element={<ContactUs />}></Route>
         <Route path='/AboutUs' element={<AboutUs />}></Route>
       </Routes>
       <Footer />
    </BrowserRouter>
     
   
  )
}

export default App
