import React from 'react';
import { useState ,useRef , useEffect } from 'react';

export default function Usestate(){
    let [on , off]=useState(0)
    let [colortime , setcolortime]=useState(true);
    let abc = () =>{
        off(on + 1)
    }
    let h1 = useRef();

//     let Abc = ()=>{
//         h1.current.style.color = 'red';  
//   }


    useEffect(() =>{
        setTimeout(()=>{
            h1.current.style.color = 'red';  
          },1000)
    },[])


    return(
        <>
        {/* <button onClick={Abc}>red color</button> */}
        <h1>this is a <b ref={h1}>yash</b> </h1>
        <h1>on : {on}</h1>
        <button onMouseOver={abc}>anser +</button>
        </>
    )
}

