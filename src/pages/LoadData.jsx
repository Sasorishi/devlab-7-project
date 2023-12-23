import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dataset from "../assets/data/reseau-de-bornes-de-recharge-pour-vehicule-electrique.json";

function LoadData() {
  const [jsonData, setJsonData] = useState("");
  const [isValidJson, setIsValidJson] = useState(true);
  const [numberDataset, setNumberDataset] = useState(0);
  const navigate = useNavigate();

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

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center h-screen">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Le JSON
        </label>
        <div className="mb-5 flex gap-4">
          <button
            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            onClick={() => handlePaste(1)}
          >
            Dataset 1
          </button>
          <button
            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            onClick={() => handlePaste(2)}
          >
            Dataset 2
          </button>
        </div>
        <textarea
          id="message"
          rows="14"
          className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${
            isValidJson ? "border-gray-300" : "border-red-500"
          } focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="Écrire le JSON..."
          value={jsonData}
          onChange={handleTextareaChange}
        ></textarea>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSubmit}
        >
          Valider
        </button>
      </div>
      {!isValidJson && (
        <p className="mt-2 text-red-500 text-sm">Le JSON n'est pas valide.</p>
      )}
    </div>
  );
}

export default LoadData;
