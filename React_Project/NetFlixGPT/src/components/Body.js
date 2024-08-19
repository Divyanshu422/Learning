import React from 'react'
import LoginPage from './LoginPage/LoginPage';
import BrowsePage from './Browse/BrowsePage';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
const Body = () => {
    //Create the routes:
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage/>
        },
        {
            path: '/browse',
            element: <BrowsePage/>
        }
    ]);
  return (
    <div>
      {/* <LoginPage/>
      <BrowsePage/> */}
      {/* Providing the Router Provider to the application */}
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
