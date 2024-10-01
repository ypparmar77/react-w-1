import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default function Filter_List() {
    const [text, settext] = useState("");  
    const items = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple"];  
    const handleSearch = (e) => {
        settext(e.target.value);
    };

    return (
        <div className="container mt-3">
            <h2>Filter List</h2>

 <input style={{width : '80%', outline : 'none' , padding : '5px'}} type="text" placeholder="Search fruits..." value={text} onChange={handleSearch} className="mb-5" />

            <ul className="list-group">
                {items.filter((a) => {
                                            
                        return a.toLowerCase().includes(text.toLowerCase())

                    })
                    .map((b, index) => (
                        <li key={index} className="list-group-item bg-info">{b}</li>
                    ))}
            </ul>
        </div>
    );
}
