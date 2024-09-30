import React, { useState } from 'react';

export default function ChildrenComponent(props) {
  let data = " Pushpa Pushparaaj { ' Me Jhukega Nahin Saala ' }";
  let Again = "Pushpa Pushparaaj";

  let audio = new Audio(require('./Pushpa_Pushparaaj_dialogue.mp3'));

  const [sound, setsound] = useState(false); 

  const next_line = () => {
    if (!sound) { 
      audio.play();
      props.get(data);
      setsound(true);
    }
  };

  const Again_work = () => {
    props.get(Again);
    setsound(false);
  };

  return (
    <div>
      <button className='btn btn-success ms-4' onClick={next_line} disabled={sound}>Click to know the next line.</button>
      <button className='btn btn-dark ms-3' onClick={Again_work}> Again as it was.</button>
      
      
    </div>
  );
}
