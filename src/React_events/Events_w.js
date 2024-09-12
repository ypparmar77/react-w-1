import React from 'react'

let Abc = () => alert("tha")

const Abc1 = (par) => console.log(par); 

export default function Event_work() {
  return (
   <>
    <button onMouseOut={() => alert("thi is a yash")/console.log("123")}>Subit</button>
    <button onClick={Abc}>Click</button>
    <button onMouseDown={() =>Abc1("ok bro")}>Abc1</button>
    <button onMouseEnter={(Event) => console.log(Event)}>event</button>
    </>
  );
}
