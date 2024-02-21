import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  console.log(accessToken);

  if(!accessToken || accessToken === 'undefined') {
    return <Navigate to="/"/>
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoutes;
