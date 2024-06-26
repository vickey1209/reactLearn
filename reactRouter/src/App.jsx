import { useState } from 'react'
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
<    h1 className='bg-red-100 p-4 text-blue-500'>react router</h1>
    </>
  )
}

export default App
