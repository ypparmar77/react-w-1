import React, { useEffect, useRef, useState } from 'react'

export default function UseRefHookComponent() {
    // const [inputValue, setInputValue] = useState("");
    // const count = useRef(0);

    // useEffect(() => {
    //     count.current = count.current + 1;
    // });

    // return (
    //     <>
    //         <input
    //             type="text"
    //             value={inputValue}
    //             onChange={(e) => setInputValue(e.target.value)}
    //         />
    //         <h1>Render Count: {count.current}</h1>
    //     </>
    // );

    // const [inputValue, setInputValue] = useState("");
    // const previousInputValue = useRef("");

    // useEffect(() => {
    //     previousInputValue.current = inputValue;
    // }, [inputValue]);

    // return (
    //     <>
    //         <input
    //             type="text"
    //             value={inputValue}
    //             onChange={(e) => setInputValue(e.target.value)}
    //         />
    //         <h2>Current Value: {inputValue}</h2>
    //         <h2>Previous Value: {previousInputValue.current}</h2>
    //     </>
    // );

    // element access by useRef Hook
    // const inputElement = useRef();
    // const h1 = useRef();

    // const focusInput = () => {
    //     console.log(inputElement);
    //     inputElement.current.focus();
    //     h1.current.style.color = 'green';
    // };

    // return (
    //     <>
    //         <h1 ref={h1}>useRef Hook</h1>
    //         <input type="text" ref={inputElement} />
    //         <button onClick={focusInput}>Focus Input</button>
    //     </>
    // );


    // useState vs useRef 
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const increaseCount = () => {
        countRef.current = countRef.current + 1;
        console.log(countRef.current);
        setCount(countRef.current);
    };

    console.log('component rendered!');

    return (
        <div>
            <h1>{countRef.current}</h1>
            <h1>Counter: {count}</h1>
            <button onClick={increaseCount}>Increase</button>
        </div>
    );
}