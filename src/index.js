import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./layout/layout.css";
import Home from "./layout/Home";
import Signup from "./layout/Signup";
import ListBuilding from "./layout/ListBuilding";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/listbuilding" element={<ListBuilding />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
