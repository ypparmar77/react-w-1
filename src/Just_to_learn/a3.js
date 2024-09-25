import React, { useEffect, useState } from 'react'

export default function UseEffectHookComponent() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('default name'); 
 
    // useEffect(() => {
    //     console.log('useEffect Called!');
    //     console.log(count);
    //     // setTimeout(() => {
    //     //     setCount((count) => count + 1);
    //     // }, 2000);
    // })

    // will run once component rendered
    useEffect(() => {
        console.log('component mounted!');
    }, [])

    // will run every time component update dependency wise
    useEffect(() => {
        console.log(count);
    }, [count])
    useEffect(() => {
        console.log(name);
    }, [name])

    const handleInput = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 2);
        }, 2000);

        return () => clearTimeout(timer)
    }, []);

    return (
        <div>
            <h1>useEffect Hook</h1>
            <button onClick={() => setCount(count + 1)}> + {count}</button>
            <br />
            <input onChange={handleInput} value={name} />
        </div>
    )
}