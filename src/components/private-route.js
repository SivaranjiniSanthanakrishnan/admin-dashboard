import React from "react";
import { Route, Navigate } from "react-router-dom";
import SideBar from "./sidebar";

function PrivateRoute({ children }) {
  const auth = true;
  return (
    <>
      <div id="wrapper">
        <SideBar />
        {auth ? children : <Navigate to="/login" />}
      </div>
    </>
  );
}

export default PrivateRoute;
