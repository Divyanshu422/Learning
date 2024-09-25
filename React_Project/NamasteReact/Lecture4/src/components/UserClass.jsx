import React from "react";
import ChildClass from './ChildClass'
//* ClassBased Component must extendes React.Component
class UserClass extends React.Component{
    // Consuming the props
    constructor(props){

        super(props); //It calls the constructor of the parent class (React.Component), allowing the component to inherit properties and behavior from React.Component.
        // console.log(props);
        console.log('Parent Constructor is called ')
         // Initialize the state
        this.state = {
            count: 0,  // State variable 'count' initialized
        };
        // console.log('the state variable', this.state)
    }
    componentDidMount(){
        console.log('Parent component is called')
    }
    // Render function inside the class Based componenet
    // Return the jsx
    render(){

        console.log('Parent render funtion is called ')
        // * Destructuring the props: ;
        const {name, state, contact} = this.props.props;
        // console.log('the contact of client is ', contact)
        // * Destructuring the stateVariable 
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>State variable count: {count}</h1>
                <button onClick={()=>{
                    //* React inbuilt provides the special function this.setState 
                    //* this.setState function can be used anywhere inside the class  
                    //* this.setState -> takes the object & inside the object we have written the logic
                    this.setState({count: this.state.count + 1})
                }}>Count Increment</button>
                <h2>Name: {name}</h2>
                <h2>Location: {state}</h2>
                <h2>Contact: {contact}</h2>
                <ChildClass />
            </div>
        )

    }
}
export default UserClass;