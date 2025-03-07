import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  useEffect(() => {
    console.log("PieChart Data (Raw):", data);
  }, [data]);

  // Handle missing or empty data
  const hasData = data && data.length > 0;

  const chartData = hasData
    ? {
        labels: data.map((item) => item.category || "Unknown"),
        datasets: [
          {
            data: data.map(
              (item) => parseFloat(item.percentage) || item.amount
            ),
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(201, 203, 207, 0.6)",
              "rgba(102, 255, 102, 0.6)",
            ],
            borderWidth: 1,
          },
        ],
      }
    : {
        labels: ["No Data"],
        datasets: [
          {
            data: [1],
            backgroundColor: ["rgba(255, 99, 132, 0.6)"],
          },
        ],
      };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "350px",
        height: "350px",
        margin: "20px auto",
        padding: "10px",
      }}
    >
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;