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
import PaymentHistory from "../pages/dashBoard/paymentHistory/PaymentHistory";
import TrackParcel from "../pages/dashBoard/TrackParcel/TrackParcel";
import BeARider from "../pages/dashBoard/BeARider/BeARider";
import PendingRiders from "../pages/dashBoard/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/dashBoard/ActiveRiders/ActiveRiders";
import Forbidden from "../pages/Forbidden";
import MakeAdmin from "../pages/dashBoard/MakeAdmin/MakeAdmin";
import AdminRoute from "../routes/AdminRoutes";
import AssignRider from "../pages/dashBoard/AssignRiders/AssignRider";

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
        path: 'forbidden',
        Component: Forbidden
      },
      {
        path: "parcel",
        element: <PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute>,
        loader: () => fetch('./servicesCenter.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "beARider",
        element: <PrivateRoute><BeARider></BeARider></PrivateRoute>,
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
      {
        path: "paymentHistory",
        Component: PaymentHistory
      },
      {
        path: "track",
        Component: TrackParcel
      },
      {
        path: 'assign-rider',
        element: <AdminRoute><AssignRider></AssignRider></AdminRoute>
      },
      {
        path: "active-riders",
        Component: ActiveRiders
      },
      {
        path: "pending-riders",
        Component: PendingRiders
      },
      {
        path: 'makeAdmin',
        element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
      }
    ]
  }
]);