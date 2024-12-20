import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminAside from "./AdminAside"; // Sidebar component
import Header from "./Header";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const outletRef = useRef(null); // Create a reference for the Outlet section
  const location = useLocation(); // Get current route location

  useEffect(() => {
    // Scroll to the top of the Outlet section whenever the route changes
    if (outletRef.current) {
      outletRef.current.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="flex flex-col h-screen">
      <Header open={open} setOpen={setOpen} />
      <div className="flex flex-1 overflow-y-auto">
        <AdminAside
          className={`z-50 ${open ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
          open={open}
          setOpen={setOpen}
        />
        <div
          ref={outletRef} // Attach the reference here
          className="flex-1 overflow-y-auto bg-[#1e1f20] h-screen pt-16"
        >
          <Outlet /> {/* This renders the nested route content */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
