import React from 'react';
import { useState } from 'react';

function Usestate(){
    let [on , off]=useState(0)
    let abc = () =>{
        off(on + 1)
    }

    return(
        <>
        <h1>on : {on}</h1>
        <button onMouseOver={abc}>anser +</button>
        </>
    )
}

export default Usestate