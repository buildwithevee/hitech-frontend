import axios from "axios";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "../../config/constant";

const UserStats = () => {
  const [data, setData] = useState([])
  // Create an array of objects with data
  const fetchReports = async () => {
    const response = await axios.get(`${apiBaseUrl}/jobcard/reports`);
    if (response.status === 200) {
      setData(response.data?.data)
    }

  }

  useEffect(() => {
    fetchReports()
  }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mt-8'>
      {data.map((each, index) => (
        <div
          key={index}
          className='flex flex-col gap-y-2 p-6 shadow-lg border rounded-md'
        >
          <h1 className='text-2xl text-gray-700 font-semibold'>{each.status}</h1>
          <h1 className='text-3xl font-bold text-[#72A10F]'>
            {each.count}
          </h1>
        </div>
      ))}
    </div>
  );
};


export default UserStats;
