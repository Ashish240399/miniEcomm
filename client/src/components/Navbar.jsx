import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/user">User</Link>
        <Link to="/product">Products</Link>
        <Link to="/category">Category</Link>
        <Link to="/brand">Brand</Link>
        
    </div>
  )
}

export default Navbar