import React from "react";
import { useRouteError, Link } from "react-router-dom";

export const ErrorBound = () => {
    const error = useRouteError();

    return (
        <React.Fragment>
            <h1>That Page doesn't exist! 😟</h1>
            <pre>{error.message}</pre>
            <Link to="/"><button>Home</button></Link>
        </React.Fragment>
    );
};



