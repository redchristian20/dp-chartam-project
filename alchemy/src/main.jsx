import React from 'react'
import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import About from "./routes/about"
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "https://redchristian20.github.io/dp-chartam-project/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "https://redchristian20.github.io/dp-chartam-project/about/",
    element: <About />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
