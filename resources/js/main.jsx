import React from "react";
import ReactDOM from "react-dom/client";
import "./bootstrap";
import { Toaster } from "sonner";
import App from "./App";

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <App />
        <Toaster />
    </React.StrictMode>
);
