import React, { Component } from "react";
import TwoClass from "./twoclass.js";  
import 'bootstrap/dist/css/bootstrap.css'; 


class OneClass extends Component {
  render() {
    return (    
      <>
        <div><h1>Class Component 1</h1></div>
        <TwoClass />  
      </>
    );
  }
}

export default OneClass;

