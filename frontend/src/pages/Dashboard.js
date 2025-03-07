import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TransactionManager from "../components/TransactionManager";

function Dashboard() {
  return (
    <div className="container text-center mt-5">
      {/* Dashboard Title */}
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-subtitle">
        View a summary of your income and expenses here.
      </p>

      {/* Cards Section */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-4">
          <Link to="/income" className="text-decoration-none">
            <div className="dashboard-card">
              <h3>Income Overview</h3>
              <p>See your total income sources.</p>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/expenses" className="text-decoration-none">
            <div className="dashboard-card">
              <h3>Expenses Overview</h3>
              <p>Track where your money is going.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Graphs and Insights Section */}
      <div className="mt-5">
        <h2>Financial Insights</h2>
        <TransactionManager /> {/* This handles charts and summaries */}
      </div>

      {/* Get Started Button */}
      <div className="mt-4">
        <Link to="/login" className="btn btn-dark btn-lg get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;