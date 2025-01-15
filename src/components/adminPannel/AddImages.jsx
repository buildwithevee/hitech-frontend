import axios from "axios";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-hot-toast";
import { GoPlusCircle } from "react-icons/go";
import Swal from "sweetalert2";
import "./customCss.css"
import { apiBaseUrl } from "../../config/constant";

const AddImages = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [jobCardData, setJobCardData] = useState({});
    const location = useLocation();
    const state = location.state;


    const { id } = useParams();
    const navigate = useNavigate();

    const onDrop = (acceptedFiles) => {
        if (images.length + acceptedFiles.length > 5) {
            toast.error("You can upload a maximum of 5 images.");
            return;
        }

        const imageFiles = acceptedFiles.filter((file) =>
            file.type.startsWith("image/")
        );
        if (imageFiles.length === 0) {
            toast.error("Only image files are allowed.");
            return;
        }

        setImages((prevImages) => [...prevImages, ...imageFiles]);
    };

    const removeImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
    });

    const getJobCardData = async () => {
        try {
            const response = await axios.get(
                `${apiBaseUrl}/jobcard/${id}`
            );
            if (response.status === 200) {
                if (response.data?.data === null) {
                    navigate("/admin/add-jobcard");
                    return;
                }
                setJobCardData(response?.data?.data);
            }
        } catch (error) {
            navigate("/admin/add-jobcard");
            toast.error("Error occurred, refresh the page");
            console.error(error);
        }
    };
    const handleSkip = async () => {

        const confirmation = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to skip the upload part?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3890d8", // Confirm button color
            cancelButtonColor: "#d65f63", // Cancel button color
            confirmButtonText: "Skip",
            cancelButtonText: "Cancel",
            background: "#1e1f20", // Dark background color
            color: "#ffffff", // White text color
            customClass: {
                popup: "custom-popup",
                confirmButton: "custom-confirm-button",
                cancelButton: "custom-cancel-button",
            },
        });

        if (!confirmation.isConfirmed) {
            // User canceled the upload
            toast.info("Upload canceled.");
            return;
        }
        try {
            const response = await axios.post(
                `${apiBaseUrl}/jobcard/skip/${id}`,)
            if (response.status === 200 && response.data.success) {
                toast.success("Skipped successfully!");
                setTimeout(() => {
                    navigate("/admin/pending");
                }, 1000);
            } else {
                throw new Error(response.data?.message || "Failed to upload images.");
            }
        } catch (error) {
            console.log(error);
            console.error("Upload error:", error);
            if (error.response) {
                if (error.response.status === 400) {
                    toast.error(
                        error.response.data.message || "Invalid request. Please try again."
                    );
                } else if (error.response.status === 404) {
                    toast.error("Job card not found. Please verify the job card ID.");
                } else if (error.response.status === 500) {
                    toast.error("Server error. Please try again later.");
                } else {
                    toast.error("Unexpected error. Please try again.");
                }
            } else if (error.request) {
                toast.error("Network error. Check your connection.");
            } else {
                toast.error(error.message || "An error occurred.");
            }
        }

    }

    const handleUpload = async () => {
        if (images.length === 0) {
            toast.error("Please select at least one image.");
            return;
        }

        // Show confirmation alert
        const confirmation = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to upload the selected images?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3890d8", // Confirm button color
            cancelButtonColor: "#d65f63", // Cancel button color
            confirmButtonText: "Yes, upload!",
            cancelButtonText: "Cancel",
            background: "#1e1f20", // Dark background color
            color: "#ffffff", // White text color
            customClass: {
                popup: "custom-popup",
                confirmButton: "custom-confirm-button",
                cancelButton: "custom-cancel-button",
            },
        });

        if (!confirmation.isConfirmed) {
            // User canceled the upload
            toast.info("Upload canceled.");
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            images.forEach((image) => {
                if (image.size > 5 * 1024 * 1024) {
                    throw new Error("One or more files exceed the 5MB size limit.");
                }
                formData.append("images", image);
            });

            const response = await axios.post(
                `${apiBaseUrl}/jobcard/upload/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200 && response.data.success) {
                toast.success("Images Appended successfully!");
                setTimeout(() => {
                    navigate("/admin/pending");
                }, 1000);
            } else {
                throw new Error(response.data?.message || "Failed to upload images.");
            }
        } catch (error) {
            console.error("Upload error:", error);
            if (error.response) {
                if (error.response.status === 400) {
                    toast.error(
                        error.response.data.message || "Invalid request. Please try again."
                    );
                } else if (error.response.status === 404) {
                    toast.error("Job card not found. Please verify the job card ID.");
                } else if (error.response.status === 500) {
                    toast.error("Server error. Please try again later.");
                } else {
                    toast.error("Unexpected error. Please try again.");
                }
            } else if (error.request) {
                toast.error("Network error. Check your connection.");
            } else {
                toast.error(error.message || "An error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };



    useEffect(() => {
        if (!id) {
            navigate("/admin");
            return;
        }
        getJobCardData();
    }, [id, navigate]);

    return (

        <div className="flex flex-col items-start w-full justify-start min-h-screen  px-4" >
            <div className="w-full  rounded-lg sm:p-8 p-1">
                {/* Header */}
                <h1 className="text-3xl font-bold mb-2 text-white">Append image</h1>
                <p className="text-white mb-6">Hi-Tech Engineering company</p>

                <div className=" border-dashed border border-white lg:p-10 p-4 sm:p-6 md:p-8 rounded-lg relative">
                    <p className="text-white text-2xl">
                        <b>Job Card Number:</b> {jobCardData.jobCardNumber}
                    </p>
                    {/* <p className="text-white  text-lg absolute right-12 top-12  ">
                        <b>In Date:</b>{" "}
                        {new Date(jobCardData?.InDate).toLocaleDateString()}
                    </p> */}

                    <div className="flex flex-col border border-dashed border-white px-8 py-10 rounded-lg lg:flex-row gap-8">


                        <div
                            {...getRootProps()}
                            className=" p-6 rounded-lg cursor-pointer  transition w-full"
                        >
                            <input {...getInputProps()} />
                            {images.length === 0 ? (
                                <p className="text-gray-500 text-center">
                                    Drag & drop images here, or click to select
                                </p>
                            ) : (
                                <div className="grid grid-cols-3 gap-4">
                                    {images.map((image, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt={`uploaded-${index}`}
                                                className="w-full h-60 object-cover rounded"
                                            />
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    removeImage(index);
                                                }}
                                                className="absolute top-2 right-2 bg-[#d65f63] rounded-full w-fit text-white text-center flex justify-center items-center transition rotate-45"
                                            >
                                                <GoPlusCircle size={20} color="white" />

                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {images.length < 5 && <div className="w-full flex justify-center items-center pt-3">
                                <div className="bg-[#d65f63] rounded-full w-fit text-white text-center flex justify-center items-center">
                                    <GoPlusCircle size={20} color="white" />
                                </div>
                            </div>}
                        </div>


                    </div>

                    {/* Buttons */}
                    <div className="flex items-center lg:justify-end justify-center space-x-4 mt-6">
                        {state?.type === "cancel" ? <div type="button"
                            className="sm:px-12 px-8 py-1 sm:py-2 border border-[#d65f63] rounded-lg text-[#d65f63] font-medium hover:bg-[#d65f63] transition duration-300 hover:text-white"
                            onClick={() => navigate(-1)}>
                            Cancel
                        </div> : <button
                            type="button"
                            className="sm:px-12 px-8 py-1 sm:py-2 border border-[#d65f63] rounded-lg text-[#d65f63] font-medium hover:bg-[#d65f63] transition duration-300 hover:text-white"
                            onClick={handleSkip}
                        >
                            Skip
                        </button>}
                        <button
                            type="submit"
                            onClick={(e) => handleUpload(e)}
                            className="sm:px-12 px-8 py-1 sm:py-2 bg-[#d65f63] hover:bg-[#3890d8] transition duration-300 text-white rounded-lg "
                            disabled={loading || images.length === 0}
                        >
                            {loading ? (
                                <ClipLoader color="#ffffff" size={20} />
                            ) : (
                                "Append"
                            )}
                        </button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AddImages;
