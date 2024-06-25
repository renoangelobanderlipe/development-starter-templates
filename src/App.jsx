import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";

const App = () => {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <h1 className="text-3xl font-bold underline">
        React + Tailwind CSS Template
      </h1>
    </>
  );
};

export default App;
