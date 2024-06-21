import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    userName :"rahul",
    age :20
  }
  let  newarr =[1,2,3,4,5,6,7]

  return (
    <>
      <h1 className='bg-green-400 text-blue p-4 rounded-xl'>tailwind test</h1>

  {/* <Card channel="hello" someobj = {newarr} test = {obj} /> */}
  <Card  userName="vickey" btn= "please lele bhai"/>
  <Card userName="ronak"  />


  
    </>
  )
}

export default App
