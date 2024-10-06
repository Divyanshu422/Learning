import React from "react";
import UserClass from "./UserClass";

function About() {
  const data = {
    name: "Divyanshu",
    state: "Uttar Pradesh",
    contact: "@divyanshu422",
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">This is the About Us Page</h1>
      <UserClass props={data} />
    </div>
  );
}

export default About;