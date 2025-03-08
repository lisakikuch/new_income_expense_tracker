import React from "react";
import BarChart from "./BarChart";

const MonthlySummary = ({ monthlyTotals }) => {
  const formattedData = monthlyTotals.map(({ month, income, expense }) => ({
    month: month === "Unknown" ? "All" : month,
    income: parseFloat(income).toFixed(2),
    expense: parseFloat(expense).toFixed(2),
    difference: (income - expense).toFixed(2),
  }));

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
        Monthly Summaries
      </h3>

      {formattedData.length > 0 ? (
        <table
          className="table table-sm table-bordered"
          style={{ fontSize: "14px", width: "100%", margin: "10px auto" }}
        >
          <thead className="table-light">
            <tr>
              <th>Month</th>
              <th>Expense</th>
              <th>Income</th>
              <th>Difference</th>
            </tr>
          </thead>
          <tbody>
            {formattedData.map(({ month, expense, income, difference }) => (
              <tr key={month}>
                <td>{month}</td>
                <td>${expense}</td>
                <td>${income}</td>
                <td>${difference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center", fontWeight: "bold", color: "#666" }}>
          No data available
        </p>
      )}

      <div style={{ marginTop: "20px" }}>
        <BarChart monthlyTotals={formattedData} />
      </div>
    </div>
  );
};

export default MonthlySummary;