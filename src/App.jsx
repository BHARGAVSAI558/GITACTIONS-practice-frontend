import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import BikeForm from "./pages/BikeForm";
import BrandPage from "./pages/BrandPage";
import Login from "./pages/Login";

const App = () => {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f6f8",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  return (
    <div style={appStyle}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bike-form" element={<BikeForm />} />
          <Route path="/brands" element={<BrandPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
