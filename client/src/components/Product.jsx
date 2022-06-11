import React, { useEffect, useState } from 'react'

function Product() {
    const [brand,setBrand]=useState();
    const [category,setCategory]=useState();
    const [position,setPosition]=useState()
    const [type,setType]=useState()
    const [go,setGo]=useState(false)
    const [product,setProduct]=useState({
        brandId:"",
        title:"",
        image:"",
        price:"",
        categoryId:"",
        positionId:"",
        typeId:""
    })
    const [productId,setProductId]=useState("")
    function handleChange(e){
        setProduct({
            ...product,
            [e.target.id]:e.target.value
        })
    }
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
                el.image==product.image &&
                el.typeId==product.typeId &&
                el.positionId==product.positionId
            }))
            setProductId(arr[0]._id)
            setGo(true)
        })
    }
    function addToBrand(){
        // fetch(`http://localhost:5000/category/${product.categoryId}/product/${productId}`,{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // })
        fetch(`http://localhost:5000/brand/${product.brandId}/product/${productId}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        })
        setGo(false)
    }
    useEffect(()=>{
        if(go==true){
            addToBrand()
        }
    })
    const getBrand=async()=>{
        const data=await fetch("http://localhost:5000/brand");
        const res=await data.json();
        setBrand(res)
    }
    const getCategory=async()=>{
        const data=await fetch("http://localhost:5000/category");
        const res=await data.json();
        setCategory(res)
    }
    const getPosition=async()=>{
        const data=await fetch("http://localhost:5000/position");
        const res=await data.json();
        setPosition(res)
    }
    const getType=async()=>{
        const data=await fetch("http://localhost:5000/type");
        const res=await data.json();
        setType(res)
    }
    useEffect(()=>{
        getBrand()
        getCategory()
        getPosition()
        getType()
    },[])
    console.log(brand,category,position,type)
  return (
    <div>
        <div>
            <form onSubmit={handleSubmit} action="">
                <select onChange={handleChange} id="brandId">
                    <option>Brands</option>
                    {brand!==undefined && brand.map((el)=>(
                        <option value={el._id}>{el.brand_name}</option>
                    ))}
                </select>
                <input onChange={handleChange} id="title" type="text" placeholder='Title'/>
                <input onChange={handleChange} id="image" type="text" placeholder='Image'/>
                <input onChange={handleChange} id="price" type="text" placeholder='Price'/>
                <select onChange={handleChange} id="categoryId">
                    <option>Category</option>
                    {category!==undefined && category.map((el)=>(
                        <option value={el._id}>{el.category_name}</option>
                    ))}
                </select>
                <select onChange={handleChange} id="positionId">
                    <option>Position</option>
                    {position!==undefined && position.map((el)=>(
                        <option value={el._id}>{el.wear_part}</option>
                    ))}
                </select>
                <select onChange={handleChange} id="typeId">
                    <option>Type</option>
                    {type!==undefined && type.map((el)=>(
                        <option value={el._id}>{el.type_name}</option>
                    ))}
                </select>
                <input type="submit" />
            </form>
        </div>
    </div>
  )
}

export default Product