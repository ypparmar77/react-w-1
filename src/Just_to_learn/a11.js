import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

export default function A11() {

  let [email_work , setemail_work]=useState({email : "" , password : ""});
  let [text       , settext      ]=useState({});
  
  return (
    <div>
      <form className='p-3'>
        <h1>form work</h1>
        <hr />
        <label htmlFor="Email">Email : </label>
        <input value={email_work.email} onChange={(e) => e.target.value}  type="email" name="email" id="email"/>
        <label htmlFor="Password">Password : </label>
        <input value={email_work.password}  type="password" name="password" id="password"/><br /><br />
        <input className='btn btn-danger' type="submit" value="submit" />
      </form>

    </div>
  )
}
