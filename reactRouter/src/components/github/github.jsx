import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // ? directly fetching data

    // const [data, setData] = useState([])
    // useEffect( () => {
    //     fetch('https://api.github.com/users/vickey1209')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)   
    //     })
    // },[])

    return (
        <div className='bg-blue-300 text-white p-4 text-3xl'>Github Follower : {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader =async () =>{
   const response = await fetch('https://api.github.com/users/vickey1209')
     return response.json()
}
