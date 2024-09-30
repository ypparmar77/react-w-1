import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ChildrenComponent from './ChildrenComponent';

export default function ParentComponent() {
    const [text, setText] = useState("Pushpa Pushparaaj");

    const set = (e) => {
        setText(e);
    };
    
    return (
        <div>
            <h3 className='bg-dark text-white p-4'>Props = ParentComponent & ChildrenComponent</h3>
            <br />
            <p className='ms-4'>A picture's dialogue is inside the text <br />Moive Name : <b>Pushpa</b></p>
            <h4 className='ms-4'><b>Task : </b> Here you have to complete the dialogue. By clicking on the button.</h4>
            
            <h5 className='bg-info p-2 ms-4 rounded-0'>TEXT : {text}</h5>
            <ChildrenComponent get={set} />

        </div>

    );
}
