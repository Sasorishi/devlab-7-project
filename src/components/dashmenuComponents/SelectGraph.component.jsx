import React from "react";

const SelectGraphComponent = () => {
  return (
    <div className="w-full mb-3">
      <label
        htmlFor="graphs"
        className="font-bold block mb-2 text-sm text-gray-900"
      >
        Ajouter un graphique
      </label>
      <select
        id="graphs"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>Sélectionner un graphe</option>
        <option value="1">Camembert</option>
        <option value="2">Barre</option>
        <option value="3">Courbe</option>
      </select>
    </div>
  );
};

export default SelectGraphComponent;
