// If we are passing the Sibling we need to provide the unique key to the code

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "1" }, "Divyanshu Tyagi"),
    React.createElement("h2", { key: "2" }, "Navjot Tyagi"),
    React.createElement("h3", { key: "3" }, "Jitin Tyagi"),
    React.createElement("h4", { key: "4" }, "Narendra Tyagi"),
    React.createElement("h5", { key: "5" }, "Piyush"),
    React.createElement("h6", { key: "6" }, "Sunil Kumar"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
