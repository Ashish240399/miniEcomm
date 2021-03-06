import React, { useState } from 'react'
import "./Register.css"
import axios from "axios"
function Register() {
    const [form,setForm]=useState(
        {
            name:"",
            email:"",
            password:""
        }
    )
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.id]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(form)
        await fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(form)
        }).then(async()=>{
            const data= await fetch("http://localhost:5000/users");
            const res=await data.json();
            const arr=res.filter((el)=>el.email==form.email)
            localStorage.setItem("user",JSON.stringify(arr))
        })
    }
    //console.log(form)
    
  return (
    <div className='register'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input className='input' onChange={handleChange} id='name' type="text" placeholder='Enter Name'/>
            <input className='input' onChange={handleChange} id='email' type="text" placeholder='Enter email'/>
            <input className='input' onChange={handleChange} id='password' type="text" placeholder='Enter Password'/>
            <input className='btn' type='submit'/>
        </form>
    </div>
  )
}

export default Register