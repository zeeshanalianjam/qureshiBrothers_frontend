import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container mx-auto py-[30px] fixed top-0 left-0 right-0 z-50">
      <div className="w-full bg-black/40 backdrop-blur-[4px] rounded-[45px] border border-[#0000001A] px-[111px]">
        <div className="container flex justify-between items-center  mx-auto">
          {/* logo */}
          <div className="text-white py-1">
            <Link to="/" className="flex flex-col items-center justify-center">
              <img className="w-[50px]" src={logo} alt="logo" />
              <h2 className="text"><span className="text-[#fae92b]">Qureshi</span>  Brothers</h2>
            </Link>
          </div>

          {/* menu icons */}
          <div>
            <ul className="flex justif-between items-center gap-2 text-[#fff] font-bold text-sm">
              <NavLink
                to="/"
                className={({ isActive }) => ` ${isActive
                    ? "bg-gradient-to-tr from-white via-[#009969]/30 to-white  text-[#fae92b] rounded-3xl"
                    : "hover:bg-gradient-to-tr from-white via-[#009969]/30 to-white hover:text-black transition-all duration-300  rounded-3xl"}  px-4 py-1`}
              >
                <li className="">Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => ` ${isActive
                    ? "bg-gradient-to-tr from-white via-[#009969]/30 to-white  text-[#fae92b] rounded-3xl"
                    : "hover:bg-gradient-to-tr from-white via-[#009969]/30 to-white hover:text-black transition-all duration-300  rounded-3xl"}  px-4 py-1`}
              >
                <li>About Us</li>
              </NavLink>
              <NavLink
                to="/services"
                 className={({ isActive }) => ` ${isActive
                   ? "bg-gradient-to-tr from-white via-[#009969]/30 to-white  text-[#fae92b] rounded-3xl"
                    : "hover:bg-gradient-to-tr from-white via-[#009969]/30 to-white hover:text-black transition-all duration-300  rounded-3xl"}  px-4 py-1`}
              >
                <li>Services</li>
              </NavLink>
              <NavLink
                to="/clients"
                 className={({ isActive }) => ` ${isActive
                   ? "bg-gradient-to-tr from-white via-[#009969]/30 to-white  text-[#fae92b] rounded-3xl"
                    : "hover:bg-gradient-to-tr from-white via-[#009969]/30 to-white hover:text-black transition-all duration-300  rounded-3xl"}  px-4 py-1`}
              >
                <li>Clients</li>
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => ` ${isActive
                    ? "bg-gradient-to-tr from-white via-[#009969]/30 to-white  text-[#fae92b] rounded-3xl"
                    : "hover:bg-gradient-to-tr from-white via-[#009969]/30 to-white hover:text-black transition-all duration-300  rounded-3xl"}  px-4 py-1`}
              >
                <li>Blog</li>
              </NavLink>
            </ul>
          </div>

          {/* buttons */}
          <div>
            {/* <button className="relative overflow-hidden bg-[#28BC34] px-4 py-1 rounded-3xl font-bold text-black group text-sm">
              <span className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-tr from-white via-[#009969]/30 to-white group-hover:opacity-100"></span>

              <span className="relative z-10">Contact Us</span>
            </button> */}
            <button className="bg-gradient-to-tr from-white via-[#009969]/30 to-white hover:bg-gradient-to-br hover:from-white hover:via-[#009969]/30 hover:to-white hover:text-black transition-all duration-300  hover:bg-[#28BC34] px-4 py-1 rounded-3xl font-semibold text-black text-sm">
           Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
