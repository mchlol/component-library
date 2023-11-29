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
      <Card>
        <Card.Icon>
          <HiOutlineCloudUpload />
        </Card.Icon>
        <Card.Header>Easy Deployment</Card.Header>
        <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
      </Card>
    </>
  )
}

export default App
