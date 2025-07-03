import React from "react";
import useAuth from "../hooks/useAuth";
import Loading from "../loading/Loading";
import { Navigate, useLocation } from "react-router";

function PrivateRoute({children}) {
  const { user, loading } = useAuth();
  const location = useLocation()
  if (loading) {
    return <Loading></Loading>;
  }
  if(!user){
    return <Navigate state={location.pathname} to="/login"></Navigate>
  }
  return children;
}

export default PrivateRoute;
