import axios from "axios";
import { useEffect, useState } from "react";
import { Image } from "antd";
import { useDropzone } from "react-dropzone";
import { GoPlusCircle } from "react-icons/go";
import toast from "react-hot-toast";
import { apiBaseUrl } from "../../config/constant";
const Workers = () => {
    const [workers, setWorkers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const [image, setImage] = useState("");
    const [workerData, setWorkerData] = useState({
        workerName: "",
        phoneNumber: "",
    })

    const onDrop = (acceptedFiles) => {
        const selectedFile = acceptedFiles[0];

        if (!selectedFile) {
            toast.error("No file selected.");
            return;
        }

        if (!selectedFile.type.startsWith("image/")) {
            toast.error("Only image files are allowed.");
            return;
        }

        if (selectedFile.size > 5 * 1024 * 1024) {
            toast.error("File size exceeds the 5MB limit.");
            return;
        }

        setImage(selectedFile); // Set the single selected image
    };

    const removeImage = () => {
        setImage(null); // Clear the selected image
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: false, // Only allow a single file
    });

    const handleOnchange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setWorkerData(prev => ({ ...prev, [name]: value }))
    }

    const loadInitialData = async () => {
        try {

            const response = await axios.get(`${apiBaseUrl}/worker?page=${currentPage}&limit=5`);
            if (response.status === 200) {
                setWorkers(response.data.workers);
                setTotalPages(response.data.totalPages);
            }

        } catch (error) {
            console.error("Error fetching job cards:", error);
        }
    };
    const handleUpdateStatus = async (id) => {
        try {
            const response = await axios.post(`${apiBaseUrl}/worker/change-status?id=${id}`);
            if (response.status === 200) {
                loadInitialData()
            }

        } catch (error) {
            console.error("Error fetching job cards:", error);
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Please upload an image.");
            return;
        }

        if (!workerData.workerName || !workerData.phoneNumber) {
            toast.error("Worker name and phone number are required.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("workerName", workerData.workerName.trim());
            formData.append("phoneNumber", workerData.phoneNumber.trim());

            const response = await axios.post(
                `${apiBaseUrl}/worker/new-worker`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200 && response.data.success) {
                toast.success("Worker created successfully!");
            } else {
                // Handle unexpected success cases with an error message
                toast.error(
                    response.data.message || "Unexpected error occurred. Please try again."
                );
            }
        } catch (error) {
            if (error.response) {
                // Handle known server-side errors
                switch (error.response.status) {
                    case 400:
                        toast.error(
                            error.response.data.message || "Invalid input. Please check your data."
                        );
                        break;
                    case 401:
                        toast.error("Unauthorized. Please check your credentials.");
                        break;
                    case 500:
                        toast.error("Server error. Please try again later.");
                        break;
                    default:
                        toast.error(
                            error.response.data.message || "An unexpected error occurred."
                        );
                }
            } else if (error.request) {
                // Handle network-related errors
                toast.error("Network error. Please check your internet connection.");
            } else {
                // Handle client-side or unknown errors
                toast.error(error.message || "An unknown error occurred.");
            }
        } finally {
            setImage("");
            setWorkerData({
                phoneNumber: "",
                workerName: ""
            });
            setIsOpen(false)
        }
    };

    useEffect(() => {
        loadInitialData();
    }, [currentPage, handleSubmit]);

    return (
        <div className="min-h-screen w-full px-4 py-6 ">
            <div className="flex flex-col items-start w-full max-w-7xl mx-auto relative">
                <h1 className="text-4xl font-bold text-white mb-4">Workers</h1>
                <p className="text-white mb-6">Hi-Tech Engineering Company</p>
                <button className="px-5 py-2 bg-[#3890d8] text-white rounded-md absolute right-10 top-5 " onClick={() => setIsOpen(prev => !prev)}>Add</button>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-[#1e1f20]   rounded-lg shadow-lg w-full max-w-md p-6 relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                            >
                                ✖
                            </button>

                            {/* Modal Content */}
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Enter Worker Details
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div
                                    {...getRootProps()}
                                    className="p-6 rounded-lg cursor-pointer transition w-full border border-dashed border-white"
                                >
                                    <input {...getInputProps()} />
                                    {!image ? (
                                        <p className="text-gray-500 text-center">
                                            Drag & drop an image here, or click to select
                                        </p>
                                    ) : (
                                        <div className="relative">
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt="uploaded"
                                                className="w-full h-60 object-cover rounded"
                                            />
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeImage();
                                                }}
                                                className="absolute top-2 right-2 bg-[#d65f63] rounded-full w-fit text-white text-center flex justify-center items-center transition rotate-45"
                                            >
                                                <GoPlusCircle size={20} color="white" />
                                            </button>
                                        </div>
                                    )}
                                </div>;
                                <div >
                                    <label
                                        htmlFor="workerName"
                                        className="block text-sm font-medium text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="workerName"
                                        name="workerName"
                                        value={workerData.workerName}
                                        required
                                        onChange={handleOnchange}
                                        className="p-2 mt-1 block w-full rounded-lg border-gray-300 text-white bg-[#282a2c] shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block text-sm font-medium text-white"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        value={workerData.phoneNumber}
                                        onChange={handleOnchange}
                                        required
                                        className="p-2 mt-1 block w-full rounded-lg border-gray-300 text-white bg-[#282a2c] shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {/* Job Card List */}
                <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="min-w-full  border border-slate-600">
                        <thead className="bg-[#4a4d50] text-white">
                            <tr>
                                <th className="px-6 py-3 text-left font-medium">Image</th>
                                <th className="px-6 py-3 text-left font-medium">Worker Name</th>
                                <th className="px-6 py-3 text-left font-medium">Phone</th>
                                <th className="px-6 py-3 text-left font-medium">Status</th>
                                <th className="px-6 py-3 text-left font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {workers.map((worker) => (
                                <tr key={worker._id} className="border-b border-slate-600 bg-[#282a2c] transition duration-300 ">
                                    <td className="px-6 py-4 text-white">

                                        <Image src={worker.workerImage} className=" rounded-lg" width={70} height={100} /></td>
                                    <td className="px-6 py-4 text-white">{worker.workerName}</td>
                                    <td className="px-6 py-4 text-white">{worker.phoneNumber}</td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-white text-sm ${worker.status === true
                                                ? "bg-green-500"
                                                : "bg-[#d65f63] hover:bg-[#e94560]"
                                                }`}
                                        >
                                            {worker.status === true ? "Active" : "Blocked"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4  gap-2">
                                        <button className="px-4 py-2 bg-[#3890d8] text-white text-sm font-semibold rounded-md transition duration-300 hover:bg-blue-500" onClick={() => handleUpdateStatus(worker._id)}>
                                            {worker.status === true ? "De-activate" : "Activate"}
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

export default Workers;
