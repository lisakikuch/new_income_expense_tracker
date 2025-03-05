import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import Navbar from "./components/Navbar"; 

// Import pages
import Dashboard from "./pages/Dashboard";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <div>
        {/* Use Navbar Component */}
        <Navbar />

        {/* Routes Section */}
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Auth />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 Income & Expense Tracker. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a> |
            <a href="https://github.com/lisakikuch/new_income_expense_tracker" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a> |
            <Link to="/contact">Contact Us</Link> {/* Fixes full page reload */}
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
