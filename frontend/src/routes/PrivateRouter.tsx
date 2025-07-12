// @ts-nocheck
import React, { Children, useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login" state={location?.pathname}></Navigate>
    </div>
  );
};

export default PrivateRouter;
