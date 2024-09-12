import React , {Component}  from 'react';
import Cls_com3 from './Components3.js';


class Cls_com2 extends Component{

    constructor(props){
        super()
            this.state = {
                count : props.count
        }
    }

    render(){
        return(
          <>
            <h3>Count : {this.props.count}</h3>
            <Cls_com3 count = {this.props.count}  />
          </>
        );
    }
}

export default Cls_com2;