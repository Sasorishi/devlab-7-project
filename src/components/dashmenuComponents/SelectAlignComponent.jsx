import React from "react";

const SelectAlignComponent = () => {
  return (
    <div className="w-full mb-3">
      <label
        htmlFor="aligns"
        className="font-bold block mb-2 text-sm text-gray-900"
      >
        Alignement du graphique
      </label>
      <select
        id="aligns"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>Sélectionner un alignement</option>
        <option value="left">Gauche</option>
        <option value="center">Centre</option>
        <option value="right">Droite</option>
      </select>
    </div>
  );
};

export default SelectAlignComponent;
