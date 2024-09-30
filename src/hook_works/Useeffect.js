import React from 'react';
import { useEffect , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


export default function Useeffect() {


  let Stop = () =>{
    setruntime(false)
  }
  let Start = () =>{
    setruntime(true)
    // seteffect(0)
  }
  let Remove = ()=>{
    seteffect(0)
  }

    let [effect , seteffect] = useState(0);
    let [runtime , setruntime] = useState(true);


      useEffect(()=>{
         if(runtime){
     let set  = setTimeout(()=>{
            console.log(effect)
            seteffect(effect + 1)
          } , 100);
          return () => set
         }

      })
      
  return (
    <>
    <h1>React useEffect Hooks</h1>
    <br />
    <p>This is a Number : <b>{effect}</b></p> 
    <br />
    <button className='btn btn-danger ms-2' onClick={Stop}>Stop</button>
    <button className='btn btn-success ms-2' onClick={Start}>Start</button>
    <button className='btn btn-dark ms-2 ' onClick={Remove}>Remove</button>

    </>
  )
}
