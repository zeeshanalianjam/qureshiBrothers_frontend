import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  // Common style for active and inactive links
  const linkClass = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
      ? "text-white" // Active text color
      : "text-gray-400 hover:text-white" // Inactive text color
    }`;

  // menus 
  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Blog", path: "/blog" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <div className="w-full container  bg-[#0a0a0a]/80 backrop-blur-xl border border-white/10 rounded-full shadow-2xl px-24 py-3 flex items-center justify-between transition-all duration-300 ">

      
        <div className="container flex justify-between items-center  mx-auto">
          {/* logo */}
          <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2 group">
            {/* Added a subtle glow effect to logo on hover */}
            <img 
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
              src={logo} 
              alt="logo" 
            />
            <div className="flex flex-col leading-none">
              <h2 className="text-white text-lg font-bold tracking-tight">
                Qureshi <span className="text-[#fae92b]">Brothers</span>
              </h2>
            </div>
          </Link>
        </div>

          {/* menu icons */}
          <div>
            <ul className="flex justify-between items-center gap-2 text-[#fff] font-bold text-sm">
              {
                menus.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={linkClass}
                    >
                      
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#fae92b] transition-all duration-300 group-hover:w-full"></span>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

         {/* CTA button */}
        <div className="hidden md:block">
          <NavLink to="/contact">
            <button className="relative group overflow-hidden bg-gradient-to-r from-[#fae92b] to-[#ffc400] text-black px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(250,233,43,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,233,43,0.5)] hover:-translate-y-0.5">
              <span className="relative z-10">Contact Us</span>
              {/* Inner sheen effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
            </button>
          </NavLink>
        </div>
        </div>


      </div>
    </div>
  );
};

export default Navigation;
