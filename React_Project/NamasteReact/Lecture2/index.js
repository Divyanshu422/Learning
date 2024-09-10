const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello Friends"),
    React.createElement("h2", {}, "what are u doing"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
