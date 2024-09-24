import React from "react";

//* ClassBased Component must extendes React.Component
class UserClass extends React.Component{
    // Consuming the props
    constructor(props){
        super(props); //It calls the constructor of the parent class (React.Component), allowing the component to inherit properties and behavior from React.Component.
        console.log(props);

         // Initialize the state
        this.state = {
            count: 0,  // State variable 'count' initialized
            count2: 2  // State variable count2 initialized
        };
        console.log('the state variable', this.state)
    }

    // Render function inside the class Based componenet
    // Return the jsx
    render(){
        // * Destructuring the props: ;
        const {name, state, contact} = this.props.props;
        console.log('the contact of client is ', contact)
        // * Destructuring the stateVariable 
        const {count, count2} = this.state;
        return (
            <div className="user-card">
                <h1>State variable count: {count}</h1>
                <h1>2nd state variable count2: {count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {state}</h3>
                <h4>Contact: @{contact}</h4>
            </div>
        )

    }
}
export default UserClass;