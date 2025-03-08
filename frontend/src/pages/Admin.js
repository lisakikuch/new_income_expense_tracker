import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import TransactionDetails from "../pages/TransactionDetailsPage";

const Admin = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Admin Panel</h1>
      <p className="text-center">Manage all transactions here.</p>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No transactions found.
                </td>
              </tr>
            ) : (
              transactions.map((txn) => (
                <tr key={txn._id}>
                  <td>{txn.type}</td>
                  <td>${txn.amount}</td>
                  <td>{txn.category}</td>
                  <td>{new Date(txn.date).toLocaleDateString()}</td>
                  <td>
                    {/* Admin can click "Edit" to go to TransactionDetailsPage */}
                    <Link
                      to={`/admin/transactions/${txn._id}`}
                      className="btn btn-warning btn-sm"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Route for Transaction Details Page */}
      <Routes>
        <Route path="/transactions/:id" element={<TransactionDetails />} />
      </Routes>
    </div>
  );
};

export default Admin;
