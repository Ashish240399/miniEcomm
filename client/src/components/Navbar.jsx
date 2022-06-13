import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='nav' style={{textAlign:"center"}}>
      <Link className='link' to="/">Home</Link>
        <Link className='link' to="/register">Register</Link>
        <Link className='link' to="/user">User</Link>
        <Link className='link' to="/product">Products</Link>
        <Link className='link' to="/category">Category</Link>
        <Link className='link' to="/brand">Brand</Link>
        
    </div>
  )
}

export default Navbar