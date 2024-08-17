import React from "react";
import RandomGif from "./components/RandomGif";
import NamedGif from "./components/NamedGif";

function App() {
  return (
    <div className="flex flex-col background w-screen h-screen ">
      <h1 className="w-11/12 mx-auto my-10 py-4 text-center text-3xl font-extrabold from-neutral-800 bg-[#F7F9F2] rounded-md "> Random Gifs</h1>
      <div className="flex flex-col">
        <RandomGif/>
        <NamedGif/>
      </div>
    </div>
  );
}

export default App;
