import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement, // Necesario para gráficos de pastel/dona
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los componentes necesarios
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Statistics = ({ activities }) => {
  // Datos para el gráfico de barras
  const barData = {
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

  // Datos para el gráfico de dona
  const doughnutData = {
    labels: ['Run', 'Swim', 'Cycle'],
    datasets: [
      {
        label: 'Activity Distribution',
        data: ['Run', 'Swim', 'Cycle'].map((type) =>
          activities.filter((activity) => activity.type === type).length
        ),
        backgroundColor: ['#007bff', '#28a745', '#dc3545'],
      },
    ],
  };

  return (
    <div>
      <h3>Bar Chart: Total Duration</h3>
      <Bar data={barData} />

      <h3 className="mt-4">Doughnut Chart: Activity Distribution</h3>
      <Doughnut data={doughnutData} />
    </div>
  );
};

export default Statistics;
