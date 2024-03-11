import React from 'react'
import './App.css'
import BannerSection from './components/BannerSection'
import BadgeSection from './components/BadgeSection'
import CardSection from './components/CardSection'


function App() {

  return (
    <>
      <header style={{textAlign: "center"}}>
      <h1>Component Library++</h1>
      </header>

      <BannerSection/>
      <BadgeSection />
      <CardSection />

    </>
  )
}

export default App
