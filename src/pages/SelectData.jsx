import React from "react";
import SelectDataset from "../components/SelectDataComponent";

function SelectData() {
  return (
    <div className=" animate-in  container mx-auto h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-start h-screen p-5">
        <h1 className=" mb-2 mt-[20vh] text-center font-bold uppercase text-[#ffcc00]">
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
