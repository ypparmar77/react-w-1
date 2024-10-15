import React from 'react'

export default function froms() {

    const Abc = [1,2,3,4,5,6,7,8,9];

  return (
    <div>
        <ul>
            {Abc.map((value,index) =>
              <li key={index}>{value}</li>
            )}
        </ul>
    </div>
  )
}
