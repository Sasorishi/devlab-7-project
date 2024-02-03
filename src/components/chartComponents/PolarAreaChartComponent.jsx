import React from "react";
import { PolarArea } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PolarAreaChart = ({ data, width, height }) => {
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 5, // Ajustez en fonction de la plage des valeurs que vous attribuez
      },
    },
  };

  return (
    <PolarArea data={data} options={options} width={width} height={height} />
  );
};

export default PolarAreaChart;
