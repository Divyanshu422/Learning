const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is react code")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
