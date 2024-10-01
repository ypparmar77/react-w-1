import React from 'react'
import { useState } from 'react'

export default  function Handling_Forms() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
     const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
<label>Enter your name: 
      <input type="text"name="username"value={inputs.username} onChange={handleChange}/>
       </label>
       <br /><br />
      <label>Enter your password:
  <input  type="password" name="password"value={inputs.password} onChange={handleChange}/>
        </label>
        <br />
          <input type="submit" />
    </form>
  )
}