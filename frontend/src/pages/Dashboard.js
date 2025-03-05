import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <div className="container text-center mt-5">
      {/* Dashboard Title */}
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-subtitle">View a summary of your income and expenses here.</p>

      {/* Cards Section */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-4">
          <div className="dashboard-card">
            <h3>Income Overview</h3>
            <p>See your total income sources and trends.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dashboard-card">
            <h3>Expenses Overview</h3>
            <p>Track where your money is going.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="dashboard-card">
            <h3>Financial Insights</h3>
            <p>Visualize your spending habits.</p>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="mt-4">
        <Link to="/login" className="btn btn-primary btn-lg get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
