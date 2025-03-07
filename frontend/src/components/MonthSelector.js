import React from "react";

const MonthSelector = ({ month, onChange }) => (
    
  <label htmlFor="month" style={{ fontWeight: "bold", marginRight: "10px" }}>
    Select Month:
    <select
      name="month"
      id="month"
      value={month}
      onChange={(e) => onChange(e.target.value)}
      style={{
        marginLeft: "10px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    >
      <option value="">All</option>
      {[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ].map((m) => (
        <option key={m} value={m}>
          {m}
        </option>
      ))}
    </select>
  </label>
);

export default MonthSelector;