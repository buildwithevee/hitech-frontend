import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaCog } from 'react-icons/fa';

// Register required chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data for the Doughnut chart
  const doughnutData = {
    labels: ['Total user', 'Total amount', 'Total admin', 'Total package'],
    datasets: [
      {
        label: 'Sales Breakdown',
        data: [30, 25, 15, 10], // Custom values for each section
        backgroundColor: ['#72A10F', '#3DAE49', '#4D9984', '#AAF49B'],
        hoverOffset: 4,
        borderWidth: 0, // Removes default border
      },
    ],
  };

  // Options for the Doughnut chart
  const doughnutOptions = {
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
    },
    cutout: '70%', // Cutout size to make it a doughnut chart
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white flex flex-col  justify-center shadow-md rounded-lg p-6 w-full h-full border border-gray-300">
      <div className='flex flex-row lg:flex-col xl:flex-row justify-center items-center gap-x-3'>

        <div className="relative flex justify-center items-center mb-4">
          <div className="w-40 h-40 relative">
            <Doughnut data={doughnutData} options={doughnutOptions} />
            {/* Centered Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-700">
              81%
            </div>
          </div>
        </div>



        <div className="flex flex-col text-[14px] 2xl:text-sm space-y-2 mb-4 ">
          <div className="flex items-center">
            <div className="w-3 h-3  bg-[#72A10F] mr-2"></div>
            <span>Total user</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3  bg-[#3DAE49] mr-2"></div>
            <span>Total amount</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3  bg-[#4D9984] mr-2"></div>
            <span>Total admin</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3  bg-[#AAF49B] mr-2"></div>
            <span>Total package</span>
          </div>
        </div>
      </div>


      {/* Custom Legend */}


      {/* Total Sale with toggle indicator */}
      <h3 className="text-lg xl:text-2xl font-bold xl:mb-4 mb-0 text-center xl:text-start">Today Sales report</h3>
      <h3 className="text-sm font-medium text-center lg:text-start mt-3">Today Sale</h3>

      <div className="flex justify-between items-center">

        <div className="flex items-center mx-auto lg:mx-0 ">

          <div className="flex items-center ">
            {/* Overlapping Toggle Buttons */}
            <div className="w-6 h-6 rounded-full bg-[#174C15]"></div>
            <div className="w-5 h-6 rounded-full bg-[#D6FACD] -ml-3"></div>
            <div className="w-6 h-6 rounded-full bg-[#199110] -ml-3"></div>
            <div className="w-6 h-6 rounded-full bg-[#73E662] -ml-3"></div>

          </div>


          <span className="ml-3 font-bold text-2xl">81%</span>
        </div>
        {/* Settings icon */}
        <FaCog size={20} className="text-black hover:text-gray-900 cursor-pointer" />
      </div>
    </div>
  );
};

export default PieChart;
