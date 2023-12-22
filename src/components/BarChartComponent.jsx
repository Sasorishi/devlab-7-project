import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChartComponent = ({ data, selectedColor }) => {
  const chartRef = useRef();

  useEffect(() => {
    drawChart();
  }, [data, selectedColor]);

  const drawChart = () => {
    const svg = d3.select(chartRef.current);
    const width = 400;
    const height = 200;

    // Supprimer le contenu existant avant de redessiner
    svg.selectAll('*').remove();

    const barColor = selectedColor || 'steelblue';

    // Créer l'échelle des x (barres horizontales)
    const xScale = d3.scaleBand().domain(data.map((d, i) => i)).range([0, width]).padding(0.1);

    // Créer l'échelle des y (barres verticales)
    const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]);

    // Ajouter les barres
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(i))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d))
      .attr('fill', barColor);
  };

  return (
    <svg ref={chartRef} width={400} height={200}>
      {/* Contenu du graphique généré par D3 */}
    </svg>
  );
};

export default BarChartComponent;
