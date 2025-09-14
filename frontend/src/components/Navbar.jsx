import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); 

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
    setShowDropdown(false);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />

      {/* Desktop Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/"><li className="py-1">HOME</li></NavLink>
        <NavLink to="/doctors"><li className="py-1">ALL DOCTORS</li></NavLink>
        <NavLink to="/about"><li className="py-1">ABOUT</li></NavLink>
        <NavLink to="/contact"><li className="py-1">CONTACT</li></NavLink>
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-2 relative">
        {token && userData ? (
          <div className="flex items-center cursor-pointer">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={userData.image}
              alt=""
              onClick={() => setShowDropdown((prev) => !prev)} // 👈 toggle
            />
            <img
              className="w-2.5 ml-1"
              src={assets.dropdown_icon}
              alt=""
              onClick={() => setShowDropdown((prev) => !prev)}
            />

            {/* Click dropdown */}
            {showDropdown && (
              <div className="absolute top-12 right-0 min-w-48 bg-stone-100 rounded shadow flex flex-col gap-4 p-4 text-base font-medium text-gray-600 z-20">
                <p
                  onClick={() => { setShowDropdown(false); navigate('/my-profile'); }}
                  className="hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => { setShowDropdown(false); navigate('/my-appointments'); }}
                  className="hover:text-black"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />

        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? 'fixed w-full' : 'h-0 w-0'
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">HOME</NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">ALL DOCTORS</NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">ABOUT</NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">CONTACT</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
