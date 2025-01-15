import axios from "axios";
import { useEffect, useRef, useState } from "react";
// Import styles for DatePicker
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../../style.css"
import { apiBaseUrl } from "../../config/constant";

const JobCardForm = () => {
  const [cusName, setCusName] = useState("");
  const [cusAddress, setCusAddress] = useState("");
  const [cusPhone, setCusPhone] = useState("");
  const [make, setMake] = useState("");
  const [planType, setPlanType] = useState("HP");
  const [hp, setHp] = useState("");
  const [kva, setKva] = useState("");
  const [rpm, setRpm] = useState("");
  const [type, setType] = useState("");
  const [frame, setFrame] = useState("");
  const [srNo, setSrNo] = useState("");
  const [dealerName, setDealerName] = useState("");
  const [dealerNumber, setDealerNumber] = useState("");
  const [works, setWorks] = useState("");
  const [spares, setSpares] = useState("");
  const [industrialWork, setIndustrialWork] = useState("");
  const [other, setOther] = useState("");
  const [AddOns, setAddOns] = useState([]);
  const [errors, setErrors] = useState({});
  const [warranty, setWarranty] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const phoneRef = useRef(null);
  const workRef = useRef(null);
  const spareRef = useRef(null);
  const industrialWorkRef = useRef(null);
  const otherRef = useRef(null);
  const makeRef = useRef(null);
  const rpmRef = useRef(null);
  const hpkvaRef = useRef(null);
  const typeRef = useRef(null);
  const frameRef = useRef(null);
  const srNoRef = useRef(null);
  const dealerNameRef = useRef(null);
  const dealerNumberRef = useRef(null);
  const warrantyRef = useRef(null)
  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        // Allow line breaks in the textarea
        return;
      }
      e.preventDefault(); // Prevent default form submission
      if (nextRef && nextRef.current) {
        nextRef.current.focus(); // Navigate to the next input
      }
    }
  };


  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setAddOns((prev) =>
      prev.includes(value)
        ? prev.filter((feature) => feature !== value)
        : [...prev, value]
    );
  };

  const handleClear = () => {
    setCusName("");
    setCusAddress("");
    setCusPhone("");
    setMake("");
    setPlanType("HP");
    setHp("");
    setKva("");
    setRpm("");
    setType("");
    setFrame("");
    setSrNo("");
    setDealerName("");
    setDealerNumber("");
    setWorks("");
    setSpares("");
    setIndustrialWork("");
    setOther("");
    setAddOns([]);
    setErrors({});
    setWarranty(false);
  }





  const validateFields = () => {
    const newErrors = {};
    if (!cusName || cusName.trim() === "") newErrors.cusName = "Customer name is required.";
    if (!cusAddress) newErrors.cusAddress = "Customer address is required.";
    if (!cusPhone) {
      newErrors.cusPhone = "Customer phone is required.";
    }
    // if (!srNo) newErrors.srNo = "Serial number is required.";
    if (!make) newErrors.make = "Make is required.";
    // Add more validation as needed
    if (!hp && !kva) {
      newErrors.hpkva = "HP/KVA  is required.";
    }
    // if (!rpm || rpm === "") {
    //   newErrors.rpm = "RPM is required.";  // Custom error message for rpm field
    // }
    return newErrors;
  };


  const onSubmitCard = async (e) => {
    setErrors({})
    e.preventDefault();
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return; // Stop form submission if there are validation errors
    }
    try {
      const response = await axios.post(`${apiBaseUrl}/jobcard`, {
        customerName: cusName,
        customerAddress: cusAddress,
        phoneNumber: cusPhone,
        Make: make,
        HP: hp,
        KVA: kva,
        RPM: rpm,
        Type: type,
        Frame: frame,
        SrNo: srNo,
        DealerName: dealerName,
        DealerNumber: dealerNumber,
        works: works,
        spares: spares,
        industrialworks: industrialWork,
        attachments: AddOns,
        warranty: warranty,
        others: other
      });

      console.log(response);

      if (response?.status === 201) {
        toast.success("Job card created successfully");
        navigate(`/admin/complete-jobcard/${response?.data?.data?._id}`, { state: { type: "add-image" } });
      }
    } catch (error) {
      console.error("Error while submitting:", error);

      if (error.response) {
        // Backend responded with a specific error
        const { status, data } = error.response;

        if (status === 400) {
          toast.error(data.message || "Validation error. Please check your input.");
        } else if (status === 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } else if (error.request) {
        // Request was made but no response received
        toast.error("No response from server. Please check your network.");
      } else {
        // Other errors
        toast.error("An unexpected error occurred.");
      }
    }



  }




  useEffect(() => {
    if (Object.keys(errors).length > 0 && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [errors]);



  //textarea 

  const handleInputChange = (e, setFunction, ref) => {
    setFunction(e.target.value);
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }



  return (
    <div className="flex flex-col items-start w-full justify-start min-h-screen  px-4" ref={formRef}>
      <div className="w-full  rounded-lg sm:p-8 p-1">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2 text-white">JobCard</h1>
        <p className="text-white mb-6">Hi-Tech Engineering company</p>

        {/* Form */}
        <form className=" border-dashed border border-white lg:p-10 p-4 sm:p-6 md:p-8 rounded-lg">
          {/* Plan Field */}
          <div className="flex flex-col border border-dashed border-white px-8 py-10 rounded-lg lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 flex flex-col gap-y-4">
              <div className="relative w-full">
                <label className="block text-white font-medium mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  value={cusName}
                  onChange={(e) => setCusName(e.target.value)}
                  className="w-full px-4 py-2 border bg-[#282a2c] text-white border-[#022213] rounded-lg focus:outline-[#220211]"
                  ref={nameRef}
                  onKeyDown={e => handleKeyDown(e, addressRef)}
                />
                <FaPen className="absolute right-3 top-10 text-[#d65f63] cursor-pointer" />
                {errors.cusName && <p className="text-red-500 text-sm">{errors.cusName}</p>}
              </div>
              <div className="relative w-full">
                <label className="block text-white font-medium mb-2">
                  Customer address
                </label>
                <textarea
                  placeholder="Enter address"
                  value={cusAddress}
                  onChange={(e) => handleInputChange(e, setCusAddress, addressRef)}
                  className="w-full px-4 text-start lg:py-4 py-2 border bg-[#282a2c] text-white border-[#022213] rounded-lg focus:outline-[#220211] resize-none no-scrollbar"
                  rows="4" // Adjust rows to control height
                  ref={addressRef}
                  onKeyDown={e => handleKeyDown(e, phoneRef)}
                ></textarea>
                <FaPen className="absolute right-3 top-11 text-[#d65f63] cursor-pointer" />
                {errors.cusAddress && <p className="text-red-500 text-sm">{errors.cusAddress}</p>}
              </div>
              <div className="relative w-full">
                <label className="block text-white font-medium mb-2">
                  Customer Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter phone"
                  value={cusPhone}
                  onChange={(e) => setCusPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white   rounded-lg focus:outline-[#220211] "
                  ref={phoneRef}
                  onKeyDown={e => handleKeyDown(e, workRef)}
                />
                <FaPen className="absolute right-3 top-10 text-[#d65f63] cursor-pointer" />
                {errors.cusPhone && <p className="text-red-500 text-sm">{errors.cusPhone}</p>}
              </div>
              <div className="relative w-full">
                <label className="block text-white font-medium mb-2">
                  Works
                </label>
                <textarea
                  placeholder="Enter Works"
                  value={works}
                  onChange={(e) => handleInputChange(e, setWorks, workRef)}
                  className="w-full px-4 text-start lg:py-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg  focus:outline-[#220211] resize-none no-scrollbar"
                  rows="4" // Adjust rows to control height
                  ref={workRef}
                  onKeyDown={e => handleKeyDown(e, spareRef)}
                ></textarea>
                <FaPen className="absolute right-3 top-11 text-[#d65f63] cursor-pointer" />
              </div>
              <div className="relative w-full">
                <label className="block text-white font-medium mb-2">
                  Spares
                </label>
                <textarea
                  placeholder="Enter Works"
                  value={spares}
                  onChange={(e) => handleInputChange(e, setSpares, spareRef)}
                  className="w-full px-4 text-start lg:py-4 py-2 border border-[#022213]  bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 resize-none no-scrollbar"
                  rows="4" // Adjust rows to control height
                  ref={spareRef}
                  onKeyDown={e => handleKeyDown(e, industrialWorkRef)}
                ></textarea>
                <FaPen className="absolute right-3 top-11 text-[#d65f63] cursor-pointer" />
              </div>
              <div className="relative w-full">
                <label className="block text-white font-medium mb-2">
                  Industrial works
                </label>
                <textarea
                  placeholder="Enter Works"
                  value={industrialWork}
                  onChange={(e) => handleInputChange(e, setIndustrialWork, industrialWorkRef)}
                  className="w-full px-4 text-start lg:py-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 resize-none no-scrollbar"
                  rows="4" // Adjust rows to control height
                  ref={industrialWorkRef}
                  onKeyDown={e => handleKeyDown(e, otherRef)}
                ></textarea>
                <FaPen className="absolute right-3 top-11 text-[#d65f63] cursor-pointer" />
              </div>

              <div className="flex flex-col">
                <label className="block text-white font-medium mb-2">Select Additional fittings</label>

                <div className="flex flex-col">
                  <div className="flex flex-row gap-4">
                    <div className="flex items-center ">
                      <input
                        type="checkbox"
                        id="fan"
                        name="features"
                        value="fan"
                        checked={AddOns.includes("fan")}
                        onChange={(e) => handleCheckboxChange(e)}
                        className="mr-2"
                      />
                      <label htmlFor="fan" className="text-white">Fan</label>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="fan_cover"
                        name="features"
                        value="fan cover"
                        checked={AddOns.includes("fan cover")}
                        onChange={(e) => handleCheckboxChange(e)}
                        className="mr-2"
                      />
                      <label htmlFor="fan_cover" className="text-white">Fan cover</label>
                    </div>
                    <div className="flex items-center ">
                      <input
                        type="checkbox"
                        id="terminal"
                        name="features"
                        value="terminal"
                        checked={AddOns.includes("terminal")}
                        onChange={(e) => handleCheckboxChange(e)}
                        className="mr-2"
                      />
                      <label htmlFor="terminal" className="text-white">Terminal</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="terminal_box"
                        name="features"
                        value="terminal box"
                        checked={AddOns.includes("terminal box")}
                        onChange={(e) => handleCheckboxChange(e)}
                        className="mr-2"
                      />
                      <label htmlFor="terminal_box" className="text-white">Terminal Box</label>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="flex items-center ">
                      <input
                        type="checkbox"
                        id="pulli"
                        name="features"
                        value="pulli"
                        checked={AddOns.includes("pulli")}
                        onChange={(e) => handleCheckboxChange(e)}
                        className="mr-2"
                      />
                      <label htmlFor="pulli" className="text-white">Pulli</label>
                    </div>
                    <div className="flex items-center ">
                      <input
                        type="checkbox"
                        id="avr"
                        name="features"
                        value="AVR"
                        checked={AddOns.includes("AVR")}
                        onChange={(e) => handleCheckboxChange(e)}
                        className="mr-2"
                      />
                      <label htmlFor="avr" className="text-white">AVR</label>
                    </div>
                    <div className="flex items-center ">
                      <input
                        type="checkbox"
                        id="diode"
                        name="features"
                        value="diode"
                        checked={AddOns.includes("diode")}
                        onChange={(e) => handleCheckboxChange(e)}
                        className="mr-2"
                      />
                      <label htmlFor="diode" className="text-white">Diode</label>
                    </div>
                    <div className="flex items-center ">
                      <input
                        type="checkbox"
                        id="grill"
                        name="features"
                        value="grill"
                        checked={AddOns.includes("grill")}
                        onChange={(e) => handleCheckboxChange(e)}
                        className="mr-2"
                      />
                      <label htmlFor="grill" className="text-white">Grill</label>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-y-1.5">
              <div className="relative w-full">
                <label className="block text-white font-medium mb-2">
                  Other
                </label>
                <textarea
                  placeholder="Enter Other"
                  value={other}
                  onChange={e => handleInputChange(e, setOther, otherRef)}
                  className="w-full px-4 text-start lg:py-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 resize-none no-scrollbar"
                  rows="4" // Adjust rows to control height
                  ref={otherRef}
                  onKeyDown={e => handleKeyDown(e, makeRef)}
                ></textarea>
                <FaPen className="absolute right-3 top-11 text-[#d65f63] cursor-pointer" />
              </div>

              <div className="relative w-full mt-2.5">
                <label className="block text-white font-medium mb-2">
                  Make
                </label>
                <input
                  type="text"
                  placeholder="Enter make"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300"
                  ref={makeRef}
                  onKeyDown={e => handleKeyDown(e, hpkvaRef)}
                />
                <FaPen className="absolute right-3 top-10 text-[#d65f63] cursor-pointer" />
                {errors.make && <p className="text-red-500 text-sm">{errors.make}</p>}

              </div>
              <div className="relative w-full pt-1">
                <label className="flex items-center gap-5 text-white font-medium mb-2 ">
                  HP/KVA <div className="flex items-center gap-2 justify-center">
                    <div className="flex items-center justify-center ">
                      <input
                        type="radio"
                        id="HP"
                        name="planType"
                        value="HP"
                        checked={planType === "HP"}
                        onChange={(e) => setPlanType(e.target.value)}
                        className="mr-2 "

                      />
                      <label htmlFor="HP" className="text-white">HP</label>
                    </div>

                    <div className="flex items-center ">
                      <input
                        type="radio"
                        id="KVA"
                        name="planType"
                        value="KVA"
                        checked={planType === "KVA"}
                        onChange={(e) => setPlanType(e.target.value)}
                        className="mr-2"

                      />
                      <label htmlFor="KVA" className="text-white">KVA</label>
                    </div>
                  </div>
                </label>
                <input
                  type="number"
                  placeholder={planType === "HP" ? "Enter HP" : "Enter KVA"}
                  value={planType === "HP" ? hp : kva}
                  onChange={(e) => {
                    planType === "HP" ? setHp(e.target.value) : setKva(e.target.value)
                  }}
                  className="w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300 no-spinners"
                  ref={hpkvaRef}
                  onKeyDown={e => handleKeyDown(e, rpmRef)}
                />
                <FaPen className="absolute right-3 top-12 text-[#d65f63] cursor-pointer" />
                {errors.hpkva && <p className="text-red-500 text-sm">{errors.hpkva}</p>}

              </div>
              <div className="relative w-full mt-2.5">
                <label className="block text-white font-medium mb-2">
                  RPM
                </label>
                <select
                  value={rpm}
                  onChange={(e) => setRpm(e.target.value)}
                  className="w-full px-4 py-2 border border-[#022213] rounded-lg bg-[#282a2c] text-white focus:outline-gray-300"
                  ref={rpmRef}
                  onKeyDown={e => handleKeyDown(e, typeRef)}
                >
                  <option value="">Select RPM</option> {/* Default option */}
                  <option value="710">710 RPM</option>
                  <option value="960">960 RPM</option>
                  <option value="1440">1440 RPM</option>
                  <option value="2800">2800 RPM</option>
                </select>
                {errors.rpm && <p className="text-red-500 text-sm">{errors.rpm}</p>}
              </div>
              <div className="relative w-full mt-2.5">
                <label className="block text-white font-medium mb-2">
                  Type
                </label>
                <input
                  type="text"
                  placeholder="Enter Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300"
                  ref={typeRef}
                  onKeyDown={e => handleKeyDown(e, frameRef)}
                />
                <FaPen className="absolute right-3 top-10 text-[#d65f63] cursor-pointer" />
              </div>
              <div className="relative w-full mt-2.5">
                <label className="block text-white font-medium mb-2">
                  Frame
                </label>
                <input
                  type="text"
                  placeholder="Enter Frame"
                  value={frame}
                  onChange={(e) => setFrame(e.target.value)}
                  className="w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300"
                  ref={frameRef}
                  onKeyDown={e => handleKeyDown(e, srNoRef)}

                />
                <FaPen className="absolute right-3 top-10 text-[#d65f63] cursor-pointer" />
              </div>
              <div className="relative w-full mt-2.5">
                <label className="block text-white font-medium mb-2">
                  Sr.no
                </label>
                <input
                  type="text"
                  placeholder="Enter Sr.no"
                  value={srNo}
                  onChange={(e) => setSrNo(e.target.value)}
                  className="w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300"
                  ref={srNoRef}
                  onKeyDown={e => handleKeyDown(e, dealerNameRef)}

                />
                <FaPen className="absolute right-3 top-10 text-[#d65f63] cursor-pointer" />
                {/* {errors.srNo && <p className="text-red-500 text-sm">{errors.srNo}</p>} */}
              </div>
              <div className="relative w-full mt-2.5">
                <label className="block text-white font-medium mb-2">
                  Dealer Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Dealer name"
                  value={dealerName}
                  onChange={(e) => setDealerName(e.target.value)}
                  className="w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300"
                  ref={dealerNameRef}
                  onKeyDown={e => handleKeyDown(e, dealerNumberRef)}
                />
                <FaPen className="absolute right-3 top-10 text-[#d65f63] cursor-pointer" />
              </div>
              <div className="relative w-full mt-2.5">
                <label className="block text-white font-medium mb-2">
                  Dealer Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Dealer Number"
                  value={dealerNumber}
                  onChange={(e) => setDealerNumber(e.target.value)}
                  className="w-full px-4 py-2 border border-[#022213] bg-[#282a2c] text-white rounded-lg focus:outline-gray-300"
                  ref={dealerNumberRef}
                  onKeyDown={e => handleKeyDown(e, warrantyRef)}
                />
                <FaPen className="absolute right-3 top-10 text-[#d65f63] cursor-pointer" />
              </div>
              <div className="text-lg pt-4">
                <label className="flex items-center text-white">
                  Does the product have a warranty?
                  <input
                    type="checkbox"
                    checked={warranty}
                    onChange={(e) => setWarranty(e.target.checked)}
                    className="hidden peer"
                    ref={warrantyRef}
                  />
                  <span className="w-6 h-6 ml-2 border-2 border-white rounded-md cursor-pointer peer-checked:before:content-['✅'] peer-checked:before:text-[#022213] flex items-center justify-center transition-all duration-200">
                    {/* The checkbox box */}
                  </span>
                </label>
              </div>


            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center lg:justify-end justify-center space-x-4 mt-6">
            <button
              type="button"
              className="sm:px-12 px-8 py-1 sm:py-2 border border-[#d65f63] rounded-lg text-[#d65f63] font-medium hover:bg-[#d65f63] transition duration-300 hover:text-white"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="submit"
              onClick={(e) => onSubmitCard(e)}
              className="sm:px-12 px-8 py-1 sm:py-2 bg-[#d65f63] hover:bg-[#3890d8] transition duration-300 text-white rounded-lg "
            >
              Submit
            </button>
          </div>
        </form>

        {/* Add Package Button */}

      </div>
    </div>
  );
};

export default JobCardForm;
