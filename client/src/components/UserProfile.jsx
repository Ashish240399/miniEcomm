import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Address from './Address'
import Cart from './Cart'
import OrderList from './OrderList'
import ShowAddress from './ShowAddress'
import "./User.css"
function UserProfile() {
    const [page,setPage]=useState("")
    const navigate=useNavigate()
  return (
    <div className='user'>
      <h2>User's Details</h2>
        <button onClick={()=>{
          navigate("/cart")
        }}>Cart</button>
        <button onClick={()=>{
            navigate("/address")
        }}>Add Address</button>
        <button onClick={()=>{
          navigate("/show-address")
        }}>Show Address</button>
        <button onClick={()=>{
          navigate("/order-list")
        }}>Ordered List</button>
        
    </div>
  )
}

export default UserProfile