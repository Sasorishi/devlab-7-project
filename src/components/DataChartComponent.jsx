export const barChartData = (datasetNumber, parsedDataset) => {
  switch (datasetNumber) {
    case 1:
      const groupedData = parsedDataset.reduce((result, item) => {
        const dateMes = item.date_mes;

        if (result[dateMes]) {
          result[dateMes].push(item);
        } else {
          result[dateMes] = [item];
        }

        return result;
      }, {});

      return {
        labels: Object.keys(groupedData),
        datasets: [
          {
            label: "Nombre de places",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
            data: Object.entries(groupedData).map(([dateMes, items]) => {
              return items.reduce((total, item) => total + item.nb_place, 0);
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

export const pieChartData = {
  labels: ["Label 1", "Label 2", "Label 3"],
  datasets: [
    {
      data: [30, 50, 20],
      backgroundColor: ["red", "blue", "green"],
    },
  ],
};

export const radarChartData = {
  labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
  datasets: [
    {
      label: "Dataset 1",
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
      label: "Dataset 1",
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 25 },
        { x: 25, y: 35 },
        // Add more data points as needed
      ],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
    },
  ],
};

const DataChartComponent = () => {
  return;
};

export default DataChartComponent;
