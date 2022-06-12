import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
function Cart() {
  let user=JSON.parse(localStorage.getItem("user"));
  const [cart,setCart]=useState();
  const [cartId,setCartId]=useState("")
  const cartItems=[];
  const removeCartId=[];
  const addCartId=[]
  const obj={};
  const userid=(user[0]._id)
  async function getCart(){
    const data=await fetch(`http://localhost:5000/users/${user[0]._id}`);
    const res=await data.json();
    //console.log(res.cart_item)
    setCart(res.cart_item)
  }
  console.log(cart)
  // console.log(cart)
  if(cart!==undefined){
    for(var i=0;i<cart.length;i++){
      if(cart[i].item!==null){
        if(obj[cart[i].item.title]==undefined){
          obj[cart[i].item.title]=1
        }
        else{
          obj[cart[i].item.title]++
        }
      }
    }
    for(let x in obj){
      let a=[]
      a.push(x);
      a.push(obj[x])
      cartItems.push(a)
    }
  }
  //console.log(cartItems)
  useEffect(()=>{
    getCart()
  },[])
  // console.log(cart)
  function cartDelete(title){
    for(var i=0;i<cart.length;i++){
      if(cart[i].item.title==title){
        removeCartId.push(cart[i]._id);
        break;
      }
    }
    //console.log(removeCartId)
    fetch(`http://localhost:5000/users/${user[0]._id}/delete/${removeCartId[0]}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    }).then(()=>{
      getCart()
    })
  }
  function cartAdd(title){
    for(var i=0;i<cart.length;i++){
      if(cart[i].item.title==title){
        //console.log(cart[i])
        addCartId.push(cart[i].item._id);
        break;
      }
    }
    const x={
      item:addCartId[0],
      userId:user[0]._id
    }
    //console.log(x)
    fetch(`http://localhost:5000/cart`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(x)
    }).then(async()=>{
        const data=await fetch(`http://localhost:5000/cart/userId/${user[0]._id}`);
        const res=await data.json();
        //console.log(res)
        setCartId(res[res.length-1]._id);
    })
  }
  
  useEffect(()=>{
    if(cartId!==""){
        fetch(`http://localhost:5000/users/${user[0]._id}/add_to_cart/${cartId}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>{
            setCartId("");
        }).then(()=>{
          getCart();
        })
    }
  })
  return (
    <div>
      {cartItems.length>0 && cartItems.map((el)=>(
          <div>
            <p><button onClick={()=>{
              cartAdd(el[0])
            }}><b>+</b></button>  {el[0]}{el[1]}  <button onClick={()=>{
              cartDelete(el[0])
            }}><b>-</b></button></p>
          </div>
      ))}
    </div>
  )
}

export default Cart