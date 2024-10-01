import React, { useState } from 'react';

export default function ChildrenComponent3(props) {
  let data3 = " Ek bar joh maine commitment kar di { ' uske baad toh main khud ki bhi nahi sunta ' }";
  let Again3 = " Ek bar joh maine commitment kar di";

  let audio3 = new Audio(require('./cmenment Audio 2024-10-01 at 19.16.55_91901400.mp3'));

  const [sound3, setsound3] = useState(false); 

  const next_line3 = () => {
    if (!sound3) { 
      audio3.play();
      props.get3(data3);
      setsound3(true);
    }
  };

  const Again_work3 = () => {
    props.get3(Again3);
    setsound3(false);
  };

  return (
    <div>
      <button className='btn btn-success ms-4' onClick={next_line3} disabled={sound3}>Click to know the next line.</button>
      <button className='btn btn-dark ms-3' onClick={Again_work3}> Again as it was.</button>
    </div>
  );
}
