import React from "react";
import Login from "./login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./sidebar";
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
function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/button" element={<Button />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/color" element={<UtilitiesColor />} />
          <Route path="/borders" element={<UtilitiesBorder />} />
          <Route path="/animations" element={<UtilitiesAnimation />} />
          <Route path="/other" element={<Other />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/blank" element={<Blank />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
