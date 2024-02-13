import React from "react";

const SelectAxeComponent = () => {
  return (
    <div className="w-full mb-3">
      <label
        htmlFor="axes"
        className="font-bold block mb-2 text-sm text-gray-900"
      >
        Axes X et Y
      </label>
      <select
        id="axes"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>Sélectionner un nombre</option>
        <option value="1">5</option>
        <option value="2">10</option>
        <option value="3">20</option>
      </select>
    </div>
  );
};

export default SelectAxeComponent;
