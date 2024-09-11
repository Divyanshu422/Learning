// * Multiple line jsx
import React from "react";
import ReactDOM from "react-dom/client";

const data = 100;

//* jsx Element adding in the component using the curly bracket
const jsxElement = (
  <h1>
    {" "}
    React element which will be converted into the react.createElement by babel
  </h1>
);
const TitleComponent = () => (
  <div>
    <h1>this is the title component</h1>
    {/* Injecting the js inside the jsx -> using the curly brackets */}
    <h2>{data}</h2>
    <p>{jsxElement}</p>
    {console.log("js code inside the jsx")}
  </div>
);

const Heading = () => (
  <div>
    <TitleComponent />
    <h1> This is functional component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
