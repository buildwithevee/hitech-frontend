import { Image } from "antd";
import { FaUser, FaPhone, FaMapMarkerAlt, FaTools, FaCalendarAlt, FaCog } from "react-icons/fa";
import { MdAttachFile, MdOutlineImage, MdOutlineDone } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const JobCardView = () => {


  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);



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
        const result = await axios.get(`http://localhost:3000/api/jobcard/get-a-single-card/${id}`);
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
    <div className="max-w-4xl mx-auto my-8 p-6 text-white bg-[#1e2125] shadow-lg rounded-lg border border-gray-700">
      {/* Header */}
      <div className="mb-6 flex items-center border-b border-gray-500 pb-4">
        <FaTools className="text-blue-500 text-2xl mr-2" />
        <h2 className="text-3xl font-bold">Job Card Details</h2>
      </div>

      {/* Customer Info */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">Customer Info</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <FaUser className="inline-block text-blue-500 mr-2" />
            <strong className="uppercase">Name:</strong> {data?.customerName}
          </div>
          <div className="flex">
            <FaMapMarkerAlt className="inline-block text-blue-500 mr-2" />
            <strong className="uppercase">Address:</strong>
            <p className="whitespace-pre-wrap">{data?.customerAddress}</p>
          </div>
          <div>
            <FaPhone className="inline-block text-blue-500 mr-2" />
            <strong className="uppercase">Phone:</strong> {data?.phoneNumber}
          </div>
          <div>
            <FaCalendarAlt className="inline-block text-blue-500 mr-2" />
            <strong className="uppercase">In Date:</strong> {new Date(data?.InDate).toLocaleDateString()}
          </div>
          <div>
            <MdOutlineDone className="inline-block text-blue-500 mr-2" />
            <strong className="uppercase">Job Card Number:</strong> {data?.jobCardNumber}
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">Specifications</h3>
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
            <strong>RPM:</strong> {data?.RPM}
          </div>
          <div>
            <strong>Type:</strong> {data?.Type}
          </div>
          <div>
            <strong>Frame:</strong> {data?.Frame}
          </div>
          <div>
            <strong>Serial No:</strong> {data?.SrNo}
          </div>
        </div>
      </div>

      {/* Dealer and Work Details */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
          Dealer and Work Details
        </h3>

        {/* Dealer Information */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">
            <FaUser className="inline-block text-blue-500 mr-2" />
            Dealer Information
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Dealer Name:</strong> {data?.DealerName}
            </div>
            <div>
              <strong>Dealer Number:</strong> {data?.DealerNumber}
            </div>
          </div>
        </div>

        {/* Work Details */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            <FaCog className="inline-block text-blue-500 mr-2" />
            Work Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h5 className="text-sm font-semibold text-blue-400">Works</h5>
              <p className="text-sm text-gray-300 whitespace-pre-wrap">{data?.works}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h5 className="text-sm font-semibold text-blue-400">Spares</h5>
              <p className="text-sm text-gray-300 whitespace-pre-wrap">{data?.spares}</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h5 className="text-sm font-semibold text-blue-400">Industrial Works</h5>
              <p className="text-sm text-gray-300 whitespace-pre-wrap">{data?.industrialworks}</p>
            </div>
          </div>
        </div>
      </div>


      {/* Attachments */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold border-b border-gray-500 pb-2 mb-4">
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
      </div>

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

      {/* Images */}
      <div>
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
    </div>
  );
};

export default JobCardView;