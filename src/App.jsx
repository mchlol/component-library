import { useState } from 'react'
import './App.css'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner'
import Card from './components/Card'
import { HiOutlineCloudUpload } from "react-icons/hi";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner type="warning">
        <Banner.Heading>Hello</Banner.Heading>
        <Banner.Text>Some text</Banner.Text>
      </Banner>
    </>
  )
}

export default App
