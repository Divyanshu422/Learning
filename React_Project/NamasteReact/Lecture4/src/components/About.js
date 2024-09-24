import React from "react";
import UserClass from "./UserClass";

function About() {
  const data = {
    name: "Divyanshu",
    state: "Uttar Pradesh",
    contact: "@divyanshu422w",
  };
  return (
    <div>
      <h1>This is About us Page</h1>
      <UserClass props={data} />
    </div>
  );
}

export default About;
