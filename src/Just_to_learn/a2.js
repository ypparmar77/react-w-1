import React, { useEffect, useState } from 'react';

export default function A2() {
    const [work, setwork] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    let   [color , setcolor] = useState();

    // useEffect(() => {
    //     if (isRunning) {
    //         const timer = setTimeout(() => {
    //             setwork(work + 1);
    //         }, 1);
    //         return () => clearTimeout(timer); 
    //     }
    // }); 

    // useEffect(() => {
    //     if(isRunning){
    //         let set = setTimeout(()=>{
    //             setwork(work +1);
    //         } , 1000);
    //         return () => clearTimeout(set);
    //     };
    // })

    useEffect(()=>{
        if(isRunning){
           let set = setTimeout(()=>{
            setwork(work +1);
           });
           return ()=> set;
        }
    },1000);




    let Abc = () => {
        setIsRunning(false);
        
    };

    let Bcd = () => {
        setIsRunning(true);
    };

    let Cler = ()=>{
        setIsRunning(false);
        setwork(0)
        setcolor('black');
    }

    let Color = () =>{
        setcolor('red')
    }
    
    let Color_grenn = () =>{
        setcolor('blue')
    }

    return (
        <>
            <h1>This is a useEffect component</h1>
            <h1 style={{color : color}}>{work}</h1>
            <button onClick={Abc}>Stop btn</button>
            <button onClick={Bcd}>Start btn</button>
            <button onClick={Cler}>ROmove</button>
            <button onClick={Color}>color</button>
            <button onClick={Color_grenn}>color</button>
        </>
    );
}
