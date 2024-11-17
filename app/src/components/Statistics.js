import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los componentes necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = ({ activities }) => {
  const data = {
    labels: ['Run', 'Swim', 'Cycle'],
    datasets: [
      {
        label: 'Total Duration (min)',
        data: ['Run', 'Swim', 'Cycle'].map((type) =>
          activities
            .filter((activity) => activity.type === type)
            .reduce((sum, curr) => sum + parseFloat(curr.duration || 0), 0)
        ),
        backgroundColor: ['#007bff', '#28a745', '#dc3545'],
      },
    ],
  };

  return <Bar data={data} />;
};

export default Statistics;
