import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: 1 }, "Hello Friends"),
    React.createElement("h2", { key: 2 }, "what are u doing"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
