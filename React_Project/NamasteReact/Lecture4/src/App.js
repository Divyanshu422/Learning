import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const App = () => {
  //* creating the Browser Configuration for our application using createBrowserRouter

  let appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
    {
      path: "/about",
      Component: About,
    }
  ]);
  return (
    // * Consuming the configuration and providing to the application
    <RouterProvider router={appRouter}/>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
