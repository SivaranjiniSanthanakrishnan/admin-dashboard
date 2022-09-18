import logo from "./logo.svg";
import "./App.css";
import "./css/sb-admin-2.min.css";
import "./vendor/fontawesome-free/css/all.min.css";
import SideBar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import Button from "./components/button";
import Cards from "./components/cards";
import UtilitiesColor from "./components/utilities-color";
import UtilitiesBorder from "./components/utilities-border";
import UtilitiesAnimation from "./components/utilities-animation";
import Other from "./components/other";
import Login from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/button" element={<Button />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/color" element={<UtilitiesColor />} />
          <Route path="/borders" element={<UtilitiesBorder />} />
          <Route path="/animations" element={<UtilitiesAnimation />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
