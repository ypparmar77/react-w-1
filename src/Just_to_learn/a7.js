import React, { useRef, useEffect, useState } from 'react';

export default function Are_to_map() {
    const Aery = ["mongo", "apple", "offer", "this", "big"];
    const [rning, setrning] = useState(false);
    const yash = useRef();

    useEffect(() => {
        let timer1, timer2, timer3, timer4;

        if (rning) {
            timer1 = setTimeout(() => {
                yash.current.style.color = 'red';
            }, 1000);
            
            timer2 = setTimeout(() => {
                yash.current.style.color = 'green';
            }, 2000);
            
            timer3 = setTimeout(() => {
                yash.current.style.color = 'red';
            }, 3000);
            
            timer4 = setTimeout(() => {
                yash.current.style.fontSize = '20px';
            }, 4000);
        }

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, [rning]);

    const on = () => {
        setrning(true); 
    };

    const off = () => {
        setrning(false); 
    };

    return (
        <div>
            <ul ref={yash}>
                {Aery.map((value, index) => (
                    <li key={index}>
                        <b>name:</b> {value} {index}
                        <hr />
                    </li>
                ))}
            </ul>
            <button onClick={on}>on</button>
            <button onClick={off}>off</button>
        </div>
    );
}
