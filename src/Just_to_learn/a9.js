import React from 'react'

export default function A9() {

    const aery = [1,2,5,9,6,4,8];

  return (
    <div>

        <ul>
            {aery.map((index) => <li key={index}>{index}</li>)}
        </ul>
    </div>
  )
}
