import React from "react";
import PieChart from "../components/PieChart";
import StatusTable from "../components/StatusTable";

const TransactionList = ({ transactions, loading, error, selectedMonth }) => {
  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>Error loading transactions.</p>;

  const incomeTransactions = transactions.filter(
    (txn) => txn.type === "Income"
  );
  const expenseTransactions = transactions.filter(
    (txn) => txn.type === "Expense"
  );

  return (
    <div>
      <h2>Transactions</h2>

      {/* Expenses Section */}
      <div>
        <h3>Expenses</h3>
        {expenseTransactions.length > 0 ? (
          <>
            <ul>
              {expenseTransactions.map((txn) => (
                <li key={txn._id}>
                  {txn.category} - ${txn.amount} <br />
                  {new Date(txn.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
            {selectedMonth === "" && <PieChart data={expenseTransactions} />}
            <StatusTable data={expenseTransactions} />
          </>
        ) : (
          <p>No expenses recorded.</p>
        )}
      </div>

      {/* Income Section */}
      <div>
        <h3>Income</h3>
        {incomeTransactions.length > 0 ? (
          <>
            <ul>
              {incomeTransactions.map((txn) => (
                <li key={txn._id}>
                  {txn.category} - ${txn.amount} <br />
                  {new Date(txn.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
            {selectedMonth === "" && <PieChart data={incomeTransactions} />}
            <StatusTable data={incomeTransactions} />
          </>
        ) : (
          <p>No income recorded.</p>
        )}
      </div>
    </div>
  );
};

export default TransactionList;