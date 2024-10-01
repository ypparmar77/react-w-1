import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ChildrenComponent1 from './Ch_Component1';
import ChildrenComponent2 from './Ch_Component2';
import ChildrenComponent3 from './Ch_Component3';
import ChildrenComponent4 from './Ch_Component4';
import ChildrenComponent5 from './Ch_Component5';

export default function ParentComponent() {
    const [text1, setText1] = useState("Pushpa Pushparaaj");
    const [text2, setText2] = useState("Zindagi mein teen cheez kabhi underestimate nahi karna");
    const [text3, setText3] = useState("Ek bar joh maine commitment kar di");
    const [text4, setText4] = useState("Joh main bolta hoon woh main karta hoon");
    const [text5, setText5] = useState("Don't underestimate the");
    
    const set1 = (e) => {
        setText1(e);
    };

    const set2 = (e) => {
        setText2(e);
    };

    const set3 = (e) => {
        setText3(e);
    };

    const set4 = (e) => {
        setText4(e);
    };

    const set5 = (e) => {
        setText5(e);
    };
    
    return (
        <div>
            <h3 className='bg-dark text-white p-4'>Props = ParentComponent & ChildrenComponent</h3>
            <br />
            <p className='ms-4'>A picture's dialogue is inside the text <br />Moive Name : <b style={{color : 'red'}}>Pushpa</b></p>
            <h4 className='ms-4'><b>Task : </b> Here you have to complete the dialogue. By clicking on the button.</h4>
            
            <h5 className='bg-info p-2 ms-4 rounded-0'>TEXT : {text1}</h5>
            <ChildrenComponent1 get1={set1} />

            <br /><br />

            <p className='ms-4'>A picture's dialogue is inside the text <br />Moive Name : <b style={{color : 'red'}}>Ready</b></p>
            <h4 className='ms-4'><b>Task : </b> Here you have to complete the dialogue. By clicking on the button.</h4>
            
            <h5 className='bg-info p-2 ms-4 rounded-0'>TEXT : {text2}</h5>
            <ChildrenComponent2 get2={set2} />

            <br /><br />

            <p className='ms-4'>A picture's dialogue is inside the text <br />Moive Name : <b style={{color : 'red'}}>Wanted</b></p>
            <h4 className='ms-4'><b>Task : </b> Here you have to complete the dialogue. By clicking on the button.</h4>

            <h5 className='bg-info p-2 ms-4 rounded-0'>TEXT : {text3}</h5>
            <ChildrenComponent3 get3={set3} />

            <br /><br />

           <p className='ms-4'>A picture's dialogue is inside the text <br />Moive Name : <b style={{color : 'red'}}>Rowdy rathore</b></p>
           <h4 className='ms-4'><b>Task : </b> Here you have to complete the dialogue. By clicking on the button.</h4>

           <h5 className='bg-info p-2 ms-4 rounded-0'>TEXT : {text4}</h5>
           <ChildrenComponent4 get4={set4} />

           <br /><br />

           <p className='ms-4'>A picture's dialogue is inside the text <br />Moive Name : <b style={{color : 'red'}}>Cenaiexpres</b></p>
           <h4 className='ms-4'><b>Task : </b> Here you have to complete the dialogue. By clicking on the button.</h4>

           <h5 className='bg-info p-2 ms-4 rounded-0'>TEXT : {text5}</h5>
           <ChildrenComponent5 get5={set5} />

          
        </div>

    );
}
