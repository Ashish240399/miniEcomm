import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
function Order() {
    const userId=JSON.parse(localStorage.getItem("user"));
    const [show,setShow]=useState()
    const [cart,setCart]=useState()
    const cartIds=[];
    const [formAdd,setFormAdd]=useState({
        address_line1:"",
        address_line2:"",
        district:"",
        state:"",
        pincode:""
    })
    if(cart){
        for(var i=0;i<cart.length;i++){
            cartIds.push(cart[i]._id)
        }
    }
    const [address,setAddress]=useState()
    const [check,setCheck]=useState(false)
    const [orderAdd,setOddAdd]=useState()
    useEffect(()=>{
        getAdd()
        getCartId()
    },[])
    //console.log(userId[0]._id)
    async function getAdd(){
        const data=await fetch(`http://localhost:5000/users/${userId[0]._id}/address`);
        const res=await data.json();
        //console.log(res)
        setShow(res.address);
    }
    async function getCartId(){
        const data=await fetch(`http://localhost:5000/users/${userId[0]._id}/cart`);
        const res=await data.json();
        //console.log(res.cart_item[0].item)
        
        setCart(res.cart_item)
    }
    
    
    useEffect(()=>{
        if(address){
            
            setOddAdd({
                items:cartIds,
                userId:userId[0]._id,
                address_line1:address.location,
                address_line2:"",
                district:address.district,
                state:address.state,
                pincode:address.pincode,
                orderStatus:false
            })
            setAddress();
        }
    })
    //console.log(orderAdd)
    // console.log(address)
    // console.log(cart)
    function formChange(e){
        setFormAdd({
            ...formAdd,
            [e.target.id]:e.target.value
        })
    }
    function formSubmit(e){
        e.preventDefault();
        setOddAdd({
            items:cartIds,
            userId:userId[0]._id,
            address_line1:formAdd.address_line1,
            address_line2:formAdd.address_line2,
            district:formAdd.district,
            state:formAdd.state,
            pincode:formAdd.pincode,
            orderStatus:false,
        })
    }
    function order(){
        if(orderAdd){
            console.log(orderAdd)
            fetch("http://localhost:5000/order",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(orderAdd)
            })
            .then(()=>{
                setOddAdd()
                alert("Make payment for successful shipment");
                
            })
        }
    }
    
    //console.log(obj)
    //console.log(items)
    //console.log(orderAdd)
  return (
    <div style={{width:"90%",margin:"auto"}}>
        <h2>Select Address</h2>
        {show!==undefined && show.map((el)=>(
            <div onClick={()=>{
                setAddress(el)
            }} style={{display:"flex",border:"1px solid gray",borderRadius:"10px",width:"300px"}}>
                {/* <span style={{marginTop:"17px"}}><input type="checkbox" name="" id="" /></span> */}
                <span>
                    <p><b>Location : </b>{el.location}</p>
                    <p><b>District : </b>{el.district}</p>
                    <p><b>State : </b>{el.state}</p>
                    <p><b>Pincode : </b>{el.pincode}</p>
                </span>
            </div>
        ))}
        <h2>Add different address for delivery</h2>
        <form onSubmit={formSubmit}>
            <input onChange={formChange} id="address_line1" type="text" placeholder='line1'/>
            <input onChange={formChange} id="address_line2" type="text" placeholder='line2'/>
            <input onChange={formChange} id="district" type="text" placeholder='district'/>
            <input onChange={formChange} id="state" type="text" placeholder='state'/>
            <input onChange={formChange} id="pincode" type="text" placeholder='pincode'/>
            <input type="submit" />
        </form>
        <div>
            <button onClick={()=>{
                order()
            }}>Checkout</button>
        </div>
    </div>
  )
}

export default Order