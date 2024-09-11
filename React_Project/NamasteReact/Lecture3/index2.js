// * Multiple line jsx
import React from "react";
import ReactDOM from "react-dom/client";

/*
 * To write JSX across multiple lines, you need to enclose the code inside parentheses () for proper formatting.
 * JSX must be wrapped in a single parent element, such as a <div> or <React.Fragment> component. If there are multiple root elements, they should be wrapped inside a parent container or fragment.
 */
const jsxElement = (
  <div>
    <h1>Namaste react using JSX</h1>
    <h2>Thansks for visiting the react code</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxElement);
