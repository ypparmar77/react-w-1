import React from 'react'
import './Style.css'
// import styles from './yash.module.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function R_style() {

  return (
    <div className='man'>
     {/* <h1 className={styles.bigblue}>Hello Car!</h1>; */}
      <h1 className='like'><span>Y</span>ash Parmar</h1>
     {/* <h1 className={styles.op}>Yash Parmar</h1>   */}
     <div className='work bg-dark p-5'>
     <button className='btn btn-danger mx-2'>Danger button</button>
     <button type="button" className="btn btn-primary mx-2">Primary button</button>
     <button type="button" className="btn btn-secondary mx-2">Secondary button</button>
     <button type="button" className="btn btn-success mx-2">Success button</button>
     <button type="button" className="btn btn-danger mx-2">Danger button</button>
     <button type="button" className="btn btn-warning mx-2">Warning button</button>
     <button type="button" className="btn btn-info mx-2">Info button</button>
     <button type="button" className="btn btn-light mx-2">Light button</button>
     <button type="button" className="btn btn-dark mx-2">Dark button</button>
     </div>

     <div className='the_end'>
        <p className='about'>&copy; 2024 ypdeveloper6@gmail.com. All rights reserved.</p>
     </div>
    </div>
  ) 
}
