import React from 'react'
import './App.css'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import { HiOutlineCloudUpload } from "react-icons/hi";
import Testimonial from './components/Testimonial'
import { PiTreePalm } from "react-icons/pi";
import TestimonialWithImage from './components/TestimonialWithImage/TestimonialWithImage'
import Image from './assets/christina.jpg'
import BannerSection from './components/BannerSection'

function App() {

  return (
    <>
      <header style={{textAlign: "center"}}>
      <h1>Component Library++</h1>
      </header>

      <BannerSection/>

    </>
  )
}

export default App
