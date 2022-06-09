import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to="/register">Register</Link>
        <Link to="/user">User</Link>
        <Link to="/">Products</Link>

        
    </div>
  )
}

export default Navbar