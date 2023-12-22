import React from "react";
import { Scatter } from "react-chartjs-2";

const ScatterChart = ({ data, width, height }) => {
  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "linear",
        position: "left",
      },
    },
  };

  return (
    <Scatter data={data} options={options} width={width} height={height} />
  );
};

export default ScatterChart;
