import React from "react";

const Dashboard = () => {
  const containerStyle = {
    padding: "40px",
    textAlign: "center",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "10px",
    width: "60%",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div style={containerStyle}>
      <h1>🏍️ Bike Dashboard</h1>
      <div style={cardStyle}>
        <p>Welcome to the Bike Management Dashboard!</p>
        <p>Manage your bikes, add new ones, and view by brand.</p>
      </div>
    </div>
  );
};

export default Dashboard;
