import React,{ useState } from 'react'

function Category() {
    const [category,setCategory]=useState({
        category_name:""
    });
    async function addCategory(e){
        e.preventDefault();
        console.log(category)
        await fetch("http://localhost:5000/category",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(category)
        })
    }
    function handleChange(e){
        setCategory({
            ...category,
            [e.target.id]:e.target.value
        })
    }
    //console.log(category)
  return (
    <div>
        <h1>Add new category</h1>
        <form onSubmit={addCategory} action="">
            <input id="category_name" onChange={handleChange} type="text" placeholder='Create New Category'/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Category