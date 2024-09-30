import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'


export default function A1() {

  const [text, settext] = useState({
    
    fruit : "apple",
    cricket : "bat,boll",
    music   : "pal pal neno ke pas song",
    luch    : "hard work"
  });


 
  const [myStyle, setMyStyle] = useState({});

  const Black = () => {
     setMyStyle({
      color: 'red',
      backgroundColor : 'blue'
    });
  };
  return (
    <>
    <div id='color' className="container" style={myStyle}>
    <p className='bg-info p-5'>hy i am a {text.fruit}</p>
    <p className='bg-dark text-white p-5'>i like it {text.music}</p>
    <button className='bg-danger mx-3'>Subit</button>
    <button className='btn btn-dark mt-3 ms-3 text-white' onClick={Black} >Black color</button>
    </div>
    </>
    
  )
  
}
