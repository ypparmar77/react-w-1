import React from 'react';
import { useState } from 'react';

export default function UseState(){
    
    let [text , settext] = useState(0)
    let Abc = () =>{
        settext(text + 1)
        
    }
    return(
        <>
        <p>numbers : {text}</p>
        <button onClick={Abc}>work</button>
        </>
    )
}