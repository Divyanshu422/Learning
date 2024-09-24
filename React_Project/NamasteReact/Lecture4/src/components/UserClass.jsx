import React from "react";

//* ClassBased Component must extendes React.Component
class UserClass extends React.Component{
    // Consuming the props
    constructor(props){
        super(props); //It calls the constructor of the parent class (React.Component), allowing the component to inherit properties and behavior from React.Component.
        console.log(props);
    }
    // Render function inside the class Based componenet
    // Return the jsx
    render(){
        return (
            <div className="user-card">
                <h2>Name: {this.props.props.name}</h2>
                <h3>Location: {this.props.props.state}</h3>
                <h4>Contact: @{this.props.props.contact}</h4>
            </div>
        )

    }
}
export default UserClass;