import React, { useState } from 'react';

export default function ChildrenComponent1(props) {
  let data1 = " Pushpa Pushparaaj { ' Me Jhukega Nahin Saala ' }";
  let Again1 = "Pushpa Pushparaaj";

  let audio1 = new Audio(require('./Pushpa_Pushparaaj_dialogue.mp3'));

  const [sound1, setsound1] = useState(false); 

  const next_line1 = () => {
    if (!sound1) { 
      audio1.play();
      props.get1(data1);
      setsound1(true);
    }
  };

  const Again_work1 = () => {
    props.get1(Again1);
    setsound1(false);
  };

  return (
    <div>
      <button className='btn btn-success ms-4' onClick={next_line1} disabled={sound1}>Click to know the next line.</button>
      <button className='btn btn-dark ms-3' onClick={Again_work1}> Again as it was.</button>
    </div>
  );
}
