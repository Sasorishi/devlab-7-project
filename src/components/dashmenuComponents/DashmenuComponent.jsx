import React, { useState } from "react";
import ColorPicker from "../ColorPickerComponent";
import SelectGraph from "../dashmenuComponents/SelectGraph.component";
import SelectAxe from "../dashmenuComponents/SelectAxeComponent";
import SelectColor from "../dashmenuComponents/SelectColorComponent";
import SelectAlign from "../dashmenuComponents/SelectAlignComponent";
import SelectTitle from "../dashmenuComponents/SelectTitleComponent";

const DashmenuComponent = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulaire soumis");
  };
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleColorChange = (newColor) => {
    setSelectedColor(newColor);
  };

  return (
    <div className="menu-container">
      <form className="menu-1" onSubmit={handleSubmit}>
        <div className="cursor-pointer" onClick={toggleFormVisibility}>
          <h1>
            Configuration
            <div
              className={`ml-5 icon ${
                isFormVisible ? "icon-hide" : "icon-show"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </div>
          </h1>
        </div>

        {isFormVisible && (
          <div className={`menu-1-containt ${isFormVisible ? "" : "hidden"}`}>
            <SelectGraph />
            <SelectAxe />
            <SelectColor />
            <SelectAlign />
            <SelectTitle />
            <div className="flex w-full justify-end">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="text-white bg-secondary hover:bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Appliquer
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default DashmenuComponent;
