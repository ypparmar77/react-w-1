import React, { useState } from 'react'

export default function Forms() {

    const [work, setwork] = useState('');
    const [open, setopen] = useState(false);


    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    if(work == ''){
        setopen(true);
        setwork('');
    }   
  return (
    <>
    <form  onSubmit={handleSubmit}>
        <input type="text"  />
         <input type='submit'/>

    </form>
    </>
  )
}
