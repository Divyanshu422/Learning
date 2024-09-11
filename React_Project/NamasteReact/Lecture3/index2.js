/*
 * In this index2.js file we will be writing the jsx -> which is nothing but html inside the JavaScript
 */
import React from "react";
import ReactDOM from "react-dom/client";

// * Coding the react code using the jsx
const jsxElement = <h1>Namaste react using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxElement);
