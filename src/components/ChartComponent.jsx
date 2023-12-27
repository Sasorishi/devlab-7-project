import React from "react";
import BarChart from "./chartComponents/BarChartComponent";
import LineChart from "./chartComponents/LineChartComponent";
import PieChart from "./chartComponents/PieChartComponent";
import RadarChart from "./chartComponents/RadarChartComponent";
import ScatterChart from "./chartComponents/ScatterChartComponent";
import StackedLineChart from "./chartComponents/StackedLineChartComponent";
import {
  barChartData,
  lineChartData,
  stackedLineChartData,
  pieChartData,
  radarChartData,
  scatterChartData,
} from "./DataChartComponent";

const ChartComponent = ({
  type,
  title,
  width,
  height,
  dataset,
  numberDataset,
  field,
  field_1,
  field_2,
  labelValue,
}) => {
  let parsedDataset;
  let chartComponent;

  if (typeof dataset === "string") {
    try {
      parsedDataset = JSON.parse(dataset);
    } catch (error) {
      console.error("Erreur de parsing JSON :", error.message);

      return (
        <div className="w-full max-w-md mx-auto p-6 bg-accent border border-gray-200 rounded-lg shadow">
          <p>Unable to parse JSON dataset.</p>
        </div>
      );
    }
  } else if (Array.isArray(dataset)) {
    parsedDataset = dataset;
  } else {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow">
        <p>Dataset is not a valid JSON string or array.</p>
      </div>
    );
  }

  switch (type) {
    case "bar":
      chartComponent = (
        <BarChart
          data={barChartData(
            numberDataset,
            parsedDataset,
            field,
            field_1,
            field_2,
            labelValue
          )}
          width={width}
          height={height}
        />
      );
      break;
    case "line":
      chartComponent = (
        <LineChart
          data={pieChartData(numberDataset, parsedDataset, field, labelValue)}
          width={width}
          height={height}
        />
      );
      break;
    case "pie":
      chartComponent = (
        <PieChart
          data={pieChartData(numberDataset, parsedDataset, field)}
          width={width}
          height={height}
        />
      );
      break;
    case "radar":
      chartComponent = (
        <RadarChart data={radarChartData} width={width} height={height} />
      );
      break;
    case "scatter":
      chartComponent = (
        <ScatterChart data={scatterChartData} width={width} height={height} />
      );
      break;
    case "stackedLine":
      chartComponent = (
        <StackedLineChart
          data={stackedLineChartData}
          width={width}
          height={height}
        />
      );
      break;
    default:
      chartComponent = null; // ou un composant par défaut si le type n'est pas reconnu
  }

  return (
      <>
      <div className="mx-auto">
        <h5 className="mb-10 text-center font-bold tracking-tight text-gray-900">
          {title ? title : "Aucun titre"}
        </h5>
        {chartComponent}
      </div>
    </>
  );
};

export default ChartComponent;
