import React from "react";
import { Bubble } from "react-chartjs-2";

const BubbleChart = ({ data, width, height }) => {
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        type: "linear", // ou 'category' si vos données sont catégorielles
        position: "bottom",
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bubble data={data} options={options} width={width} height={height} />;
};

export default BubbleChart;
