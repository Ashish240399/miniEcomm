import React, { useEffect, useState } from 'react'

function Product() {
    const [data,setData]=useState()
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        const product=await fetch("http://localhost:5000/products");
        const res=await product.json();
        setData(res);
    }
    console.log(data)
  return (
    <div>
        <div>
            <select>
                <option value="">Category</option>
                <option>Mobile</option>
                <option>Laptop</option>
                <option>Jewellery</option>
            </select>
        </div>
        {data!=undefined && data.map((el)=>(
            <div>
                {/* <img src={el.images[0]}/> */}
                <p>{el.title}</p>
            </div>
        ))}
    </div>
  )
}

export default Product