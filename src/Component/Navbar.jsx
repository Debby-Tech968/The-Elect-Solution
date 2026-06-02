import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../assets/Container.png";
import Btn from "./Btn";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#004182] border-b-2 border-amber-700 pb-1"
      : "text-[#475569]";

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 shadow-md z-50">
      <div className="flex justify-between items-center px-6 lg:px-10 py-4">
        {/* LOGO */}
        <img src={navLogo} alt="logo" className="h-10" />

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 items-center font-semibold text-sm">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* DESKTOP BUTTON */}
        <NavLink to="/getstarted" className="hidden md:block">
          <Btn
            text="Get Started"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          />
        </NavLink>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-3xl text-[#004182]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-50 px-6 flex flex-col pb-6 space-y-4">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/services"
            className={linkClass}
          >
            Services
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={linkClass}
          >
            About
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/portfolio"
            className={linkClass}
          >
            Portfolio
          </NavLink>

          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className={linkClass}
          >
            Contact
          </NavLink>

          {/* FIXED ROUTE */}
          <NavLink onClick={() => setOpen(false)} to="/getstarted" className="w-full">
            <div className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
              Get Started
            </div>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
