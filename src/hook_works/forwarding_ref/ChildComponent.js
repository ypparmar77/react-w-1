import { forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
    return <input ref={ref} placeholder={props.props}  />
 
});

export default ChildComponent;