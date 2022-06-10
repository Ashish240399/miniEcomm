import React, { useState } from 'react'
import {Link} from "react-router-dom"
function Brand() {
    const [brand,setBrand]=useState(
        {
            brand_name:"",
        }
    );
    async function addBrand(e){
        e.preventDefault();
        //console.log("brand",brand);
        await fetch("http://localhost:5000/brand",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(brand)
        })
    }
    function handleChange(e){
        setBrand({
            ...brand,
            [e.target.id]:e.target.value
        })
    }
    console.log(brand)
  return (
    <div>
        <h1>Add new Brand</h1>
        <form onSubmit={addBrand} action="">
            <input id="brand_name" onChange={handleChange} type="text" placeholder='Create New Brand'/>
            <input type='submit'/>
        </form>
        <div><Link to="/all_brands"><button>Show All Brands</button></Link></div>
    </div>
  )
}

export default Brand