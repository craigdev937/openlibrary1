import React from "react";
import ReactDOM from "react-dom/client";
import { BookProvider } from "./context/BookCTX";

import(/* webpackChunkName: "app" */ "./app/App")
.then(({ App }) => {
    ReactDOM
    .createRoot(document.getElementById("root"))
    .render(
        <BookProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BookProvider>
    )
});



