import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import the layouts
import RootLayout from "./layouts/RootLayout";
import Home from "./views/Home";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
