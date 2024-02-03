import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Chart from "../components/ChartComponent";
import Dashmenu from "../components/dashmenuComponents/DashmenuComponent";
import Map from "../components/chartComponents/MapComponent";

function BuilderChart() {
  const location = useLocation();
  // const [selectedColor, setSelectedColor] = useState("#ffffff");
  // const [title, setTitle] = useState("");
  const [jsonData, setJsonData] = useState(null);
  const [numberDataset, setNumberDataset] = useState(0);
  const [labelDataset, setLabelDataset] = useState(0);

  // const handleColorChange = (newColor) => {
  //   setSelectedColor(newColor);
  // };

  useEffect(() => {
    if (location.state) {
      setJsonData(location.state.jsonData);
      setNumberDataset(location.state.numberDataset);

      switch (location.state.numberDataset) {
        case 1:
          setLabelDataset(
            "Réseau de bornes de recharge pour véhicule éléctrique"
          );
          break;

        default:
          setLabelDataset("Défaut");
          break;
      }
    }
  }, [location.state]);

  return (
    <div className="mx-auto bg-accent mb-5 h-auto">
      <Dashmenu />
      <div className="flex flex-col items-center justify-center p-5">
        <h1 className="text-white uppercase">
          Chart Builder - Dataset {numberDataset}
        </h1>
        <p className="text-black font-thin">{labelDataset}</p>
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
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
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
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
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
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
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
              <Map />
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
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
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
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
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
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <div className="box mx-auto p-6 border border-gray-200 rounded-lg shadow-xl bg-white">
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
