import { useState } from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './component/login'
import Profile from './component/profile'

import './App.css'

function App() {


  return (
    <UserContextProvider>
      <h5 className='text-red-50 p-4 bg-black'>Login Form</h5>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
