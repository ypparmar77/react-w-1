import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import './style.css';

export default function Nevbar() {
  return (
     <>
     <div>
     <ul className='nav bg-dark p-2 '>
      <li>
      <Link className='ms-5' id='tage' to="/">About</Link>
      </li>
      <li>
      <Link className='ms-5' id='tage'  to="Help">Help</Link>
      </li>
      <li>
      <Link className='ms-5' id='tage'  to="/Home">Home</Link>
      </li>
      <li>
        <Link className='ms-5' id='tage' to="/Email">Email</Link>
      </li>
      <li>
        <Link className='ms-5' id='tage' to="/Api_work">Api_work</Link>
      </li>
     </ul>
     </div>
     <Outlet/>
     </>
  )
}
