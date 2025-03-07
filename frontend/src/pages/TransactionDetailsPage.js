import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const TransactionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/transactions/${id}`
        );
        if (!response.ok) throw new Error("Transaction not found.");
        const data = await response.json();
        setTransaction(data);
      } catch (err) {
        console.error("Error fetching transaction:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTransaction();
  }, [id]);

  if (loading) return <p>Loading transaction...</p>;
  if (!transaction) return <p>No transaction found.</p>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!transaction.amount || !transaction.category) {
      alert("All required fields must be filled.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/transactions/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transaction),
      });
      if (response.ok) alert("Transaction updated successfully!");
      else alert("Failed to update transaction.");
    } catch (err) {
      console.error("Error updating transaction:", err);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this transaction?"))
      return;
    try {
      const response = await fetch(`http://localhost:5000/transactions/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Transaction deleted successfully!");
        navigate(location.state?.from || "/");
      } else {
        alert("Failed to delete transaction.");
      }
    } catch (err) {
      console.error("Error deleting transaction:", err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Transaction Details</h2>
      <form onSubmit={handleEdit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Type *
          </label>
          <select
            className="form-select"
            name="type"
            value={transaction.type}
            onChange={handleChange}
          >
            <option value="Expense">Expense</option>
            <option value="Income">Income</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount *
          </label>
          <input
            type="number"
            className="form-control"
            value={transaction.amount}
            name="amount"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category *
          </label>
          <input
            type="text"
            className="form-control"
            value={transaction.category}
            name="category"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date *
          </label>
          <input
            type="date"
            className="form-control"
            value={transaction.date.split("T")[0]}
            name="date"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="note" className="form-label">
            Memo
          </label>
          <input
            type="text"
            className="form-control"
            value={transaction.note || ""}
            name="note"
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>

      <button
        className="btn btn-secondary mt-3"
        onClick={() => navigate(location.state?.from || "/")}
      >
        Back
      </button>
    </div>
  );
};

export default TransactionDetails;