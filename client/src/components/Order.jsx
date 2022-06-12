import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
function Order() {
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
  return (
    <div style={{width:"90%",margin:"auto"}}>
        {show!==undefined && show.map((el)=>(
            <div style={{display:"flex",border:"1px solid gray",borderRadius:"10px",width:"300px"}}>
                <span style={{marginTop:"17px"}}><input type="checkbox" name="" id="" /></span>
                <span>
                    <p><b>Location : </b>{el.location}</p>
                    <p><b>District : </b>{el.district}</p>
                    <p><b>State : </b>{el.state}</p>
                    <p><b>Pincode : </b>{el.pincode}</p>
                </span>
            </div>
        ))}
        <form>
            <input id="address_lin1" type="text" />
            <input id="address_line2" type="text" />
            <input id="district" type="text" />
            <input id="state" type="text" />
            <input id="pincode" type="text" />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Order