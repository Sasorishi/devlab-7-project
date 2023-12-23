import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ColorPicker from "../components/ColorPickerComponent";
import Chart from "../components/ChartComponent";

function BuilderChart() {
  const location = useLocation();
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [title, setTitle] = useState("");
  const [jsonData, setJsonData] = useState(null);
  const [numberDataset, setNumberDataset] = useState(0);

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  useEffect(() => {
    if (location.state) {
      setJsonData(location.state.jsonData);
      setNumberDataset(location.state.numberDataset);
    }
  }, [location.state]);

  return (
    <div>
      <h1>Chart Builder {numberDataset}</h1>
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
      {/* <div>
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
      </div> */}
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Your message
      </label>
      <Chart
        title={title}
        width={width}
        height={height}
        dataset={jsonData}
        numberDataset={numberDataset}
      />
    </div>
  );
}

export default BuilderChart;
