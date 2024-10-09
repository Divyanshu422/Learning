import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const App = () => {
  //* creating the Browser Configuration for our application using createBrowserRouter

  const Grocery = lazy(() => import("./components/Grocery_Component/Grocery"));

  // const Grocery = React.lazy(() =>import('./components/Grocery_Component/Grocery'));

  let appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", Component: Body },
        { path: "/about", element: <About /> },
        { path: "/contactus", Component: ContactUs },
        { path: "/restaurant/:resId", Component: RestaurantMenu },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<div>Page is loading</div>}>
              <Grocery />
            </Suspense>
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    // * Consuming the configuration and providing to the application
    <RouterProvider router={appRouter} />
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
