import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { ErrorBound } from "../components/ErrorBound";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { BookList } from "../pages/BookList";
import { BookDetails } from "../pages/BookDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorBound />        
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorBound />
    },
    {
        path: "/book",
        element: <BookList />,
        errorElement: <ErrorBound />,
        children: [
            {
                path: "/book/:id",
                element: <BookDetails />,
                errorElement: <ErrorBound />
            }
        ]
    },
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};



