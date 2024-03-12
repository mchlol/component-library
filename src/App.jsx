import React from 'react'
import './App.css'
import BannerSection from './components/BannerSection'
import BadgeSection from './components/BadgeSection'
import CardSection from './components/CardSection'
import TestimonialSection from './components/TestimonialSection'


function App() {

  return (
    <>
      <header style={{textAlign: "center"}}>
      <h1>Component Library++</h1>
      </header>

      <BannerSection/>
      <BadgeSection />
      <CardSection />
      <TestimonialSection />

    </>
  )
}

export default App
