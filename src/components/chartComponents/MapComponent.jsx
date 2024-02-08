import React, { useState, useEffect } from "react";
import * as d3 from "d3";
// import GeoJsonData from "../../assets/data/quartiers_issy.geojson";
import Nik from "../../assets/imgs/nik.png";

const MapComponent = ({ jsonDataProp, title }) => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Parse jsonDataProp si c'est une string
    if (typeof jsonDataProp === "string") {
      try {
        const parsedData = JSON.parse(jsonDataProp);
        setJsonData(parsedData);
      } catch (error) {
        console.error("Erreur lors du parsing de jsonDataProp", error);
        return; // Sortie anticipée si le parsing échoue
      }
    } else {
      // Si jsonDataProp est déjà un objet, mettez-le à jour directement
      setJsonData(jsonDataProp);
    }
  }, [jsonDataProp]); // Se re-exécute lorsque jsonDataProp change

  useEffect(() => {
    // Assurez-vous que la carte ne tente de se charger que si jsonData est chargé
    if (!jsonData) {
      console.log("jsonData n'est pas encore chargé");
      return; // Sortie anticipée si jsonData n'est pas disponible
    }
    console.log("jsonData est chargé", jsonData); // Confirme que jsonData est chargé

    fetch("src/assets/data/quartiers_issy.geojson")
      .then((response) => response.json())
      .then((geoJsonData) => {
        const width = 900;
        const height = 280;

        // Efface le contenu précédent pour éviter les doublons
        d3.select("#map-issy").selectAll("*").remove();

        const svg = d3
          .select("#map-issy")
          .classed("flex justify-center", true)
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        const projection = d3
          .geoMercator()
          .center([2.2769, 48.8205]) // Centre sur Issy-les-Moulineaux
          .scale(420000)
          .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        // Dessine la carte
        svg
          .selectAll("path")
          .data(geoJsonData.features)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", "lightblue")
          .attr("stroke", "white");

        // Dessine les points de données
        svg
          .selectAll("g")
          .data(jsonData)
          .enter()
          .filter(function (d) {
            // console.log("Filtrage de la donnée", d);
            return d.geo_point_2d && d.geo_point_2d.lon && d.geo_point_2d.lat;
          })
          .append("g")
          .attr(
            "transform",
            (d) =>
              `translate(${projection([
                d.geo_point_2d.lon,
                d.geo_point_2d.lat,
              ])})`
          )
          .html(
            '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><path d="M80 96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32l96 0c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32h16c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64l16 0zm304 96c0-8.8-7.2-16-16-16s-16 7.2-16 16v32H320c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32c0 8.8 7.2 16 16 16s16-7.2 16-16V256h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H384V192zM80 240c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16z"/></svg>'
          );
      })
      .catch((error) =>
        console.error("Erreur lors du chargement de la carte GeoJSON:", error)
      );
  }, [jsonData]); // Se re-exécute lorsque jsonData change

  return (
    <div className="mx-auto">
      <h5 className="mb-10 text-center font-bold tracking-tight text-gray-900">
        {title ? title : "Aucun titre"}
      </h5>
      {/* <div id="map-issy" className="h-auto" /> */}
      <div>
        <img src={Nik} alt="" />
      </div>
    </div>
  );
};

export default MapComponent;
