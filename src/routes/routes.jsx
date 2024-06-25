import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <>Login Page</>,
    errorElement: <>404 Not Found</>,
  },
  {
    path: "*",
    element: <>404 Not Found</>,
  },
]);
