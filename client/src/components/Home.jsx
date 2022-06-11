import React,{useState,useEffect} from 'react'

function Home() {
    let user=JSON.parse(localStorage.getItem("user"));
    const [data,setData]=useState()
    const [category,setCategory]=useState();
    const [position,setPosition]=useState()
    const [type,setType]=useState()
    const [filtering,setFiltering]=useState({
        categoryId:"",
        positionId:"",
        typeId:""
    })
    
    
    async function getData(){
        const product=await fetch("http://localhost:5000/products");
        const res=await product.json();
        setData(res);
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
    console.log(data)
    function handleChange(e){
        setFiltering({
            ...filtering,
            [e.target.id]:e.target.value
        })
    }
    useEffect(()=>{
        getData()
        getCategory()
        getPosition()
        getType()
    },[])
    let url;
    async function formSubmit(e){
        e.preventDefault();
        
        if(filtering.categoryId!=="" && filtering.positionId=="" && filtering.typeId==""){
            url=`category/${filtering.categoryId}`
        }
        else if(filtering.categoryId=="" && filtering.positionId!=="" && filtering.typeId==""){
            url=`wear/${filtering.positionId}`
        }
        else if(filtering.categoryId=="" && filtering.positionId=="" && filtering.typeId!==""){
            url=`type/${filtering.typeId}`
        }
        else if(filtering.categoryId!=="" && filtering.positionId!=="" && filtering.typeId!==""){
            url=`category/${filtering.categoryId}/wear/${filtering.positionId}/type/${filtering.typeId}`
        }
        else if(filtering.categoryId!=="" && filtering.positionId=="" && filtering.typeId!==""){
            url=`category/${filtering.categoryId}/type/${filtering.typeId}`
        }
        else if(filtering.categoryId!=="" && filtering.positionId!=="" && filtering.typeId==""){
            url=`category/${filtering.categoryId}/wear/${filtering.positionId}`
        }
        else if(filtering.categoryId=="" && filtering.positionId!=="" && filtering.typeId!==""){
            url=`wear/${filtering.positionId}/type/${filtering.typeId}`
        }
        //console.log(url)
        const da=await fetch(`http://localhost:5000/products/${url}`);
        const res=await da.json();
        setData(res)
    }
    async function addToCart(id){
        fetch(`http://localhost:5000/users/${user[0]._id}/add_to_cart/${id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            
        })
    }
  return (
    <div>
        <form onSubmit={formSubmit} action="">
            <select onChange={handleChange} id="categoryId">
                <option value="">Category</option>
                {category!==undefined && category.map((el)=>(
                    <option value={el._id}>{el.category_name}</option>
                ))}
            </select>
            <select onChange={handleChange} id="positionId">
                <option value="">Position</option>
                {position!==undefined && position.map((el)=>(
                    <option value={el._id}>{el.wear_part}</option>
                ))}
            </select>
            <select onChange={handleChange} id="typeId">
                <option value="">Type</option>
                {type!==undefined && type.map((el)=>(
                    <option value={el._id}>{el.type_name}</option>
                ))}
            </select>
            <input type="submit" />
        </form>
        
        {data!=undefined && data.map((el)=>(
            <div>
                {/* <img src={el.images[0]}/> */}
                <p>{el.title}  <span>
                        <button onClick={()=>{
                            addToCart(el._id)
                        }}>Add to cart</button>
                    </span></p>
            </div>
        ))}
    </div>
  )
}

export default Home