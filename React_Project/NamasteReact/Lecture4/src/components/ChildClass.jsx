import { Component } from "react";

class ChildClass extends Component {
    constructor() {
        super();
        // console.log('Child Constructor is called');
    }

    componentDidMount() {
        // console.log('Child ComponentDidMount is called');
    }

    componentDidUpdate() {
        // console.log('Child component Did update called');
    }

    render() {
        // console.log('Child Render function is called');
        return (
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Child Component</h2>
                <h3 className="text-lg text-gray-600">Testing Purpose</h3>
            </div>
        );
    }
}

export default ChildClass;
