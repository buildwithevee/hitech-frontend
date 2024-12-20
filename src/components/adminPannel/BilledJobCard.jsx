import { Image } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./customCss.css"
import { apiBaseUrl } from "../../config/constant";
const BilledJobCard = () => {
    const [jobCards, setJobCards] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const searchTerm = useSelector(state => state.searchTerm)
    const warranty = useSelector(state => state.warranty)

    const navigate = useNavigate();




    const searchJobCards = async () => {
        try {
            // Make API request

            console.log(warranty);

            const response = await axios.get(`${apiBaseUrl}/search?page=${currentPage}&limit=6&billed=${true}&searchTerm=${searchTerm}&${warranty ? "warranty=true" : ""}`);

            // Handle success response
            if (response.data.success) {
                console.log("Job cards fetched successfully:", response.data.data);
                setJobCards(response?.data?.data)
                setTotalPages(response?.data?.totalPages)

            } else {
                console.error("Failed to fetch job cards:", response.data.message);
                return null;
            }
        } catch (error) {
            console.error("Error fetching job cards:", error.message || error);
            return null;
        }
    };







    useEffect(() => {
        // if (searchTerm.trim() !== "") {
        searchJobCards();
        console.log("re render");

        // }
    }, [currentPage, searchTerm, warranty]);

    return (
        <div className="min-h-screen w-full px-4 py-6 ">
            <div className="flex flex-col items-start w-full max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-4">Billed Works</h1>
                <p className="text-white mb-6">Hi-Tech Engineering Company</p>


                {/* Job Card List */}
                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="min-w-full  border border-slate-600">
                        <thead className="bg-[#4a4d50] text-white">
                            <tr>
                                <th className="px-6 py-3 text-left font-medium">Customer Name</th>
                                <th className="px-6 py-3 text-left font-medium">Phone</th>
                                <th className="px-6 py-3 text-left font-medium">Date</th>
                                <th className="px-6 py-3 text-left font-medium">Make</th>
                                <th className="px-6 py-3 text-left font-medium">Status</th>
                                <th className="px-6 py-3 text-left font-medium">Worker</th>
                                <th className="px-6 py-3 text-left font-medium">Action</th>

                            </tr>
                        </thead>
                        <tbody className="">
                            {jobCards.map((jobCard) => (
                                <tr key={jobCard._id} className="border-b border-slate-600 bg-[#282a2c] transition duration-300">
                                    <td className="px-6 py-4 text-white">{jobCard.customerName}</td>
                                    <td className="px-6 py-4 text-white">{jobCard.phoneNumber}</td>
                                    <td className="px-6 py-4 text-white">{new Date(jobCard.InDate).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-white">{jobCard.Make}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-white text-sm ${jobCard.jobCardStatus === "Completed"
                                                ? "bg-green-500"
                                                : jobCard.jobCardStatus === "In Progress"
                                                    ? "bg-yellow-500"
                                                    : "bg-[#d65f63] hover:bg-[#e94560]"
                                                }`}
                                        >
                                            {jobCard.jobCardStatus}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 gap-4">
                                        {
                                            jobCard.worker && (<div>
                                                <Image src={jobCard?.worker?.workerImage} alt="workerImage" className=" rounded-full" height={40} width={40} />
                                            </div>)

                                        }
                                    </td>
                                    <td className="px-6 py-4 flex gap-4 items-center">
                                        <button className="px-4 py-2 w-fit h-fit bg-[#3890d8] text-white text-sm font-semibold rounded-md transition duration-300 hover:bg-blue-500 active:scale-75" onClick={() => navigate(`/admin/jobcard/${jobCard._id}`)}>
                                            View
                                        </button>



                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-between items-center p-4 bg-[#282a2c]">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className={`px-4 py-2 bg-[#3890d8] text-white rounded-md transition duration-300 hover:bg-[#14c8c8] ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className="text-white">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            className={`px-4 py-2 bg-[#3890d8] text-white rounded-md transition duration-300 hover:bg-[#14c8c8] ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BilledJobCard;
