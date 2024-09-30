import React, { useEffect, useRef , useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const UseRef = () => {

    const [color,setcolor] = useState(" ");
    const [white,setwhite] = useState(" ");

    let a = useRef(); 
    let b = useRef(); 
    let c = useRef(); 
    let d = useRef(); 
    let e = useRef(); 
    
    useEffect(() => {
        setTimeout(() => {
            a.current.style.color = 'green';
            console.log(a)
        }, 1000);
    }, []); 

    useEffect(() => {
        setTimeout(() => {
            b.current.style.color = 'green';
            console.log(b)
        }, 2000);
    }, []); 

    useEffect(() => {
        setTimeout(() => {
            c.current.style.color = 'green';
            console.log(c)
        }, 3000);
    }, []); 

    useEffect(() => {
        setTimeout(() => {
            d.current.style.color = 'green';
            console.log(d)
        }, 4000);
    }, []); 

    useEffect(() => {
        setTimeout(() => {
            e.current.style.color = 'green';
            console.log(e)
        }, 5000);
    }, []); 




    let black_ground = () =>{
        setcolor("black")
        setwhite("white")
        a.current.style.color = 'red'
        b.current.style.color = 'red'
        c.current.style.color = 'red'
        d.current.style.color = 'red'
        e.current.style.color = 'red'

    }

    let black_off = () =>{
        setcolor("white")  
        setwhite("black")
        a.current.style.color = 'black'
        b.current.style.color = 'black'
        c.current.style.color = 'black'
        d.current.style.color = 'black'
        e.current.style.color = 'black'        
    }


    return (
        <>
                <h3 className='p-3' style={{background : color, color : white} }>This is a : <b ref={a}>Apple</b></h3>
                <h3 className='p-3' style={{background : color, color : white} }>This is a : <b ref={b}>Mongo</b></h3>
                <h3 className='p-3' style={{background : color, color : white} }>This is a : <b ref={c}>Banana</b></h3>
                <h3 className='p-3' style={{background : color, color : white} }>This is a : <b ref={d}>Pineapple</b></h3>
                <h3 className='p-3' style={{background : color, color : white} }>This is a : <b ref={e}>Grape</b></h3>
                <button className='btn btn-success ' onClick={black_ground}>On</button>
                <button className='btn btn-danger mx-2' onClick={black_off}>Off</button>
        </>

    );
};

export default UseRef;
