import React, { useState } from 'react';

export default function ChildrenComponent4(props) {
  let data4 = " Joh main bolta hoon woh main karta hoon { ' joh main nahi bolta woh main definitely karta hoon ' }";
  let Again4 = "Joh main bolta hoon woh main karta hoon";

  let audio4 = new Audio(require('./WhatsApp Audio 2024-10-01 at 16.25.05_0da2b0b0.mp3'));

  const [sound4, setsound4] = useState(false); 

  const next_line4 = () => {
    if (!sound4) { 
      audio4.play();
      props.get4(data4);
      setsound4(true);
    }
  };

  const Again_work4 = () => {
    props.get4(Again4);
    setsound4(false);
  };

  return (
    <div>
      <button className='btn btn-success ms-4' onClick={next_line4} disabled={sound4}>Click to know the next line.</button>
      <button className='btn btn-dark ms-3' onClick={Again_work4}> Again as it was.</button>
    </div>
  );
}
