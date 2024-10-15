import React from 'react'
import { useState } from 'react'

export default function StateHookComponent() {
    let [count, setCount] = useState(0);
    let components = {
        ram: 512,
        cpu: 'i5 4th Gen',
    }
    let [getPCParts, setPCParts] = useState(components);


    let increaseCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            Count: {count}
            <br />
            {/* <button onClick={() => setCount(count + 1)}>Increase Count +</button> */}
            <button onClick={increaseCount}> +</button>
        </div>
    )
}