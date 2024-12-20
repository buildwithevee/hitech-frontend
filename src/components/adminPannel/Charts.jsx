import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js';
import PieChart from './PieChart'; // Import PieChart
import "aos/dist/aos.css";
// Registering necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Chart = () => {
  
  // Bar chart data and options
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [100, 40, 65, 25, 100, 5, 50, 70, 50, 90, 25, 70],
        backgroundColor: [
          '#72A10F', '#F8A65A', '#4D9984', '#F8A65A', '#72A10F',
          '#F8A65A', '#4D9984', '#72A10F', '#4D9984', '#72A10F', '#F8A65A', '#72A10F',
        ],
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="p-1 flex flex-col lg:flex-row gap-y-12 w-full gap-x-6">
      {/* Bar Chart */}
      <div className="bg-white  shadow-md rounded-lg p-6  lg:w-2/3 w-full  border border-gray-300">
      <div className='flex flex-col lg:flex-row justify-between items-center'>
      <h3 className="text-xl font-bold mb-4">Admin Overview Sale</h3>
        <div className="flex justify-between gap-x-2 items-center mb-4">
          <button className="bg-[#022213] text-white px-3 py-1 rounded">Week</button>
          <button className="bg-[#72A10F] text-white px-3 py-1 rounded">Month</button>
          <button className="bg-[#4D9984] text-white px-3 py-1 rounded">Year</button>
          <button className="bg-[#F8A65A] text-white px-3 py-1 rounded">All</button>
        </div>
      </div>
        
        <div className="h-64 w-full">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
<div className='lg:w-1/3 w-full'>
<PieChart />

</div>
      {/* Doughnut Chart */}
    </div>
  );
};

export default Chart;
