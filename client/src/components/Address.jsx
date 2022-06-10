import React, { useState } from 'react'
import { useEffect } from 'react';

function Address() {
  const [adding,setAdding]=useState(false)
  let user=JSON.parse(localStorage.getItem("user"));
  const [finalAdd,setFinalAdd]=useState("")
  const [add,setAdd]=useState({
    location:"",
    district:"",
    state:"",
    pincode:"",
    userId:user[0]._id
  })
  //console.log(user[0]._id)
  function handleChange(e){
    setAdd({
      ...add,
      [e.target.id]:e.target.value
    })
  }
  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:5000/address",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(add)
    })
    // console.log(add)
    .then(async()=>{
      const data=await fetch(`http://localhost:5000/address/${user[0]._id}`);
      const res=await data.json();
      
      setFinalAdd(res[res.length-1]._id);
      setAdding(true)
    })
  }
  function addingToUser(){
    fetch(`http://localhost:5000/users/${user[0]._id}/address/${finalAdd}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        // body:JSON.stringify(finalAdd)
      }).then(()=>{
        setAdding(false)
      })
      
  }
  useEffect(()=>{
    if(adding==true){
      addingToUser()
    }
  })
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input id="location" onChange={handleChange} type="text" placeholder='Location'/>
        <input id="district" onChange={handleChange} type="text" placeholder='District'/>
        <input id="state" onChange={handleChange} type="text" placeholder='State'/>
        <input id="pincode" onChange={handleChange} type="text" placeholder='Pincode'/>
        {/* <input id="userId" value={user[0]._id} onChange={handleChange} type="text" placeholder={user[0]._id}/> */}
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Address
