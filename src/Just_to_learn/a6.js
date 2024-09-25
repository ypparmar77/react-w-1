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
    const inputElement = useRef();
    const h1 = useRef();

    const focusInput = () => {
        console.log(inputElement);
        inputElement.current.focus();
        h1.current.style.backgroundColor = 'green';
    };

    const Abc = () =>{
        h1.current.style.backgroundColor = 'white';
    }


    return (
        <>
            <h1 ref={h1}>useRef Hook</h1>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
            <button onClick={Abc}>off</button>
        </>
    );

}