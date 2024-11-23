import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';

// Register Chart.js modules
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const LineChart = () => {
  const chartRef = useRef(null);

  const labels = [
    { id: 1, label: "SEO", percentage: "92%", color: "red" },
    { id: 2, label: "Social Media Ads", percentage: "86%", color: "blue" },
    { id: 3, label: "Graphic Design", percentage: "82%", color: "green" },
    { id: 4, label: "Social Media Handling", percentage: "88%", color: "yellow" },
    { id: 5, label: "Website Development", percentage: "90%", color: "purple" },
    { id: 6, label: "Performance Marketing", percentage: "84%", color: "pink" },
    { id: 7, label: "Social Media Content Writing", percentage: "87%", color: "orange" }
  ];

  // Prepare data for the chart
  const data = {
    labels: labels.map(item => item.label),
    datasets: [
      {
        label: 'Skill Proficiency (%)',
        data: labels.map(item => parseInt(item.percentage)),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: labels.map(item => item.color),
        pointBorderColor: '#fff',
        pointRadius: 6,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This ensures the chart is ready before gradient is calculated
            return null;
          }

          const gradient = ctx.createRadialGradient(
            chartArea.width / 2, // x-coordinate of center
            chartArea.height / 2, // y-coordinate of center
            0,                   // inner radius
            chartArea.width / 2, // x-coordinate for outer radius
            chartArea.height / 2, // y-coordinate for outer radius
            Math.min(chartArea.width, chartArea.height) / 2 // outer radius
          );

          // Define the gradient colors
          gradient.addColorStop(0, 'rgba(255, 0, 0, 0.4)'); // Red
          gradient.addColorStop(0.5, 'rgba(0, 255, 0, 0.4)'); // Green
          gradient.addColorStop(1, 'rgba(0, 0, 255, 0.4)'); // Blue

          return gradient;
        }
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right'
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10
        }
      }
    }
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default LineChart;
