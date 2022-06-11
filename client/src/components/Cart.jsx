import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Cart() {
  let user=JSON.parse(localStorage.getItem("user"));
  const [cart,setCart]=useState();
  const userid=(user[0]._id)
  async function getCart(){
    const data=await fetch(`http://localhost:5000/products/${userid}`);
    const res=await data.json();
    console.log(res)
    //setCart(res);
  }
  // console.log(cart)
  useEffect(()=>{
    getCart()
  },[])
  // console.log(cart)
  // function cartDelete(id){
  //   fetch(`http://localhost:5000/users/${user[0]._id}/delete/${id}`,{
  //     method:"DELETE"
  //   })
  //   getCart()
  // }
  return (
    <div>
      {cart!==undefined && cart.map((el)=>(
          <div>
            <p>{el.title}  <button onClick={()=>{
              // cartDelete(el._id)
            }}><b>x</b></button></p>
          </div>
      ))}
    </div>
  )
}

export default Cart