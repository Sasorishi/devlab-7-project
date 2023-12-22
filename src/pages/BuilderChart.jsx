import React, { useState } from "react";
import ColorPicker from "../components/ColorPickerComponent";
import Chart from "../components/ChartComponent";

function BuilderChart() {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [title, setTitle] = useState("");

  // Pie Data
  // const data = {
  //   labels: ["Label 1", "Label 2", "Label 3"],
  //   datasets: [
  //     {
  //       data: [30, 50, 20],
  //       backgroundColor: [
  //         "rgba(75, 192, 192, 1)",
  //         "rgba(255, 99, 132, 0.2)",
  //         "green",
  //       ],
  //     },
  //   ],
  // };

  // Bar Data
  // const data = {
  //   labels: ["Label 1", "Label 2", "Label 3"],
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: [10, 20, 30],
  //       borderColor: "rgba(75, 192, 192, 1)",
  //       backgroundColor: "rgba(75, 192, 192, 0.2)",
  //       stack: "stack1",
  //     },
  //     {
  //       label: "Dataset 2",
  //       data: [5, 15, 25],
  //       borderColor: "rgba(255, 99, 132, 1)",
  //       backgroundColor: "rgba(255, 99, 132, 0.2)",
  //       stack: "stack1",
  //     },
  //   ],
  // };

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  return (
    <div>
      <h1>Chart Builder</h1>
      <ColorPicker onColorChange={handleColorChange} />
      <div>
        <label className="mr-2" htmlFor="width">
          Titre:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Écrire un titre de graphe"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="mr-2" htmlFor="width">
          Longueur:
        </label>
        <input
          type="number"
          id="width"
          value={width}
          placeholder="Écrire une longueur"
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label className="mr-2" htmlFor="height">
          Largeur:
        </label>
        <input
          type="number"
          id="height"
          value={height}
          placeholder="Écrire une largeur"
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <Chart title={title} width={width} height={height} />
    </div>
  );
}

export default BuilderChart;
