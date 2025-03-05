import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Expenses() {
    const [expenses, setExpenses] = useState([]);

    // Fetch Expenses from the Database
    useEffect(() => {
        fetch("http://localhost:5000/transactions?type=Expense")
            .then((response) => response.json())
            .then((data) => setExpenses(data))
            .catch((error) => console.error("Error fetching expenses:", error));
    }, []);

    // Function to Delete an Expense
    const deleteTransaction = async (id) => {
        if (!window.confirm("Are you sure you want to delete this expense?")) return;

        try {
            const response = await fetch(`http://localhost:5000/transactions/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setExpenses((prevExpenses) => prevExpenses.filter(expense => expense._id !== id));
            } else {
                console.error("Failed to delete expense");
            }
        } catch (error) {
            console.error("Error deleting transaction:", error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Expenses</h1>
            <p className="text-center">View all recorded expenses.</p>

            <div className="row justify-content-center mt-4">
                <div className="col-lg-8">
                    <div className="list-group">
                        {expenses.length === 0 ? (
                            <p className="text-center">No expenses recorded.</p>
                        ) : (
                            expenses.map((expense) => (
                                <div key={expense._id} className="list-group-item list-group-item-danger d-flex flex-column text-start p-4 mb-2 rounded">
                                    <h5 className="fw-bold">{expense.category} - ${expense.amount}</h5>
                                    <small className="text-muted">{new Date(expense.date).toLocaleDateString()}</small>
                                    <p>{expense.note}</p>
                                    <button className="btn btn-danger btn-sm align-self-end" onClick={() => deleteTransaction(expense._id)}>Delete</button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expenses;