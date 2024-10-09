import React from "react";
import ChildClass from './ChildClass';

// Class-based Component extending React.Component
class UserClass extends React.Component {
    constructor(props) {
        super(props); // Calls the constructor of the parent class
        // console.log('Parent Constructor is called ')

        // Initialize the state
        this.state = {
            userInfo: {
                name: '',
                location: '',
            },
            count: 0,
        };
    }

    async componentDidMount() {
        // console.log('Parent component is called');
        const response = await fetch('https://api.github.com/users/Divyanshu422');
        const data = await response.json();
        this.setState({ userInfo: data });
    }

    componentDidUpdate() {
        // console.log('Parent component Did update rendered');
    }

    componentWillUnmount() {
        // console.log('component will unmount was called');
    }

    // Render function inside the class-based component
    render() {
        // console.log('Parent render function is called');

        // Destructuring the props
        const { name, state, contact } = this.props.props;
        // Destructuring the state variable
        const { userInfo, count } = this.state;

        return (
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-4">
                <img 
                    src={userInfo.avatar_url || "https://via.placeholder.com/150"} 
                    alt="User Avatar" 
                    className="w-24 h-24 rounded-full mx-auto mb-4" 
                />
                <button 
                    onClick={() => this.setState({ count: count + 1 })} 
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mb-4"
                >
                    Count Increment
                </button>
                <h2 className="text-xl font-semibold">Name: {userInfo.name}</h2>
                <h2 className="text-md text-gray-600">ID: {userInfo.id}</h2>
                <h2 className="text-md text-gray-600">Contact: {contact}</h2>
                <ChildClass />
            </div>
        );
    }
}

export default UserClass;