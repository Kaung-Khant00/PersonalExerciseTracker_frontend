import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Pages/Auth/Layouts/AuthLayout";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
