import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../assets/Container.png";
import Btn from "./Btn";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#004182] border-b-2 border-amber-700 pb-1"
      : "text-[#475569]";

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 shadow-md z-500">
      <Wrapper>
        <div className="flex justify-between items-center py-4 xl:px-10">
          {/* LOGO */}
          <img src={navLogo} alt="logo" className="h-10" />

          {/* DESKTOP LINKS (ONLY LG + XL) */}
          <div className="hidden lg:flex gap-8 xl:gap-10 items-center font-semibold text-sm">
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

          {/* DESKTOP BUTTON (ONLY LG + XL) */}
          <div className="hidden lg:block">
            <NavLink to="/getstarted">
              <Btn
                text="Get Started"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4  py-2 rounded-lg"
              />
            </NavLink>
          </div>

          {/* HAMBURGER (MOBILE + MD) */}
          <button
            className="lg:hidden text-3xl text-[#004182]"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE + MD MENU */}
        {open && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-50 shadow-lg px-6 py-6 flex flex-col gap-5">
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/portfolio"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>

            <NavLink to="/getstarted" onClick={() => setOpen(false)}>
              <div className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg text-center">
                Get Started
              </div>
            </NavLink>
          </div>
        )}
      </Wrapper>
    </nav>
  );
};

export default Navbar;
