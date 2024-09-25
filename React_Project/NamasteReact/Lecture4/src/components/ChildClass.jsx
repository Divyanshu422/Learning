
import {Component} from "react";

class ChildClass extends Component{
    constructor(){
        super();
        console.log('child Constructor is called');
    }
    componentDidMount(){
        console.log('child ComponentDidMount is called');
    }

    render(){
        console.log('child Render function is called')
        return(
            <div className="user-card">
                <h2>Child Component</h2>
                <h3>Testing Purpose</h3>
            </div>
        )
    }

}

export default ChildClass;