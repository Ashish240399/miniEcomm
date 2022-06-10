import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function AllBrands() {
    const [allBrands,setAllBrands]=useState()
    const [brandProduct,setBrandProduct]=useState()
    async function getAllBrands(){
        const data=await fetch("http://localhost:5000/brand");
        const res=await data.json();
        setAllBrands(res);
    }
    useEffect(()=>{
        getAllBrands()
    },[])
    async function findProduct(id){
        const data=await fetch(`http://localhost:5000/brand/${id}`);
        const res=await data.json();
        setBrandProduct(res.products);
    }
  return (
    <div>
        <h2>Available Brands</h2>
        {allBrands!==undefined && allBrands.map((el)=>(
            <button onClick={()=>{
                findProduct(el._id)
            }}>{el.brand_name}</button>
        ))}

        {brandProduct!==undefined && brandProduct.map((el)=>(
            <p>
                <div>Title : {el.title}</div>
                <div>Price : {el.price}</div>
            </p>
        ))}
    </div>
  )
}

export default AllBrands