import React from 'react'
import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import About from "./routes/about"
import Services from "./routes/services"
import Contact from "./routes/contact"
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/dp-chartam-project/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dp-chartam-project/about/",
    element: <About />,
  },
  {
    path: "/dp-chartam-project/services/",
    element: <Services />,
  },
  {
    path: "/dp-chartam-project/contact/",
    element: <Contact />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
