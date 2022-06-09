import React, { useEffect, useState } from 'react'

function Product() {
    const [product,setProduct]=useState({
        brandId:"",
        title:"",
        image:"",
        price:"",
        categoryId:""
    })
    const [productId,setProductId]=useState("")
    function handleChange(e){
        setProduct({
            ...product,
            [e.target.id]:e.target.value
        })
    }
    //console.log(product)
    function handleSubmit(e){
        e.preventDefault();
        console.log(product)
        fetch("http://localhost:5000/products",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        }).then(async()=>{
            const data=await fetch("http://localhost:5000/products");
            const res=await data.json();
            // setProductId()
            const arr=(res.filter((el)=>{
                return el.brandId==product.brandId &&
                el.categoryId==product.categoryId &&
                el.title==product.title &&
                el.price==product.price &&
                el.image==product.image
            }))
            setProductId(arr[0]._id)
        })
        .then(async()=>{
            try {
                console.log(productId,product.brandId)
                await fetch(`http://localhost:5000/brand/${product.brandId}/product/${productId}`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
            } catch (error) {
                console.log(error)
            }
            
        })
        .then(async()=>{
            try {
                await fetch(`http://localhost:5000/category/${product.categoryId}/product/${productId}`,{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
            } catch (error) {
                console.log(error)
            }
            
        })
    }
    //console.log(productId)
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit} action="">
                <select onChange={handleChange} id="brandId">
                    <option>Brands</option>
                    <option value="62a24be42650012d63788a10">Nike</option>
                    <option value="62a24bff2650012d63788a13">Puma</option>
                    <option value="62a24c0d2650012d63788a16">Adidas</option>
                    <option value="62a24c142650012d63788a18">Campus</option>
                    <option value="62a24c192650012d63788a1a">HRX</option>
                </select>
                <input onChange={handleChange} id="title" type="text" placeholder='Title'/>
                <input onChange={handleChange} id="image" type="text" placeholder='Image'/>
                <input onChange={handleChange} id="price" type="text" placeholder='Price'/>
                <select onChange={handleChange} id="categoryId">
                    <option>Category</option>
                    <option value="62a24bc32650012d63788a0a">T-Shirt</option>
                    <option value="62a24c332650012d63788a1d">Pants</option>
                    <option value="62a24c422650012d63788a1f">Caps</option>
                    <option value="62a24c4e2650012d63788a21">Nickers</option>
                    <option value="62a24c532650012d63788a23">Slipers</option>
                    <option value="62a250022650012d63788a26">Shoes</option>
                </select>
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}

export default Product