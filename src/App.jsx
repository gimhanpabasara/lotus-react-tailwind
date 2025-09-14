import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import RangeGrid from './components/RangeGrid'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App(){ 
  return (
    <div className='App antialiased text-gray-800'>
      <Navbar />
      <Footer />
    </div>
  )
}
