import { useState, useRef, useEffect } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, isToday } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";

import { TiUser } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import img from '../assets/adminImg.png'
import logoutImg from '../assets/logout.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { handleSearchTerm, handleWarranty } from "../store/searchSlice";
const Header = ({ open, setOpen }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [calendarVisibleInDropdown, setCalendarVisibleInDropdown] = useState(false);
  const [hrTeamDropdownVisible, setHrTeamDropdownVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [logout, setLogout] = useState(false)
  // Refs for dropdowns
  const dropdownRef = useRef(null);
  const calendarDropdownRef = useRef(null); // Separate ref for calendar dropdown
  const hrTeamDropdownRef = useRef(null); // Separate ref for HR Team dropdown
  const navigate = useNavigate()
  const location = useLocation();
  const searchTerm = useSelector(state => state.searchTerm)
  const warranty = useSelector(state => state.warranty)
  const dispatch = useDispatch()
  console.log(location);


  //hanlde logout button
  const handleLogoutButton = () => {
    console.log("::::::::::::::::::::::::::::");

    setLogout(true)
  }


  const toggleProfileModal = () => {
    setProfileModalVisible(!profileModalVisible);
  };

  // Handle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Toggle calendar visibility in the dropdown
  const toggleCalendarInDropdown = () => {
    setCalendarVisibleInDropdown((prevState) => !prevState);
  };

  // Handle HR Team dropdown visibility
  const toggleHrTeamDropdown = () => {
    setHrTeamDropdownVisible((prevState) => !prevState);
  };

  // Handle date selection in the calendar
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setCalendarVisibleInDropdown(false); // Close the calendar after selecting a date
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
      if (calendarDropdownRef.current && !calendarDropdownRef.current.contains(event.target)) {
        setCalendarVisibleInDropdown(false); // Close calendar when clicking outside
      }
      if (hrTeamDropdownRef.current && !hrTeamDropdownRef.current.contains(event.target)) {
        setHrTeamDropdownVisible(false); // Close HR Team dropdown when clicking outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handlePassword = () => {
    setProfileModalVisible(false)
    navigate('/admin/change-password')
  }
  return (
    <header className="bg-[#1e1f20] py-4 pl-72 text-gray-900 flex justify-end lg:justify-between pr-6 lg:pr-0 items-center w-full fixed top-0 z-50">
      <div className="items-center gap-4 relative hidden lg:flex">
        <div className="absolute -left-8 top-0" onClick={() => navigate(-1)}><IoArrowUndoCircleOutline color="#3890d8" size={26} /></div>

        {/* Calendar Button for larger screens */}


        {/* HR Team Button */}

      </div>

      {/* Search bar, notification, and user profile */}
      <div className="relative flex items-center gap-x-4 lg:gap-x-8 pr-0 sm:pr-2 lg:pr-8">

        {(location.pathname === "/admin/jobcard" || location.pathname === "/admin/pending" || location.pathname === "/admin/returned" || location.pathname === "/admin/completed") && (<div className="flex gap-5 items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" placeholder="warrenty" value={warranty} onChange={() => dispatch(handleWarranty(!warranty))} />
            <div className="text-white">warranty</div>
          </div>
          <div className="relative lg:w-80 w-52 flex">

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => dispatch(handleSearchTerm(e.target.value))}
              placeholder="Search anything........."
              className="px-4 py-2 pl-2 border rounded-lg focus:outline-none w-full bg-[#3d3f42] text-white"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <CiSearch
                className="text-black hover:text-gray-500 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                size={22}
              />
            </div>
          </div>
        </div>)
        }
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-50"
          style={{ zIndex: 1000 }}
        >
          <ImMenu size={24} />
        </button>

        <button className="items-center hidden md:flex bg-[#282a2c] text-[#d65f63] shadow-md hover:bg-[#3890d8] hover:text-white p-2 rounded-lg -mr-2">
          <FaBell size={20} />
        </button>
        <button
          className="items-center hidden md:flex shadow-md bg-[#282a2c] text-[#d65f63] hover:bg-[#3890d8] hover:text-white p-2 rounded-lg"
          onClick={toggleProfileModal}
        >
          <TiUser size={24} />
        </button>



        {/* Profile Modal */}
        {profileModalVisible && (
          <>
            {logout ? (
              <div className="absolute  top-12 mt-2 right-8 bg-white border border-gray-200 rounded-lg shadow-lg w-72 p-6 z-50">
                <div
                  onClick={toggleProfileModal}
                  className="absolute top-2 right-2 text-2xl rounded-md border-2 border-gray-300 text-gray-600 hover:text-gray-900"
                >
                  <IoIosClose />
                </div>

                {/* Dummy Logout Image */}
                <div className="flex flex-col items-center ">
                  <img src={logoutImg} alt="Logout" className="w-22 h-22 rounded-full mb-4" />
                  <div className="justify-center items-center text-center text-lg font-semibold text-black">
                    <p className="">Are You Sure You Want  </p>
                    <p className="-mt-2">to Logout  </p>
                  </div>


                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-x-2 mt-12  text-base">
                  <button
                    onClick={() => setLogout(false)} // Allow going back to profile view
                    className="bg-white font-medium border px-10 text-gray-900 py-2 rounded-lg hover:bg-[#72B800]"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-[#022213] text-white px-10 py-2 rounded-lg hover:bg-[#72B800]"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="absolute top-12 mt-2  right-8 bg-white border border-gray-200 rounded-lg shadow-lg w-72 p-6 z-50">
                <div
                  onClick={toggleProfileModal}
                  className="absolute top-2 right-2 text-2xl rounded-md border-2 border-gray-300 text-gray-600 hover:text-gray-900"
                >
                  <IoIosClose />
                </div>

                {/* Dummy Profile Image */}
                <div className="flex flex-col items-center mb-4">
                  <img src={img} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
                  <h2 className="text-lg font-semibold">Super Admin</h2>
                  <p className="text-gray-500">CEO at HRM</p>
                  <p className="text-gray-400">@superadmin900@gmail.com</p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-6 text-sm ">
                  <button
                    onClick={handleLogoutButton} // Set the logout state to true
                    className="bg-[#022213] text-white px-4 py-2 rounded-lg hover:bg-[#72B800]"
                  >
                    Log out
                  </button>
                  <button onClick={handlePassword} className="bg-[#022213] text-white px-4 py-2 rounded-lg hover:bg-[#72B800]">
                    Change password
                  </button>
                </div>
              </div>
            )}
          </>
        )}











        {/* User Profile Button */}
        <div className="relative lg:hidden" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="flex items-center gap-2">
            <FaUserCircle size={24} />
          </button>

          {/* Dropdown for Profile */}
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul className="py-2">
                <div className="flex flex-col items-center mb-4">
                  <img src={img} alt="Profile" className="w-12 h-12 rounded-full mb-4" />
                  <h2 className="text-lg font-semibold">Super Admin</h2>
                  {/* <p className="text-gray-500">CEO at HRM</p> */}
                  <p className="text-gray-400">@superadmin900@gmail.com</p>
                </div>
                <div className="md:block" ref={calendarDropdownRef}>
                  <button
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onClick={toggleCalendarInDropdown}
                  >            <FaCalendarAlt size={20} />
                    <span className="">
                      {selectedDate === null || isToday(selectedDate)
                        ? "Today"
                        : format(selectedDate, "MM/dd/yyyy")}
                    </span>
                  </button>

                  {/* Calendar dropdown (shown when clicked in dropdown) */}
                  {calendarVisibleInDropdown && (
                    <div className="absolute top-10 right-0   z-50 p-4 bg-white border rounded-lg shadow-lg">
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        inline
                      />
                    </div>
                  )}
                </div>

                <div className="relative flex flex-col" ref={hrTeamDropdownRef}>
                  <button
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                    onClick={toggleHrTeamDropdown}
                  >            <HiMiniUsers size={20} />
                    <span className="">HR Team</span>
                  </button>

                  {/* HR Team Dropdown options */}
                  {hrTeamDropdownVisible && (
                    <ul className=" w-48 px-6 py-2 bg-gray-50 " onClick={() => {
                      // Handle the click event for "Team Member 1"
                      setHrTeamDropdownVisible(false); // Close dropdown after clicking
                    }}
                    >
                      <li className="py-1 flex items-center">Team Member 1</li>
                      <li className="py-1 flex items-center">Team Member 2</li>
                    </ul>
                  )}
                </div>

                <li className="px-4 py-2 hover:bg-[#3890d8] cursor-pointer flex items-center gap-2">
                  <FaBell size={20} />
                  <span>Notifications</span>
                </li>

                {/* <li
                  onClick={handleProfile}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <FaUserCircle size={20} />
                  <span>Profile</span>
                </li> */}

                <div className="flex justify-between mt-2 text-xs px-2 ">
                  <button
                    onClick={handleLogoutButton} // Set the logout state to true
                    className="bg-[#022213] text-white px-4 py-2 rounded-lg hover:bg-[#72B800]"
                  >
                    Log out
                  </button>
                  <button onClick={handlePassword} className="bg-[#022213] text-white px-4 py-2 rounded-lg hover:bg-[#72B800]">
                    Change password
                  </button>

                  {logout && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                      <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg w-72 p-6">
                        <div
                          onClick={() => setLogout(false)}
                          className="absolute top-2 right-2 text-2xl rounded-md border-2 border-gray-300 text-gray-600 hover:text-gray-900 cursor-pointer"
                        >
                          <IoIosClose />
                        </div>

                        {/* Logout Image and Text */}
                        <div className="flex flex-col items-center">
                          <img src={logoutImg} alt="Logout" className="w-22 h-22 rounded-full mb-4" />
                          <div className="justify-center items-center text-center text-lg font-semibold text-black">
                            <p>Are You Sure You Want</p>
                            <p className="-mt-2">to Logout</p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-center gap-x-6 mt-12 text-base">
                          <button
                            onClick={() => setLogout(false)} // Allow going back to profile view
                            className="bg-white font-medium border px-6 py-2 text-gray-900 rounded-lg hover:bg-[#72B800]"
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-[#022213] text-white px-6 py-2 rounded-lg hover:bg-[#72B800]"
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}



                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


