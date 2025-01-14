import { Image } from "antd";
import { FaUser, FaPhone, FaMapMarkerAlt, FaTools, FaCalendarAlt, FaCog } from "react-icons/fa";
import { MdAttachFile, MdOutlineImage, MdOutlineDone } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GrUserWorker } from "react-icons/gr";
// import { toPng } from "html-to-image";
import html2canvas from "html2canvas";
import { apiBaseUrl } from "../../config/constant";
const JobCardView = () => {


    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(id);
    const cardRef = useRef(null);
    // const downloadImage = () => {
    //     if (cardRef.current) {
    //         const node = cardRef.current;

    //         toPng(node, {
    //             cacheBust: true,
    //             width: node.scrollWidth + 20, // Include extra margin
    //             height: node.scrollHeight + 20,
    //             style: {
    //                 transform: 'scale(1)', // Prevent potential zoom issues
    //                 transformOrigin: 'top left',
    //             },
    //         })
    //             .then((dataUrl) => {
    //                 const link = document.createElement("a");
    //                 link.download = "job-card-details.png";
    //                 link.href = dataUrl;
    //                 link.click();
    //             })
    //             .catch((err) => {
    //                 console.error("Could not generate image", err);
    //             });
    //     }
    // };

    const downloadImageWithHtml2Canvas = () => {
        if (cardRef.current) {
            html2canvas(cardRef.current, {
                useCORS: true, // Support external resources
                scale: 2, // Increase image clarity
            }).then((canvas) => {
                const link = document.createElement("a");
                link.download = "job-card-details.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
            });
        }
    };





    const getStatusColor = (status) => {
        switch (status) {
            case "Pending":
                return "bg-yellow-300 text-yellow-900 font-semibold";
            case "Completed":
                return "bg-green-300 text-green-900 font-semibold";
            case "Cancelled":
                return "bg-red-300 text-red-900 font-semibold";
            default:
                return "bg-gray-300 text-gray-900 font-semibold";
        }
    };


    useEffect(() => {

        if (!id) {
            navigate("/admin/jobcard")
        }
        const fetchJobCardData = async () => {
            try {
                const result = await axios.get(`${apiBaseUrl}/jobcard/get-a-single-card/${id}`);
                console.log(result.data);

                if (result.status == 200) {
                    setData(result.data?.data)
                }
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong")

            }
        }

        fetchJobCardData();

    }, [])


    return (
        <>  <div className="relative top-0 right-0">
            <div className="text-center mt-4">
                <button
                    onClick={downloadImageWithHtml2Canvas}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                    Download as Image
                </button>
            </div>
        </div>
            <div className="flex gap-2 justify-center">
                {(data?.jobCardStatus === "Pending" || data?.jobCardStatus === "Completed" || data?.jobCardStatus === "Created") && <div className="relative top-0 right-0">
                    <div className="text-center mt-4">
                        <button
                            onClick={() => navigate(`/admin/edit-jobcard/${id}`)}
                            className="bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                        >
                            Edit Jobcard
                        </button>
                    </div>
                </div>}
                {(data?.jobCardStatus === "Created" || data?.jobCardStatus === "Pending" || data?.jobCardStatus === "Completed") && <div>
                    <div className="text-center mt-4">
                        <button
                            onClick={() => navigate(`/admin/complete-jobcard/${id}`, { state: { type: "cancel" } })}
                            className="bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                        >
                            Add Images
                        </button>
                    </div>
                </div>}
            </div>
            <div ref={cardRef} className="max-w-4xl mx-auto my-8 p-6 text-white bg-[#1e2125] shadow-lg rounded-lg border border-gray-700 relative">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between border-b border-gray-500 pb-4">
                    <div className="flex items-center">
                        <FaTools className="text-blue-500 text-2xl mr-2" />
                        <h2 className="text-3xl font-bold">Job Card Details</h2>
                    </div>
                    <div>
                        <MdOutlineDone className="inline-block text-blue-500 mr-2" />
                        <strong className="uppercase">JC No:</strong> {data?.jobCardNumber || "N/A"}
                    </div>
                </div>


                {/* Customer Info */}
                <div className="mb-8">
                    <div className="flex justify-between items-center border-b border-gray-500 pb-4 mb-4">
                        <h3 className="text-xl font-semibold  uppercase">Customer Info</h3>
                        <div>
                            <FaCalendarAlt className="inline-block text-blue-500 mr-2" />
                            {new Date(data?.InDate).toLocaleDateString()}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <FaUser className="inline-block text-blue-500 mr-2" />
                            <strong className="">Name:</strong> {data?.customerName || "N/A"}
                        </div>
                        <div className="flex">
                            <FaMapMarkerAlt className="inline-block text-blue-500 mr-2" />
                            <strong className="">Address:&nbsp;</strong>
                            <p className="whitespace-pre-wrap">{data?.customerAddress || "N/A"}</p>
                        </div>
                        <div>
                            <FaPhone className="inline-block text-blue-500 mr-2" />
                            <strong className="">Phone:</strong> {data?.phoneNumber || "N/A"}
                        </div>



                        {
                            data?.OutDate && <div>
                                <FaCalendarAlt className="inline-block text-blue-500 mr-2" />
                                <strong className="">Out Date:</strong> {new Date(data?.OutDate).toLocaleDateString()}
                            </div>
                        }
                    </div>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4 uppercase">Specifications</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <strong>Make:</strong> {data?.Make}
                        </div>
                        <div>
                            <strong>HP:</strong> {data?.HP || "N/A"}
                        </div>
                        <div>
                            <strong>KVA:</strong> {data?.KVA || "N/A"}
                        </div>
                        <div>
                            <strong>RPM:</strong> {data?.RPM || "N/A"}
                        </div>
                        <div>
                            <strong>Type:</strong> {data?.Type || "N/A"}
                        </div>
                        <div>
                            <strong>Frame:</strong> {data?.Frame || "N/A"}
                        </div>
                        <div>
                            <strong>Serial No:</strong> {data?.SrNo || "N/A"}
                        </div>
                    </div>
                </div>

                {/* Dealer and Work Details */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4 uppercase">
                        Dealer and Work Details
                    </h3>

                    {/* Dealer Information */}
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-4 uppercase">
                            <FaUser className="inline-block text-blue-500 mr-2 " />
                            Dealer Information
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <strong className="">Dealer Name:</strong> {data?.DealerName ? data?.DealerName : "N/A"}
                            </div>
                            <div>
                                <strong className="">Dealer Number:</strong>  {data?.DealerNumber ? data?.DealerNumber : "N/A"}
                            </div>
                        </div>
                    </div>

                    {/* Work Details */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            <FaCog className="inline-block text-blue-500 mr-2 uppercase" />
                            Work Details
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {data?.spares && <div className="bg-gray-800 p-4 rounded-lg shadow">
                                <h5 className="text-sm font-semibold text-blue-400">Works</h5>
                                <p className="text-sm text-gray-300 whitespace-pre-wrap">{data?.works}</p>
                            </div>}
                            {data?.spares && <div className="bg-gray-800 p-4 rounded-lg shadow">
                                <h5 className="text-sm font-semibold text-blue-400">Spares</h5>
                                <p className="text-sm text-gray-300 whitespace-pre-wrap">{data?.spares}</p>
                            </div>}
                            {data?.industrialworks && <div className="bg-gray-800 p-4 rounded-lg shadow">
                                <h5 className="text-sm font-semibold text-blue-400">Industrial Works</h5>
                                <p className="text-sm text-gray-300 whitespace-pre-wrap">{data?.industrialworks}</p>
                            </div>}
                            {data?.others && <div className="bg-gray-800 p-4 rounded-lg shadow">
                                <h5 className="text-sm font-semibold text-blue-400">Others </h5>
                                <p className="text-sm text-gray-300 whitespace-pre-wrap">{data?.others}</p>
                            </div>}
                        </div>
                    </div>
                </div>


                {/* Attachments */}
                {(data?.attachments && data?.attachments.length > 0) && <div className="mb-8">
                    <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4 uppercase">
                        <MdAttachFile className="inline-block text-blue-500 mr-2" /> Attachments
                    </h3>
                    <div>
                        {data?.attachments ? (
                            <ul className="list-disc list-inside">
                                {data?.attachments?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No attachments available.</p>
                        )}
                    </div>
                </div>}

                {/* Warranty and Status */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                    <div>
                        <IoWarningOutline className="inline-block text-blue-500 mr-2" />
                        <strong>Warranty:</strong> {data?.warranty ? "Yes" : "No"}
                    </div>
                    <div>
                        <strong>Status: </strong>
                        <span
                            className={`px-2 py-1 rounded text-sm font-semibold ${getStatusColor(data?.jobCardStatus)}`}
                        >
                            {data?.jobCardStatus}
                        </span>
                    </div>
                </div>
                {/* worker details  */}
                {data?.worker && <div className="mb-8 grid grid-cols-2 gap-4 items-center">
                    <div>
                        <GrUserWorker className="inline-block text-blue-500 mr-2" />
                        <strong>WorkerName:</strong> <span>{data?.worker ? data?.worker?.workerName : "N/A"}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <strong>WorkerImage: </strong>
                        <Image src={data?.worker?.workerImage} alt="" width={50} height={50} className="rounded-full" />
                    </div>
                </div>}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold border-b uppercase border-gray-500 pb-2 mb-4">
                        Invoice Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <strong className="">Invoice Number:</strong> {data?.invoiceNumber || "N/A"}
                        </div>
                        <div>
                            <strong className="">Invoice Date:</strong> {data?.invoiceDate
                                ? new Date(data?.invoiceDate).toLocaleDateString()
                                : "N/A"}
                        </div>
                    </div>
                </div>

                {/* Images */}
                {
                    (data?.images && data?.images.length > 0) && <div>
                        <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
                            <MdOutlineImage className="inline-block text-blue-500 mr-2" /> Images
                        </h3>
                        <div>
                            {data?.images ? (
                                <div className="flex space-x-4">
                                    {data?.images.map((img, index) => (
                                        <Image
                                            key={index}
                                            src={img.image}
                                            alt={`Job image ${index + 1}`}
                                            width={100} height={100}
                                            className="w-24 h-24 object-cover rounded shadow"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <p>No images available.</p>
                            )}
                        </div>
                    </div>
                }
            </div >
        </>
    );
};

export default JobCardView;