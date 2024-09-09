// Creating the element of react


    const heading = React.createElement(
    "h1",
    { className: "divyanshu", id: "tyagi" },
    "This is react element"
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);
