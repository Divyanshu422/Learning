import React from "react";

//* ClassBased Component must extendes React.Component
class UserClass extends React.Component{
    // Render function inside the class Based componenet
    // Return the jsx
    render(){
        return (
            <div className="user-card">
                <h2>Name: Divyanshu</h2>
                <h3>Location: UttarPradesh</h3>
                <h4>Contact: @divyanshu422</h4>
            </div>
        )

    }
}
export default UserClass;