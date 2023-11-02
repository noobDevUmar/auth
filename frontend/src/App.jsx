import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'



function App() {


  return (
<BrowserRouter >
<Navbar/>

<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>


</Routes>

</BrowserRouter>
  )
}

export default App
