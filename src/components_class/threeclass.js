import React, { Component } from "react";
import FourClass from "./fourclass.js"; 

class ThreeClass extends Component {
  render() {
    return (    
      <>
        <div><h1>Class Component 3</h1></div>
        <FourClass />  
      </>
    );
  }
}

export default ThreeClass;

