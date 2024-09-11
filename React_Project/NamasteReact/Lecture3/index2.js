// * Multiple line jsx
import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
  <div>
    <h1>this is the title component</h1>
  </div>
);
//! React functional component: it is nothing but a function which return the JSX
const Heading = () => (
  <div>
    <TitleComponent />
    <h1> This is functional component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
