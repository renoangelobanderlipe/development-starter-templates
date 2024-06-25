import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <div>MAIN</div>
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<div>Loading...</div>}>
                <div>Page Not Found 404</div>
            </Suspense>
        ),
    },
    {
        path: "/login",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <div>Login Page</div>
            </Suspense>
        ),
    },
    {
        path: "*",
        element: (
            <>
                <>404 Not Found</>
            </>
        ),
    },
]);
