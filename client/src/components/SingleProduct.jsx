import React, { useEffect, useState } from 'react'

function SingleProduct() {
    const product=JSON.parse(localStorage.getItem("productDetails"));
    //console.log(product)
    const x=product.reviews;
    //console.log(x)
    const [show,setShow]=useState(false)
    const [a,setA]=useState([])
    var l=[]
    var z=Array(x.length).fill(-1);
    async function reviews(){
        var ans=[];
        for(var i=0;i<x.length;i++){
            const data=await fetch(`http://localhost:5000/review/${x[i]}`);
            const res=await data.json();
            ans.push(res);
            
        }
        setA(ans)
    }
    
    useEffect(()=>{
        reviews()  
    },[])
    console.log(a)
  return (
    <div>
        <div>
            <img src={product.image}/>
            <p>{product.title}</p>
            <p><b>Price : </b>Rs {product.price}</p>
            {a.map((el)=>(
                <div>{el.userId.name}:{el.review}</div>
            ))}
        </div>
    </div>
  )
}

export default SingleProduct