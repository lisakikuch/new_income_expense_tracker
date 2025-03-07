import React from "react";
import { Link } from "react-router-dom";

const TransactionTable = ({
  filteredTransactions,
  type,
  deleteTransaction,
}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ textAlign: "center", textTransform: "uppercase" }}>
        {type} Transactions
      </h3>
      {filteredTransactions.length > 0 ? (
        <div style={{ overflowX: "auto" }}>
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
                <th>Memo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction._id}>
                  <td>{transaction.type}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{new Date(transaction.date).toLocaleDateString()}</td>
                  <td>{transaction.note || "—"}</td>
                  <td>
                    <Link
                      to={`/admin/transactions/${transaction._id}`}
                      className="btn btn-sm btn-warning me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteTransaction(transaction._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          No {type.toLowerCase()} transactions found.
        </p>
      )}
    </div>
  );
};

export default TransactionTable;