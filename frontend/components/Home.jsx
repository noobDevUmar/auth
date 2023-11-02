import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  
  
  
    return (
      <div className="mt-4 grow flex item-center justify-around">
       
      <div className="mt-32">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md 2xl mx-auto border mt-2" >
  
          <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
  
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
         {/* {err && */}
         <div className="mt-2 mb-2  px-16  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
         <span className="font-medium">Oops! </span> 
       </div>
          {/* }  */}
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">Don't have an account yet?
            <Link to={'/register'} className="underline text-black"> Register now</Link>
          </div>
        </form>
  
  
      </div>
    </div>
    )
  
}

export default Home