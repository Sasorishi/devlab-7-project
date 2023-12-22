import React from "react";
import BarChart from "./chartComponents/BarChartComponent";
import LineChart from "./chartComponents/LineChartComponent";
import PieChart from "./chartComponents/PieChartComponent";
import RadarChart from "./chartComponents/RadarChartComponent";
import ScatterChart from "./chartComponents/ScatterChartComponent";
import StackedLineChart from "./chartComponents/StackedLineChartComponent";
import {
  barChartData,
  stackedLineChartData,
  pieChartData,
  radarChartData,
  scatterChartData,
} from "./DataChartComponent";

const ChartComponent = ({ title, width, height }) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-accent border border-gray-200 rounded-lg shadow">
      <h5 className="mb-10 text-center font-bold tracking-tight text-gray-900">
        {title ? title : "Aucun titre"}
      </h5>
      <BarChart data={barChartData} width={width} height={height} />
      <LineChart data={stackedLineChartData} width={width} height={height} />
      <PieChart data={pieChartData} width={width} height={height} />
      <RadarChart data={radarChartData} width={width} height={height} />
      <ScatterChart data={scatterChartData} width={width} height={height} />
      <StackedLineChart
        data={stackedLineChartData}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ChartComponent;
