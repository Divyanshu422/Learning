// * Adding the react code
// *  1. for creating the element in react => we use React.createElement which consume 3 parameter React.createElement("tag_name", " ", "Content");
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from react -> Populating HTML"
);

// * 2. creating the root inside the react where react code is rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
