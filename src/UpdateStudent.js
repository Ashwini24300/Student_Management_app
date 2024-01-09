import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const navigate=useNavigate();
    const {id}=useParams();

    //
    useEffect(()=>{
      axios.get('http://localhost:8081/getEmpl/'+id)
            .then(res=>{
              console.log(res);
              console.log(res.data)
              setName(res.data[0].name)
              setEmail(res.data[0].email)
            }).catch(err=>console.log(err));
    },[])

    function handleSubmit(event){
        event.preventDefault();
        console.log(name +" "+email)
        axios.put('http://localhost:8081/update/'+id , {name,email})
        .then(res=>{
            console.log(res);
            navigate('/');
        }).catch(err=>console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
            <h2>Update Student</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input name='name' value={name} type="text" placeholder='Enter Name' className='form-control' 
                onChange={e=> setName(e.target.value)}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input name='email' value={email} type="email" placeholder='Enter Email' className='form-control'
                onChange={e=>setEmail(e.target.value)}></input>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateStudent;
