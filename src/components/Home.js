import React from "react";
import Login from "./login";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Dashboard from "./dashboard";
import Button from "./button";
import Cards from "./cards";
import UtilitiesColor from "./utilities-color";
import UtilitiesBorder from "./utilities-border";
import UtilitiesAnimation from "./utilities-animation";
import Other from "./other";
import Register from "./register";
import ForgotPassword from "./forget-password";
import ErrorPage from "./404";
import Blank from "./blank";
import Chart from "./chart";
import Table from "./table";
import PrivateRoute from "./private-route";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/button"
            element={
              <PrivateRoute>
                <Button />
              </PrivateRoute>
            }
          />
          <Route
            path="/cards"
            element={
              <PrivateRoute>
                <Cards />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/color"
            element={
              <PrivateRoute>
                <UtilitiesColor />
              </PrivateRoute>
            }
          />
          <Route
            path="/borders"
            element={
              <PrivateRoute>
                <UtilitiesBorder />
              </PrivateRoute>
            }
          />
          <Route
            path="/animations"
            element={
              <PrivateRoute>
                <UtilitiesAnimation />
              </PrivateRoute>
            }
          />
          <Route
            path="/other"
            element={
              <PrivateRoute>
                <Other />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          />
          <Route
            path="/forgotpassword"
            element={
              <PrivateRoute>
                <ForgotPassword />
              </PrivateRoute>
            }
          />
          <Route
            path="/errorpage"
            element={
              <PrivateRoute>
                <ErrorPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/blank"
            element={
              <PrivateRoute>
                <Blank />
              </PrivateRoute>
            }
          />
          <Route
            path="/chart"
            element={
              <PrivateRoute>
                <Chart />
              </PrivateRoute>
            }
          />
          <Route
            path="/table"
            element={
              <PrivateRoute>
                <Table />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
