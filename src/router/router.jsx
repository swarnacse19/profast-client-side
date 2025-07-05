import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Coverage from "../pages/Home/coverage/Coverage";
import PrivateRoute from "../routes/PrivateRoute"
import SendParcel from "../pages/sendparcel/SendParcel";
import Loading from "../loading/Loading";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcel from "../pages/dashBoard/MyParcel";
import Payment from "../pages/dashBoard/payment/Payment";

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
        loader: () => fetch('./servicesCenter.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "parcel",
        element: <PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute>,
        loader: () => fetch('./servicesCenter.json'),
        hydrateFallbackElement: <Loading></Loading>
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
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: 'myParcels',
        Component: MyParcel
      },
      {
        path: "payment/:parcelId",
        Component: Payment
      },
    ]
  }
]);