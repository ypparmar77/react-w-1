import React, { useState } from 'react';

export default function ChildrenComponent5(props) {
  let data5 =  "Don't underestimate the { ' power of a common man ' }";
  let Again5 = "Don't underestimate the";

  let audio5 = new Audio(require('./comap manAudio 2024-10-01 at 18.21.12_80e094f9.mp3'));

  const [sound5, setsound5] = useState(false); 

  const next_line5 = () => {
    if (!sound5) { 
      audio5.play();
      props.get5(data5);
      setsound5(true);
    }
  };

  const Again_work5 = () => {
    props.get5(Again5);
    setsound5(false);
  };

  return (
    <div>
      <button className='btn btn-success ms-4' onClick={next_line5} disabled={sound5}>Click to know the next line.</button>
      <button className='btn btn-dark ms-3' onClick={Again_work5}> Again as it was.</button>
    </div>
  );
}
