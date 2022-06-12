import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

function ShowAddress() {
    const userId=JSON.parse(localStorage.getItem("user"));
    const [show,setShow]=useState()
    useEffect(()=>{
        getAdd()
    },[])
    console.log(userId[0]._id)
    async function getAdd(){
        const data=await fetch(`http://localhost:5000/users/${userId[0]._id}/address`);
        const res=await data.json();
        //console.log(res)
        setShow(res.address);
    }
    //console.log(show)
  return (
    <div>
        {show!==undefined && show.map((el)=>(
            <div>
                <p><b>Location : </b>{el.location}</p>
                <p><b>District : </b>{el.district}</p>
                <p><b>State : </b>{el.state}</p>
                <p><b>Pincode : </b>{el.pincode}</p>
            </div>
        ))}
    </div>
  )
}

export default ShowAddress