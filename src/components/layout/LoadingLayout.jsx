import React from "react";

function LoadingLayout() {
  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <div className="loader animate-pulse">
        <p className="text-primary uppercase">Chargement en cours...</p>
      </div>
    </div>
  );
}

export default LoadingLayout;
