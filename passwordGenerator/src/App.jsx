import { useState, useCallback, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [specialcharAllowed , setCharacterAllowed] = useState(false);

  const [password , setPassword] = useState("")
  const passwordGenerator = useCallback(()=> {
    let pass ="" 
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += "0123456789"
    if(specialcharAllowed) str += "~!@#$%^&*(){}[].,"

    for(let i = 1 ; i<=length ; i++)
      {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)
 }, [length, numberAllowed, specialcharAllowed, setPassword])

 useEffect(()=>{ passwordGenerator()},[length, numberAllowed, specialcharAllowed, passwordGenerator])

  
    
  return (
    <>
    <div className='w-full max w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>password Generator

      <div className="className = flex-shadow rounded-lg overflow-hidden mb-4 placeholder:password">
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly />
        <button >copy</button>
      </div>
      <div className=''>
        <div>
          <input type="range" min={6} max={12} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label htmlFor="">length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=> !prev)}}/>
numbers

        </div>
        <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={specialcharAllowed} id='numberInput' onChange={()=>{setCharacterAllowed((prev)=> !prev)}}/>
specialcharacter

        </div>
      </div>
    </div>

    </>
  )
}

export default App
