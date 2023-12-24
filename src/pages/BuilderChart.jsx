import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ColorPicker from "../components/ColorPickerComponent";
import Chart from "../components/ChartComponent";

function BuilderChart() {
  const location = useLocation();
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
    <div className="mx-auto bg-accent">
      <div className="flex justify-center p-5">
        <h1 className="text-white uppercase">
          Chart Builder - Dataset {numberDataset}
        </h1>
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-4 gap-4 justify-center my-5 w-full">
          {/* <ColorPicker onColorChange={handleColorChange} /> */}
          <Chart
            type="bar"
            title="Nombre de place par année"
            width={250}
            height={200}
            dataset={jsonData}
            numberDataset={numberDataset}
            field_1={"date_mes"}
            field_2={"nb_place"}
            labelValue={"Nombre de places"}
          />
          <Chart
            type="pie"
            title="Les types de bornes"
            width={250}
            height={200}
            dataset={jsonData}
            numberDataset={numberDataset}
            field={"type_borne"}
          />
          <Chart
            type="bar"
            title="Nombre de accès recharge"
            width={250}
            height={200}
            dataset={jsonData}
            numberDataset={numberDataset}
            field={"acces_recharge"}
            labelValue={"Nombre de accès recharge"}
          />
          <Chart
            type="line"
            title="Évolution de bornes par année"
            width={250}
            height={200}
            dataset={jsonData}
            numberDataset={numberDataset}
            field={"date_mes"}
            labelValue={"Nombre de bornes"}
          />
        </div>
        {/* <div className="flex flex-row gap-4 justify-center">
          <Chart
            type="BarChart"
            title={title}
            width={width}
            height={height}
            dataset={jsonData}
            numberDataset={numberDataset}
          />
          <Chart
            type="BarChart"
            title={title}
            width={width}
            height={height}
            dataset={jsonData}
            numberDataset={numberDataset}
          />
          <Chart
            type="BarChart"
            title={title}
            width={width}
            height={height}
            dataset={jsonData}
            numberDataset={numberDataset}
          />
          <Chart
            type="BarChart"
            title={title}
            width={width}
            height={height}
            dataset={jsonData}
            numberDataset={numberDataset}
          />
        </div> */}
      </div>
    </div>
  );
}

export default BuilderChart;
