import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'



export default function Event_work() {

  let Abc = () => alert("this is a alert")

const Abc1 = (par) => console.log(par); 
  return (
   <>
    <button className='btn btn-danger ms-2'  onMouseOut={() => alert("onMouseOut_work")/console.log("123")}>Subit</button>
    <button className='btn btn-dark ms-2'  onClick={Abc}>Click</button>
    <button className='btn btn-info ms-2'  onMouseDown={() =>Abc1("onMouseDown_work")}>Abc1</button>
    <button className='btn btn-success ms-2'  onMouseEnter={(Event) => console.log(Event)}>event</button>
    </>
  );
}
