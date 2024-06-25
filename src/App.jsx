import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { Typography } from "@material-tailwind/react";

const App = () => {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Typography variant="h5">React Material Tailwind Template</Typography>
    </>
  );
};

export default App;
