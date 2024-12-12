import React from 'react'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Login from './Login'

const Body = () => {
  return (
    <div> 
Body
<NavBar/>
<Outlet/>
<Footer/>
<Login/>
</div>
  )
}

export default Body