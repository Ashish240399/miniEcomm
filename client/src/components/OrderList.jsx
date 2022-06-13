import React, { useState } from 'react'
import { useEffect } from 'react'

function OrderList() {
    const [reviews,setReviews]=useState("");
    const [orders,setOrders]=useState()
    const [orderList,setOrderList]=useState()
    const [reviewId,setReviewId]=useState("")
    const [productId,setProductId]=useState("")
    var obj={}
    let user=JSON.parse(localStorage.getItem("user"));
    useEffect(()=>{
        getOrder()
    },[])
    async function getOrder(){
        const data=await fetch(`http://localhost:5000/order/${user[0]._id}`)
        const res=await data.json();
        setOrders(res[0].items)
    }
    if(orders){
        fetchItems()
        setOrders()
    }
    async function fetchItems(){
        var a={};
        var b=[];
        for(var i=0;i<orders.length;i++){
            const data=await fetch(`http://localhost:5000/cart/${orders[i]}`)
            const res=await data.json();
            //console.log(res.item)
            if(a[res.item._id]==undefined){
                a[res.item._id]=1
                b.push(res.item)
            }
        }
        setOrderList(b);
    }
    //console.log(orderList)
    function handleChange(e){
        setReviews(e.target.value)
    }
    function setReview(id){
        setProductId(id)
        fetch("http://localhost:5000/review",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                review:reviews,
                userId:user[0]._id
            })
        }).then(async()=>{
            const data=await fetch(`http://localhost:5000/review/user/${user[0]._id}`);
            const res=await data.json();
            setReviewId(res[res.length-1]._id)
        })
    }
    useEffect(()=>{
        if(reviewId!=""){
            AddReviewToProduct();
            
        }
    })
    function AddReviewToProduct(){
        console.log(productId,reviewId)
        fetch(`http://localhost:5000/products/${productId}/review/${reviewId}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>{
            setReviewId("")
        })
    }
  return (
    <div>
        <h1>Order List</h1>
        <div>
            {orderList!=undefined && orderList.map((el)=>(
                <p>{el.title}
                    <textarea onChange={handleChange} placeholder='Add Reviews'></textarea>
                    <button onClick={()=>{
                        setReview(el._id)
                    }}>Add Reviews</button>
                </p>
            ))}
        </div>
    </div>
  )
}

export default OrderList