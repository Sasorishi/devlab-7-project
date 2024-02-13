import React, { useState } from "react";
import ColorPicker from "../ColorPickerComponent";

const SelectColorComponent = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  return (
    <div className="w-full mb-3">
      <label
        htmlFor="colors"
        className="font-bold block mb-2 text-sm text-gray-900"
      >
        Couleur du graphique
      </label>
      <ColorPicker onColorChange={handleColorChange} />
    </div>
  );
};

export default SelectColorComponent;
