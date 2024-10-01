import React, { useState } from 'react';

export default function ChildrenComponent2(props) {
  let data2 = " Zindagi mein teen cheez kabhi underestimate nahi karna { ' … I, Me and Myself! ' }";
  let Again2 = "Zindagi mein teen cheez kabhi underestimate nahi karna";

  let audio2 = new Audio(require('./redi Audio 2024-10-01 at 16.25.05_1df6f5b4.mp3'));

  const [sound2, setsound2] = useState(false); 

  const next_line2 = () => {
    if (!sound2) { 
      audio2.play();
      props.get2(data2);
      setsound2(true);
    }
  };

  const Again_work2 = () => {
    props.get2(Again2);
    setsound2(false);
  };

  return (
    <div>
      <button className='btn btn-success ms-4' onClick={next_line2} disabled={sound2}>Click to know the next line.</button>
      <button className='btn btn-dark ms-3' onClick={Again_work2}> Again as it was.</button>
    </div>
  );
}
