export const barChartData = (
  datasetNumber,
  parsedDataset,
  field,
  field_1,
  field_2,
  labelValue
) => {
  switch (datasetNumber) {
    case 1:
      const groupedData = parsedDataset.reduce((result, item) => {
        if (field) {
          const fieldValue = item[field];

          if (fieldValue !== null && fieldValue !== undefined) {
            if (result[fieldValue]) {
              result[fieldValue]++;
            } else {
              result[fieldValue] = 1;
            }
          }

          return result;
        } else {
          const fieldY = item[field_1];

          if (fieldY !== null && fieldY !== undefined) {
            if (result[fieldY]) {
              result[fieldY].push(item);
            } else {
              result[fieldY] = [item];
            }
          }

          return result;
        }
      }, {});

      return {
        labels: Object.keys(groupedData),
        datasets: [
          {
            label: labelValue,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            data: field
              ? Object.values(groupedData)
              : Object.entries(groupedData).map(([fieldY, items]) => {
                  return items.reduce(
                    (total, item) => total + item[field_2],
                    0
                  );
                }),
          },
        ],
      };

    default:
      return {
        labels: ["Label 1", "Label 2", "Label 3", "Label 4"],
        datasets: [
          {
            label: "Dataset 1",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            data: [10, 20, 15, 25],
          },
        ],
      };
  }
};

export const lineChartData = (
  datasetNumber,
  parsedDataset,
  field,
  field_1,
  field_2,
  labelValue
) => {
  switch (datasetNumber) {
    case 1:
      const groupedData = parsedDataset.reduce((result, item) => {
        if (field) {
          const fieldValue = item[field];

          if (fieldValue !== null && fieldValue !== undefined) {
            if (!result[fieldValue]) {
              result[fieldValue] = 0;
            }
            result[fieldValue]++;
          }
        }

        return result;
      }, {});

      return {
        labels: Object.keys(groupedData),
        datasets: {
          label: labelValue,
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          tension: 0.1,
          data: Object.values(groupedData),
        },
      };

    default:
      return {
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      };
  }
};

export const stackedLineChartData = {
  labels: ["Label 1", "Label 2", "Label 3"],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      stack: "stack1",
    },
    {
      label: "Dataset 2",
      data: [5, 15, 25],
      borderColor: "rgba(255,99,132,1)",
      backgroundColor: "rgba(255,99,132,0.2)",
      stack: "stack1",
    },
  ],
};

export const pieChartData = (datasetNumber, parsedDataset, field) => {
  switch (datasetNumber) {
    case 1:
      const groupedData = parsedDataset.reduce((result, item) => {
        const fieldValue = item[field];

        if (fieldValue !== null && fieldValue !== undefined) {
          if (result[fieldValue]) {
            result[fieldValue]++;
          } else {
            result[fieldValue] = 1;
          }
        }

        return result;
      }, {});

      const chartData = {
        labels: Object.keys(groupedData),
        datasets: [
          {
            label: "Nombre de types de borne",
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgba(75,192,192,0.4)",
            ],
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            data: Object.values(groupedData),
          },
        ],
      };

      return chartData;

    default:
      return {
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [
          {
            data: [30, 50, 20],
            backgroundColor: ["red", "blue", "green"],
          },
        ],
      };
  }
};

export const radarChartData = {
  labels: ["7 kw", "22 kw", "24 kw", "50 kw", "100 kw"],
  datasets: [
    {
      label: "Les types de bornes",
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "rgba(75,192,192,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(75,192,192,1)",
      data: [65, 59, 90, 81, 56],
    },
  ],
};

export const scatterChartData = {
  datasets: [
    {
      label: "Nombre de bornes",
      data: [
        { x: 10, y: 20 }, // Premier point : x = 10, y = 20
        { x: 30, y: 40 }, // Deuxième point : x = 30, y = 40
        { x: 50, y: 10 }, // Troisième point : x = 50, y = 10
        { x: 70, y: 30 }, // Quatrième point : x = 70, y = 30
        { x: 90, y: 50 }, // Cinquième point : x = 90, y = 50
        // Add more data points as needed
      ],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
    },
  ],
};

export const polarAreaChartData = (datasetNumber, parsedDataset, field) => {
  switch (datasetNumber) {
    case 1:
      const groupedData = parsedDataset.reduce((result, item) => {
        const fieldValue = item[field];

        if (fieldValue !== null && fieldValue !== undefined) {
          if (result[fieldValue]) {
            result[fieldValue]++;
          } else {
            result[fieldValue] = 1;
          }
        }

        return result;
      }, {});

      const chartData = {
        labels: Object.keys(groupedData),
        datasets: [
          {
            label: "Nombre de types de borne",
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgba(75,192,192,0.4)",
            ],
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            data: Object.values(groupedData),
          },
        ],
      };

      return chartData;

    default:
      return {
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [
          {
            data: [30, 50, 20],
            backgroundColor: ["red", "blue", "green"],
          },
        ],
      };
  }
};

export const bubbleChartData = (datasetNumber, parsedDataset, field) => {
  switch (datasetNumber) {
    case 2:
      const groupedData = parsedDataset.reduce((result, item) => {
        const fieldValue = item[field];

        if (fieldValue !== null && fieldValue !== undefined) {
          if (result[fieldValue]) {
            result[fieldValue]++;
          } else {
            result[fieldValue] = 1;
          }
        }

        return result;
      }, {});

      const chartData = {
        labels: Object.keys(groupedData),
        datasets: [
          {
            label: "Nombre de types de borne",
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgba(75,192,192,0.4)",
            ],
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            data: Object.values(groupedData),
          },
        ],
      };

      return chartData;

    default:
      return {
        labels: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
        datasets: [
          {
            label: "Nombre de bornes",
            data: [
              { x: 10, y: 20, r: 15 }, // Premier point : x = 10, y = 20, rayon = 15
              { x: 30, y: 40, r: 25 }, // Deuxième point : x = 30, y = 40, rayon = 25
              { x: 50, y: 10, r: 20 }, // Troisième point : x = 50, y = 10, rayon = 20
              { x: 70, y: 30, r: 10 }, // Quatrième point : x = 70, y = 30, rayon = 10
              { x: 90, y: 50, r: 30 }, // Cinquième point : x = 90, y = 50, rayon = 30
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 205, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 205, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
  }
};

const DataChartComponent = () => {
  return;
};

export default DataChartComponent;
