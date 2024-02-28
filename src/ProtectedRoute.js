import React from "react";
import { Navigate, Outlet } from "react-router-dom";


//Always create a wrapper for authenication purpose 
const ProtectedRoute = () => {
  const isUserAuthenticated = true;
  return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />
};

export default ProtectedRoute;
