import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPickerComponent = ({ onColorChange }) => {
  const [color, setColor] = useState("#ffffff");

  const handleChange = (newColor) => {
    setColor(newColor.hex);
    onColorChange(newColor.hex);
  };

  return (
    <div>
      <ChromePicker color={color} onChange={handleChange} />
      <p>Couleur selectionné: {color}</p>
    </div>
  );
};

export default ColorPickerComponent;
