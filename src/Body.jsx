import React from 'react'
import NavBar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div> 
Body
<NavBar/>
<Outlet/>
<Footer/>
</div>
  )
}

export default Body