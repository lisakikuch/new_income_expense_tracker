import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Income() {
    const [income, setIncome] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/transactions?type=Income")
            .then((response) => response.json())
            .then((data) => setIncome(data))
            .catch((error) => console.error("Error fetching income:", error));
    }, []);

    const deleteTransaction = (id) => {
        fetch(`http://localhost:5000/transactions/${id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(() => {
                setIncome(income.filter((item) => item._id !== id));
            })
            .catch((error) => console.error("Error deleting transaction:", error));
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Income</h1>
            <p className="text-center">View all recorded income sources.</p>

            <div className="row justify-content-center mt-4">
                <div className="col-lg-8">
                    <div className="list-group">
                        {income.length === 0 ? (
                            <p className="text-center">No income recorded.</p>
                        ) : (
                            income.map((inc) => (
                                <div key={inc._id} className="list-group-item list-group-item-success d-flex justify-content-between align-items-center p-4 mb-2 rounded">
                                    <div>
                                        <h5 className="fw-bold">{inc.category} - ${inc.amount}</h5>
                                        <small className="text-muted">{new Date(inc.date).toLocaleDateString()}</small>
                                        <p>{inc.note}</p>
                                    </div>
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        style={{ width: "auto" }} // Prevents button stretching
                                        onClick={() => deleteTransaction(inc._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Income;