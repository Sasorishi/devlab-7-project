import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const RadarChart = ({ data, width, height }) => {
  const options = {
    scales: {
      r: {
        beginAtZero: true,
      },
    },
  };

  return <Radar data={data} width={width} options={options} height={height} />;
};

export default RadarChart;
