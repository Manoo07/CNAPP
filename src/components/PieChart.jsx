import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name || item.standard || item.type || item.name),
    datasets: [
      {
        data: data.map(item => item.severity ? getSeverityValue(item.severity) : item.cpuUsage || item.status ? getStatusValue(item.status) : 1),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const datasetIndex = tooltipItem.datasetIndex;
            const index = tooltipItem.dataIndex;
            const dataItem = data[index];

            // Customize the tooltip to show detailed information
            let label = `${tooltipItem.label}: `;
            if (dataItem.severity) {
              label += `Severity: ${dataItem.severity}, Description: ${dataItem.description}`;
            } else if (dataItem.status) {
              label += `Status: ${dataItem.status}, CPU Usage: ${dataItem.cpuUsage}%, Memory Usage: ${dataItem.memoryUsage}%`;
            } else if (dataItem.standard) {
              label += `Standard: ${dataItem.standard}, Compliance: ${dataItem.compliance}`;
            } else {
              label += `${JSON.stringify(dataItem)}`;
            }
            return label;
          }
        }
      }
    }
  };

  return (
    <div className="flex justify-center p-4">
      <Pie data={chartData} options={options} />
    </div>
  );
};

// Helper function to map severity/status to numerical values
const getSeverityValue = (severity) => {
  const severityMap = {
    "critical": 5,
    "high": 4,
    "medium": 3,
    "low": 2,
    "info": 1
  };
  return severityMap[severity] || 1;
};

const getStatusValue = (status) => {
  const statusMap = {
    "running": 5,
    "pending": 3,
    "stopped": 1
  };
  return statusMap[status] || 1;
};

export default PieChart;
