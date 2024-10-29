import React from 'react'
import { useParams , Link } from 'react-router-dom'
import { useState , useEffect } from 'react';
import "../style.css";


export default function Post_Work() {
    const {id} = useParams();
    const [post , setpost] = useState();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=> res.json())
        .then((Fetch)=>setpost(Fetch))
    });

      if (!post) {
        return (
          <>
            <div id='work_spinner' className="spinner-border text-success"></div>
          </>
        )
    }
    
  return (
    <>
    <div className='ms-5'>
    <h1>Post work</h1>
    <p>Table id : <b>{post.id}</b></p>
    <p>Table title : <b>{post.title}</b></p>
    <p>Table Body : <b>{post.body}</b></p>
    <Link to='/Api_work' className='btn btn-success'>Back</Link>
    </div>
    </>
  )
}
