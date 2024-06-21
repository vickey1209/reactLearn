import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

const addValue =() =>{
  // counter = counter + 1
  console.log("added value =>" , counter);

  if(counter <= 39 )
    {
      setCounter(counter + 2)
      setCounter(prevCounter  => prevCounter +1)
      setCounter(prevCounter  => prevCounter +1)
      setCounter(prevCounter  => prevCounter +1)
      
  
    
      
    }
    else{
      console.log("it reaches to 40 it will not increase more than this");

    }
 

}

const removeValue =() =>{
  // counter = counter - 1
  console.log("removed value =>" , counter);
  
  if(counter >= 1 )
    {
      setCounter(counter- 1)
    }
    else{
      console.log("it reaches to 0 it will not decrease more than this");

    }
}

  return (
    <>
    <h1>react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>add value</button>
    <br />
    <br />
  <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
