import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dataset from "../assets/data/reseau-de-bornes-de-recharge-pour-vehicule-electrique.json";

function LoadData() {
  const location = useLocation();
  const [jsonData, setJsonData] = useState("");
  const [isValidJson, setIsValidJson] = useState(true);
  const [numberDataset, setNumberDataset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      switch (location.state.param) {
        case 1:
          handlePaste(location.state.param);
          break;
        default:
          handlePaste(location.state.param);
          break;
      }
    }
  }, [location.state]);

  const handleTextareaChange = (event) => {
    setJsonData(event.target.value);
    setIsValidJson(true);
  };

  const handleSubmit = () => {
    try {
      JSON.parse(jsonData);
      setIsValidJson(true);
      console.log("Valeur JSON soumise :", jsonData);
      navigate("/builder_chart", { state: { jsonData, numberDataset } });
    } catch (error) {
      setIsValidJson(false);
      console.error("Erreur de parsing JSON :", error.message);
    }
  };

  const handlePaste = (numberDataset) => {
    const data = JSON.stringify(Dataset);
    setJsonData(data);
    setNumberDataset(numberDataset);
  };

  document.body.classList.remove("overflow-hidden");

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-screen">
        <label
          htmlFor="message"
          className="block mb-2 text-[18px] font-medium text-[#ffcc00] pb-[10px]"
        >
          Générer les graphes à partir des données
        </label>
        <textarea
          id="message"
          rows="14"
          className={`block p-2.5 w-full text-sm  shadow-[0_0_20px_#ffcc00]  text-gray-900 bg-gray-50 rounded-lg border  ${
            isValidJson ? "border-gray-300" : "border-red-500"
          } focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="Écrire le JSON..."
          value={jsonData}
          onChange={handleTextareaChange}
        ></textarea>
        <button
          className="button uppercase mt-4 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSubmit}
        >
          valider
        </button>
      </div>
      {!isValidJson && (
        <p className="mt-2 text-red-500 text-sm">
          Le JSON n&apos;est pas valide.
        </p>
      )}
    </div>
  );
}

export default LoadData;
