import React from "react";
import SelectDataset from "../components/SelectDataComponent";

function SelectData() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-start h-screen p-5">
        <h1 className="block mb-2 text-primary font-bold uppercase">
          Selectionner une datavisualisation
        </h1>
        <div className="w-full">
          <SelectDataset />
        </div>
      </div>
    </div>
  );
}

export default SelectData;
