import React, { useEffect } from 'react';
import * as d3 from 'd3';

const MapComponent = ({ jsonData }) => {
    useEffect(() => {
        fetch('src/assets/quartiers_issy.geojson')
            .then(response => response.json())
            .then(geoJsonData => {
                const width = 1200;
                const height = 880;
                console.log(jsonData);

                d3.select("#map-issy").selectAll("*").remove();

                const svg = d3.select("#map-issy")
                    .classed("flex justify-center", true)
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height);

                const projection = d3.geoMercator()
                    .center([2.2769, 48.8205])
                    .scale(800000)
                    .translate([width / 2, height / 2]);

                const path = d3.geoPath().projection(projection);

                // Draw the map
                svg.selectAll('path')
                    .data(geoJsonData.features)
                    .enter()
                    .append('path')
                    .attr('d', path)
                    .attr('fill', 'lightblue')
                    .attr('stroke', 'white');

                // Plot the data points if jsonData is available
                if (jsonData) {
                    svg.selectAll('circle')
                        .data(jsonData)
                        .enter()
                        .filter(function(d) { return d.geo_point_2d && d.geo_point_2d.lon && d.geo_point_2d.lat; }) // Ensure the data has lon and lat
                        .append('circle')
                        .attr('cx', function(d) {
                            return projection([d.geo_point_2d.lon, d.geo_point_2d.lat])[0];
                        })
                        .attr('cy', function(d) {
                            return projection([d.geo_point_2d.lon, d.geo_point_2d.lat])[1];
                        })
                        .attr('r', 5)
                        .attr('fill', 'red');
                }

            });
    }, [jsonData]); // Depend on jsonData so that it re-renders when data changes

    return <div id="map-issy" className="h-auto"></div>;
};

export default MapComponent;
