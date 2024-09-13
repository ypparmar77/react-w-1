import React, { Component } from 'react'

export class Fun4 extends Component {

    constructor(props){
        super()
    }

  render() {
    return (
      <>
      <h1>this is a number : {this.props.op}</h1>
      </>
    )
  }
}

export default Fun4;