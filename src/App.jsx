import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Typography variant="h5">React MUI Template</Typography>
    </>
  );
};

export default App;
