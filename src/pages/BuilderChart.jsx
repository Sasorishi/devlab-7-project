import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Chart from "../components/ChartComponent";
import Dashmenu from "../components/dashmenuComponents/DashmenuComponent";
import Map from "../components/chartComponents/MapComponent";

import * as htmlToImage from 'html-to-image';

import { saveAs } from "file-saver";

function BuilderChart() {
  const location = useLocation();
  // const [selectedColor, setSelectedColor] = useState("#ffffff");
  // const [title, setTitle] = useState("");
  const [jsonData, setJsonData] = useState(null);
  const [numberDataset, setNumberDataset] = useState(0);

  // const handleColorChange = (newColor) => {
  //   setSelectedColor(newColor);
  // };

  useEffect(() => {
    if (location.state) {
      setJsonData(location.state.jsonData);
      setNumberDataset(location.state.numberDataset);
    }
  }, [location.state]);

  const exportChart = (chartId) => {
    const chartContainer = document.getElementById(chartId);
    if (chartContainer) {
      htmlToImage.toBlob(chartContainer).then(function (blob) {
        saveAs(blob, `${chartId}.png`);
      });
    }
  };

  return (
    <div className="mx-auto bg-accent mb-5 h-auto">
      <Dashmenu />
      <div className="flex flex-col items-center justify-center p-5">
        <h1 className="text-white uppercase">
          Chart Builder - Dataset {numberDataset}
        </h1>
      </div>
      <div className="container mx-auto min-h-screen p-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-3 sm:gap-8 justify-center my-5 w-full">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-duration="100"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white w-full">
              <div id="chart-container-1">
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
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="text-white bg-secondary hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => exportChart("chart-container-1")}
                >
                  Export
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
              <div id="chart-container-2">
                <Chart
                  type="pie"
                  title="Les types de bornes"
                  width={250}
                  height={200}
                  dataset={jsonData}
                  numberDataset={numberDataset}
                  field={"type_borne"}
                />
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="text-white bg-secondary hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => exportChart("chart-container-2")}
                >
                  Export
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
              <div id="chart-container-3">
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
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="text-white bg-secondary hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => exportChart("chart-container-3")}
                >
                  Export
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
              <div id="chart-container-4">
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
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="text-white bg-secondary hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => exportChart("chart-container-4")}
                >
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-center my-5 w-full">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <div className="mx-auto w-full p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
              <Map title="Géolocalisation des bornes" jsonDataProp={jsonData} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-3 sm:gap-8 justify-center my-5 w-full">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="0"
            data-aos-offset="0"
            data-aos-duration="100"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white w-full">
              <div id="chart-container-5">
                <Chart
                  type="radar"
                  title="Capacité de charge"
                  width={250}
                  height={200}
                  dataset={jsonData}
                  numberDataset={numberDataset}
                  field_1={"date_mes"}
                  field_2={"nb_place"}
                  labelValue={"Nombre de places"}
                />
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="text-white bg-secondary hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => exportChart("chart-container-5")}
                >
                  Export
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
              <div id="chart-container-6">
                <Chart
                  type="polarArea"
                  title="Les différents opérateurs"
                  width={250}
                  height={200}
                  dataset={jsonData}
                  numberDataset={numberDataset}
                  field={"n_operateur"}
                />
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="text-white bg-secondary hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => exportChart("chart-container-6")}
                >
                  Export
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
              <div id="chart-container-7">
                <Chart
                  type="bubble"
                  title="Nombre total d'aménageurs"
                  width={250}
                  height={200}
                  dataset={jsonData}
                  numberDataset={numberDataset}
                  field={"n_amenageur"}
                />
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="text-white bg-secondary hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => exportChart("chart-container-7")}
                >
                  Export
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
              <div id="chart-container-8">
                <Chart
                  type="scatter"
                  title="Accessibilité par heures/jours"
                  width={250}
                  height={200}
                  dataset={jsonData}
                  numberDataset={numberDataset}
                  field={"date_mes"}
                  labelValue={"Nombre de bornes"}
                />
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  className="text-white bg-secondary hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => exportChart("chart-container-8")}
                >
                  Export
                </button>
              </div>
            </div>
          </div>
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
