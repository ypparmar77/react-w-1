import React, { Component } from "react";
import ThreeClass from "./threeclass.js";

class TwoClass extends Component {
  render() {
    return (    
      <>
        <div><h1>Class Component 2</h1></div>
        <ThreeClass /> 
      </>
    );
  }
}

export default TwoClass;
