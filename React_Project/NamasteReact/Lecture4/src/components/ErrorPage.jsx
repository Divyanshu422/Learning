import React from 'react';
import { useRouteError } from "react-router-dom";
import Header from './Header';

function ErrorPage() {
    const error = useRouteError(); // Creating the object

    console.log(error);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <Header />
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Wrong Page</h1>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Error: {error?.status}</h2>
                <h3 className="text-lg text-gray-600 mt-2">{error?.error?.message}</h3>
            </div>
        </div>
    );
}

export default ErrorPage;