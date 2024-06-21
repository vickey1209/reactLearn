import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
<div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

<div className='fixed flex-wrap  bottom-12 inset-x-0  px-2 '>
  <div className='fixed flex-wrap  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '> 
  <button  onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>red</button>
  <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}>yellow</button>
  <button onClick={()=> setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>orange</button>
  <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}>green</button>
  <button onClick={()=> setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>black</button>
  </div>
</div>

</div>
  )
}

export default App
