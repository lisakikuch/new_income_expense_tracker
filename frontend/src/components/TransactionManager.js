import React, { useState, useEffect, useCallback } from "react";
import TransactionList from "./TransactionList";
import MonthlySummary from "./MonthlySummaries";
import MonthSelector from "../components/MonthSelector";
import "../styles/TransactionManager.css";

const TransactionManager = () => {
  const [month, setMonth] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [monthlyTotals, setMonthlyTotals] = useState([]);

  const updateTransactions = useCallback((data) => {
    if (!Array.isArray(data)) {
      console.error("Invalid transaction data received:", data);
      setTransactions([]);
      setMonthlyTotals([]);
      return;
    }

    setTransactions(data);

    if (data.length === 0) {
      setMonthlyTotals([]);
      return;
    }

    const summary = data.reduce((acc, txn) => {
      const txnMonth = txn.date
        ? new Date(txn.date).toLocaleString("default", { month: "short" })
        : "Unknown";
      if (!acc[txnMonth]) {
        acc[txnMonth] = { month: txnMonth, income: 0, expense: 0 };
      }
      if (txn.type === "Income") {
        acc[txnMonth].income += txn.amount;
      } else {
        acc[txnMonth].expense += txn.amount;
      }
      return acc;
    }, {});

    setMonthlyTotals(Object.values(summary));
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/transactions${month ? `?month=${month}` : ""}`
        );
        const data = await response.json();
        updateTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setTransactions([]);
        setMonthlyTotals([]);
      }
    };

    fetchTransactions();
  }, [month, updateTransactions]);

  return (
    <div className="transaction-container">
      <h2 className="page-title">Financial Insights</h2>
      <div className="selector-container">
        <MonthSelector month={month} onChange={setMonth} />
      </div>
      <TransactionList
        transactions={transactions}
        loading={false}
        error={null}
        selectedMonth={month}
      />
      <MonthlySummary monthlyTotals={monthlyTotals} />
    </div>
  );
};

export default TransactionManager;
