import React from 'react'
import { useRouteError } from "react-router-dom";
function ErrorPage() {
    const error = useRouteError(); //* Creating the object

    console.log(error);
  return (
    <div>
      <h1> Oops Wrong Page </h1>
      <h2> {error?.status} </h2>
      <h2> {error?.error?.message} </h2>
    </div>
  )
}

export default ErrorPage
