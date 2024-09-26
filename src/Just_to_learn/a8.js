import React from 'react'
import { useState,useEffect,useRef } from 'react'


export default function A8() {

    const [text,settext]=useState(" ");

    const text_work = useRef(" ");

    useEffect(()=>{
        text_work.current = text
    })

  return (
    <div>
        <input onChange={(e) => settext(e.target.value)} type="text" name="text" id="text" />

        <h1>text :  {text}</h1>
        <h1>text : {text_work.current} </h1>


    </div>
  )
}
