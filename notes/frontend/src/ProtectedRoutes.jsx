import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken || accessToken === "undefined") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
