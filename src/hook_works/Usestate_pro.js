import React from 'react'
import { useState } from 'react'

export default function Usestate_pro() {

    const [top , settop] = useState("");
    const [color , setcolor] = useState("");

    // console.log(top)

    const anser = () =>{
        // console.log("this is a yash " + top)
        const text = top.toUpperCase()
        settop(text)

    }
    const fill  = (event) =>{
        settop(event.target.value)
    }
    const Delete = () => {
        settop("")
        setcolor("black")
    }

    const red = () => {
        setcolor("red")
    };
    const blue = () => {
        setcolor("blue")
    };
    const Black = () =>{
        setcolor("black")
    }

  return (
    <>
    <h4 className='bg-dark text-white p-3 ' >With the help of this project you can capitalize small text</h4>
    
    <div className='container-fluid my-5'>

    <textarea className="form-control" style={{color : color } } value={top} onChange={fill} placeholder='this is upperCase work' rows={20}  id="floating"></textarea>

    <button className='btn btn-dark mt-3 text-white' onClick={anser} >Subit to upercase</button>  
    <button className='btn btn-danger mt-3 ms-3 text-white' onClick={red} >Red color</button>
    <button className='btn btn-primary mt-3 ms-3 text-white' onClick={blue} >blue color</button>
    <button className='btn btn-dark mt-3 ms-3 text-white' onClick={Black} >Black color</button>
    <button className='btn btn-warning mt-3 ms-3 text-white' onClick={Delete} >Clean Tax.</button>
    </div>  
    </>
  )
}


