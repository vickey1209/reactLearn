import React,{useState, useContext} from 'react'
import userContextProvider from '../context/userContextProvider'
import UserContext from '../context/userContext'


function Login() {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})

    }
    return (
        <>
        <h2>Login</h2>
        <input type="text" value={username}
        onChange={(e)=> setUsername(e.target.value)} 
        placeholder='username' />
       <br/>
        <input type="password"
        onChange={(e)=> setPassword(e.target.value)} 
         placeholder='password' />
         <br/>
        <button onClick={handleSubmit}>submit</button>
        </>
    )
}

export default Login
