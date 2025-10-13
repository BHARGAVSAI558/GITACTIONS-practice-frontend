import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    color: "white",
    padding: "10px 20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 10px",
    fontWeight: "bold",
  };

  const titleStyle = {
    fontSize: "20px",
  };

  return (
    <nav style={navStyle}>
      <div style={titleStyle}>🏍️ Bike Management</div>
      <div>
        <Link to="/" style={linkStyle}>
          Dashboard
        </Link>
        <Link to="/bike-form" style={linkStyle}>
          Add Bike
        </Link>
        <Link to="/brands" style={linkStyle}>
          Brands
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
