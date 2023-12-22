import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PieChart = ({ data, width, height }) => {
  const options = {
    maintainAspectRatio: true, // Permet de ne pas maintenir le rapport hauteur/largeur
    responsive: true, // Permet à votre graphique de s'ajuster à la taille du conteneur parent
    plugins: {
      legend: {
        position: "bottom", // Position de la légende (top, bottom, left, right)
      },
    },
  };

  return <Pie data={data} options={options} width={width} height={height} />;
};

export default PieChart;
