import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../App.css";

import clossingIcon from '../assets/clossingIcon.png'
import companyIcon from '../assets/hitech.png';
import Aos from "aos";
import "aos/dist/aos.css";

import { PiBagFill } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import img2 from '../assets/Vector.png'
import { BsBagPlusFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { MdPendingActions, MdSpaceDashboard } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineAssignmentReturned } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdIncompleteCircle } from "react-icons/md";
const AdminAside = ({ open, setOpen }) => {
  const location = useLocation();
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  const Menus = [
    { title: "Create Jobcard", path: "/admin/add-jobcard", icon: <BsBagPlusFill /> },
    { title: "Pending", path: "/admin/pending", icon: <MdPendingActions /> },
    { title: "Completed", path: "/admin/completed", icon: <MdIncompleteCircle /> },
    { title: "Billed", path: "/admin/billed", icon: <AiOutlineFileDone /> },
    { title: "Returned", path: "/admin/returned", icon: <MdOutlineAssignmentReturned /> },
    { title: "Jobcard", path: "/admin/jobcard", icon: <PiBagFill /> },
    { title: "Overview", path: "/admin", icon: <MdSpaceDashboard /> },
    // { title: "User", path: "/admin/users", icon: <FaUser /> },
    { title: "Workers", path: "/admin/workers", icon: <GrUserWorker /> },
    // { title: "Report", path: "/admin/reports", icon: <BiSolidReport /> },
    // { title: "Notification", path: "/admin/notifications", icon: <IoIosNotifications /> },
    // { title: "Settings", path: "/admin/settings", icon: <IoSettings /> },
  ];

  // const AdminMenus = [
  //   { title: "All Members", path: "/admin/all-members", icon: <PiUsersFourFill /> },
  //   { title: "Rejoining Balance", path: "/admin/rejoining-balance", icon: <FaWallet /> },
  //   { title: "Auto Pool", path: "/admin/auto-pool", icon: <MdAutoAwesomeMotion /> },
  // ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen]);

  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <div className={`z-50 relative ${window.innerWidth >= 768 ? "static" : ""}`}>
      <div
        className={`z-50  sidebar ${open ? "sidebar-open  shadow-xl" : "sidebar-closed w-24 relative "
          } bg-[#282a2c] text-white h-screen py-5 px-3  pt-12  z-50  ${window.innerWidth < 768 ? "fixed top-0 p-6 " : ""
          }`}
      >



        <div className="flex gap-x-4 items-center">
          {/* <div className='flex flex-row justify-center items-center text-2xl xs:text-3xl font-bold text-black mb-10 sm:mb-12'>
                    <span>Logo</span>
                    <img src={img2} className='xs:w-auto w-10' alt="Company logo" aria-label="Company logo" />
                    <span>Ipsum</span>
                </div> */}
          <div className={`flex justify-center items-center  tex-xl sm:text-2xl pl-2 sm:pl-0 md:pl-3 font-bold -mb-6 md:-mb-0`}>
            {/* <span className={`${!open ? 'hidden ' : ''}`}>Logo</span> */}
            <img src={companyIcon} className={`${open ? "w-64" : "w-28"}`} alt="Company logo" aria-label="Company logo" onClick={() => setOpen(prev => !prev)} />
            {/* <span className={`${!open ? 'hidden ' : ''}`}>Ipsum</span> */}
          </div>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li

              key={index}
              className={`flex rounded-md p-2 pl-4 font-normal cursor-pointer hover:bg-light-white text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} 
            ${location.pathname === Menu.path ? "text-[#d65f63]" : "text-white"}`}
              onClick={handleMenuClick}
            >
              <Link to={Menu.path} className="flex items-center gap-x-4 mt-3 ">
                <span className={`${!open ? 'pl-3 text-2xl' : 'text-xl'}`}>
                  {Menu.icon}
                </span>
                <span className={`${!open && "hidden"} text-base origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>

          ))}


        </ul>

        {/* Admin Section */}
        {/* <h2 className={`${!open && "hidden"} origin-left duration-200 text-gray-600 font-semibold bg-gray-200 py-1 px-2 rounded-md mt-3 ml-1`}>Admin</h2>
        <ul className="pt-2">
          {AdminMenus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-800 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${location.pathname === Menu.path && "bg-slate-300"}`}
              onClick={handleMenuClick}
            >
              <Link to={Menu.path} className="flex items-center gap-x-4">
                <span className="text-xl">{Menu.icon}</span>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default AdminAside;
