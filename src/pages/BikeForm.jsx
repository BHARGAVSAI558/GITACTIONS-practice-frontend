import React, { useState } from "react";

const BikeForm = () => {
  const [bike, setBike] = useState({ name: "", brand: "", price: "" });

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "40px auto",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const handleChange = (e) => {
    setBike({ ...bike, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bike Added: ${bike.name} (${bike.brand}) - ₹${bike.price}`);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Add New Bike</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          name="name"
          placeholder="Bike Name"
          value={bike.name}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          name="brand"
          placeholder="Brand"
          value={bike.brand}
          onChange={handleChange}
        />
        <input
          style={inputStyle}
          name="price"
          placeholder="Price"
          value={bike.price}
          onChange={handleChange}
        />
        <button style={buttonStyle} type="submit">
          Add Bike
        </button>
      </form>
    </div>
  );
};

export default BikeForm;
