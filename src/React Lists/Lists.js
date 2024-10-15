import React from 'react'

export default function Lists() {

    const list_tag = ["Apple","Mongo","Fruit","Banana"]


  return (
    <div>

        <ul>
            {list_tag.map((value,index) => 
            <li key={index}>{value + index} <hr /></li>
            )}
            
        </ul>
        
    </div>
  )
}
