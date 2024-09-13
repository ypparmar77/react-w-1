import React, { Component } from 'react'
import Fun4 from './fun4.js';

export default class Fun3 extends Component {

    constructor(props){
        super()
    }
    
  render() {
    return (
        <>
              <div>fun3 {this.props.vv}</div>
              <Fun4 op ={this.props.vv} />
        </>
    )
  }
}
