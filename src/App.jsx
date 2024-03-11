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

function App() {

  return (
    <>
      <TestimonialWithImage imageSrc={Image} imageAlt="a lady in blue">
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."</p>
      <p className="testimonial-source">May Andersons<br />
      Workcation, CTO</p>
      </TestimonialWithImage>

    </>
  )
}

export default App
