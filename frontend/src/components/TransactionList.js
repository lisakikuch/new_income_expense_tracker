import React from "react";
import PieChart from "../components/PieChart";
import StatusTable from "../components/StatusTable";
import "../styles/TransactionManager.css"; // Import CSS for consistent styling

const TransactionList = ({ transactions, loading, error, selectedMonth }) => {
    if (loading) return <p>Loading transactions...</p>;
    if (error) return <p>Error loading transactions.</p>;

    const incomeTransactions = transactions.filter(txn => txn.type === "Income");
    const expenseTransactions = transactions.filter(txn => txn.type === "Expense");

    return (
        <div className="transaction-list">
            {/* Expenses Section */}
            <div>
                <h3>Expenses</h3>
                {expenseTransactions.length > 0 ? (
                    <>
                        <ul>
                            {expenseTransactions.map(txn => (
                                <li key={txn._id}>
                                    {txn.category} - ${txn.amount} <br />
                                    {new Date(txn.date).toLocaleDateString()}
                                </li>
                            ))}
                        </ul>
                        {selectedMonth === "" && <div className="chart-container"><PieChart data={expenseTransactions} /></div>} 
                        <StatusTable data={expenseTransactions} />
                    </>
                ) : (
                    <p className="empty-message">No expenses recorded.</p>
                )}
            </div>

            {/* Income Section */}
            <div>
                <h3>Income</h3>
                {incomeTransactions.length > 0 ? (
                    <>
                        <ul>
                            {incomeTransactions.map(txn => (
                                <li key={txn._id}>
                                    {txn.category} - ${txn.amount} <br />
                                    {new Date(txn.date).toLocaleDateString()}
                                </li>
                            ))}
                        </ul>
                        {selectedMonth === "" && <div className="chart-container"><PieChart data={incomeTransactions} /></div>} 
                        <StatusTable data={incomeTransactions} />
                    </>
                ) : (
                    <p className="empty-message">No income recorded.</p>
                )}
            </div>
        </div>
    );
};

export default TransactionList;
