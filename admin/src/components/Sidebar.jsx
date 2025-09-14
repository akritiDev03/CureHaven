import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);
  const [open, setOpen] = useState(false);

  if (!aToken && !dToken) return null; // agar login nahi hai to sidebar hi mat dikhao

  return (
    <div className="flex">
      {/* Hamburger button - sirf mobile ke liye */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-3 border-b w-full text-left bg-white"
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen bg-white border-r shadow-lg z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <ul className="text-[#515151] mt-5 w-60">
          {/* --------- Admin Sidebar --------- */}
          {aToken && (
            <>
            <NavLink
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
            to={"/admin-dashboard"}
          >
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
            to={"/all-appointments"}
          >
            <img src={assets.appointment_icon} alt="" />
            <p>Appointments</p>
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
            to={"/add-doctor"}
          >
            <img src={assets.add_icon} alt="" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
            to={"/doctor-list"}
          >
            <img src={assets.people_icon} alt="" />
            <p>Doctors List</p>
          </NavLink>
        </>
        )}

          {/* --------- Doctor Sidebar --------- */}

            {dToken && (
            <>
              <NavLink
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                    isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
                  }`
                }
                to={"/doctor-dashboard"}
              >
                <img src={assets.home_icon} alt="" />
                <p>Dashboard</p>
              </NavLink>

              <NavLink
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                    isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
                  }`
                }
                to={"/doctor-appointments"}
              >
                <img src={assets.appointment_icon} alt="" />
                <p>Appointments</p>
              </NavLink>

              <NavLink
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${
                    isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
                  }`
                }
                to={"/doctor-profile"}
              >
                <img src={assets.people_icon} alt="" />
                <p>Profile</p>
              </NavLink>
            </>
          )}


        </ul>
      </div>

      {/* Overlay (mobile ke liye jab sidebar open ho) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
