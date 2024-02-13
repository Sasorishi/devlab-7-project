import React from "react";

const SelectTitleComponent = () => {
  return (
    <div className="w-full mb-3">
      <label
        htmlFor="title"
        className="font-bold block mb-2 font-bold text-sm text-gray-900"
      >
        Nom du graphique
      </label>
      <input
        type="text"
        id="title"
        placeholder="Écrire un titre ..."
        className="w-full bg-gray-500 border border-gray-300 text-white placeholder:text-white-80 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      />
    </div>
  );
};

export default SelectTitleComponent;
