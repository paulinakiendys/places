import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./routes/Layout";
import NotFound from "./routes/NotFound";
import About from "./routes/About";
import Index from "./routes/Index";
import Login from "./routes/Login";
import App from "./routes/App";
import Cities from "./routes/Cities";
import Countries from "./routes/Countries";
import Form from "./routes/Form";
import City from "./routes/City";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "app",
        element: <App />,
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Cities />,
          },
          { path: "city", element: <Cities /> },
          { path: "city/:cityId", element: <City /> },
          { path: "country", element: <Countries /> },
          { path: "form", element: <Form /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
