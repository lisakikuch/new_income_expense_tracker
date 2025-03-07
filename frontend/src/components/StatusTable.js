import React from "react";

const StatusTable = ({ data = [] }) => {
  if (data.length === 0) {
    return (
      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        No data available
      </p>
    );
  }

  return (
    <div style={{ overflowX: "auto", marginTop: "20px" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#f8f9fa",
              borderBottom: "2px solid #ddd",
            }}
          >
            <th style={{ padding: "10px", textAlign: "left" }}>Category</th>
            <th style={{ padding: "10px", textAlign: "right" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ category, amount }) => (
            <tr key={category} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px", textAlign: "left" }}>{category}</td>
              <td style={{ padding: "10px", textAlign: "right" }}>${amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatusTable;