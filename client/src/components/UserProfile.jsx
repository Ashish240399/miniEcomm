import React, { useState } from 'react'
import Address from './Address'
import Cart from './Cart'
import ShowAddress from './ShowAddress'

function UserProfile() {
    const [page,setPage]=useState("")
  return (
    <div>
        <button onClick={()=>{
            setPage("cart")
        }}>Cart</button>
        <button onClick={()=>{
            setPage("address")
        }}>Add Address</button>
        <button onClick={()=>{
          setPage("show-address")
        }}>Show Address</button>
        {page=="cart"?<Cart/>:page=="address"?<Address/>:page=="show-address"?<ShowAddress/>:null}
    </div>
  )
}

export default UserProfile