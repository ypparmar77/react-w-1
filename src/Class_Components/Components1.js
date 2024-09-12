import React , {Component}  from 'react';
import Cls_com2  from './Components2.js';


class Cls_com1 extends Component{
    
    constructor(){
        super();

        this.state = {
            Number : 0
        };

    }

    abc = () =>{
        this.setState({
            Number : this.state.Number + 1
        })
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    render(){
        return(
            <>
            <h3>Number : {this.state.Number} </h3>
            <p>this is a apple</p>
            <button onClick={() => this.abc()}>subit</button>
            <Cls_com2  count = {this.state.Number} />
            </>  
        );
    }
}


export default Cls_com1;