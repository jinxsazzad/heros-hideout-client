import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center h-screen">
          {/* loading design before login */}
          <progress className="progress w-56"></progress>
        </div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
