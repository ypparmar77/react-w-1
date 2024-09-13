import React, { Component } from 'react'
import Fun3 from './fun3.js'

export default class Fun2 extends Component {

    constructor(props){
        super()

        this.state = {
             but : props.but
        }
    }

  render() {
    return (
        <>
              <div>fun2 {this.props.but}</div>
<Fun3  vv = {this.props.but}/>
        </>
    )
  }
}

