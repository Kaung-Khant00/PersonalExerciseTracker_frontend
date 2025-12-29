import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from "./Pages/Auth/Layouts/AuthLayout";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Dashboard";
import DashboardLayout from "./Pages/DashboardLayout";
import Activities from "./Pages/Activities/Activities";
import Add_Activities from "./Pages/Activities/Add_Activities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "activities",
        children: [
          { index: true, element: <Activities /> },
          { path: "add", element: <Add_Activities /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

/* 
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "activities",
        children: [
          { index: true, element: <Activities /> },
          { path: "add", element: <Add_Activities /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

*/

const App = () => <RouterProvider router={router} />;

export default App;
