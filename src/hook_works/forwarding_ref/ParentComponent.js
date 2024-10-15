import React, { useRef } from 'react'
import ChildComponent from './ChildComponent';
// import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    let inputRef = useRef();
    return (
        <div>
            <ChildComponent ref={inputRef} props={"text search"}/>
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </div>
    )
}