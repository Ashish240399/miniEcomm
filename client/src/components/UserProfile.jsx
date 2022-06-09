import React, { useState } from 'react'
import Address from './Address'
import Cart from './Cart'

function UserProfile() {
    const [page,setPage]=useState("")
  return (
    <div>
        <button onClick={()=>{
            setPage("cart")
        }}>Cart</button>
        <button onClick={()=>{
            setPage("address")
        }}>Address</button>
        {page=="cart"?<Cart/>:page=="address"?<Address/>:null}
    </div>
  )
}

export default UserProfile