import React, {Component} from 'react';
import Fun2 from './fun2';

export default class Fun1 extends Component {

    constructor(){
        super()

        this.state={
            number : 0
        }
    
    }

    go = () =>{
        this.setState({
            number : this.state.number + 1
        })
    }


    render(){
        return(
            <>
            <p>number : {this.state.number}</p>
            <button onClick={() => this.go()}>Subit</button>
            <Fun2  but = {this.state.number}/>
            </>
        )
    }


}