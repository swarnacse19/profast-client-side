import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Coverage from "../pages/Home/coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch('./servicesCenter.json')
      }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children:[
      {
        path: "login",
        Component: login
      },
      {
        path: "register",
        Component: Register
      },
    ]
  }
]);