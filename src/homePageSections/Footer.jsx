import React from "react";
import Logo from "../assets/Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TfiLocationArrow } from "react-icons/tfi";
import { FaPinterestP } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" ">
      <div className="container mx-auto  pt-10 pb-10">
        <div className="w-[80%] mx-auto space-y-10 ">
          {/* heading */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <img src={Logo} alt="" />

              {/* sub heading */}
              <p className="  font-semibold  text-white ">
               <span className="text-[#fae92b]">Qureshi</span> Brothers
              </p>
            </div>

            {/* buttons */}
            <div className="flex gap-10 ">
              {/* social icons */}
              <div className="flex items-center space-x-4">
                <FaFacebookF
                  size={20}
                  color="#fff"
                  className=" cursor-pointer"
                />
                <li className="border p-2 rounded-full cursor-pointer">
                  <FaXTwitter size={20} color="#fff" />
                </li>
                <FaLinkedin
                  size={20}
                  color="#fff"
                  className=" cursor-pointer"
                />
                <FaPinterestP
                  size={20}
                  color="#fff"
                  className=" cursor-pointer"
                />
              </div>

              {/* email subscribe */}
              <div className="flex items-center relative">
                <input
                  type="email"
                  placeholder="Your E-mail "
                  className="px-4 py-2 rounded-[999px] focus:outline-none"
                />
                <button className="absolute -right-2 p-3 rounded-full bg-[#28BC34] text-white font-semibold hover:bg-[#28BC34] transition-all duration-300">
                  <TfiLocationArrow
                    size={20}
                    color="#fff"
                    className="rotate-90"
                  />
                </button>
              </div>
            </div>
          </div>

          <hr className="border-[#D2A71980]/40" />

          {/* menus */}
          <div className="flex items-center justify-between text-white font-semibold">
            {/* menu items_1 */}
            <div className="space-y-8 w-[30%]">
              {/* item heading */}
              <h3 className="text-xl">Useful Link</h3>

              {/* items */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <MdOutlineKeyboardArrowRight size={20} color={"#28BC34"} />{" "}
                  <p>About Our Legacy</p>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MdOutlineKeyboardArrowRight size={20} color={"#28BC34"} />{" "}
                  <p>industries We Serve</p>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MdOutlineKeyboardArrowRight size={20} color={"#28BC34"} />{" "}
                  <p>AGlobal Reach</p>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MdOutlineKeyboardArrowRight size={20} color={"#28BC34"} />{" "}
                  <p>Latest News</p>
                </div>
              </div>
            </div>

            {/* menu items_2 */}
            <div className="space-y-8 w-[30%]">
              {/* item heading */}
              <h3 className="text-xl">Service Sectors</h3>

              {/* items */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <FaCheck size={16} color={"#28BC34"} />{" "}
                  <p>Construction & Civil</p>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <FaCheck size={16} color={"#28BC34"} />{" "}
                  <p>Healthcare Services</p>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <FaCheck size={16} color={"#28BC34"} />{" "}
                  <p>Oil, Gas & Energy</p>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <FaCheck size={16} color={"#28BC34"} />{" "}
                  <p>Hospitality & Tourism</p>
                </div>
              </div>
            </div>

            {/* menu items_3 */}
            <div className="space-y-8 w-[40%]">
              {/* item heading */}
              <h3 className="text-xl">Service Sectors</h3>

              {/* items */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <IoLocationOutline size={35} color={"#28BC34"} />{" "}
                  <p>
                    Head Office: Office No. 1, 2 & 3, Plot No. 43, 3rd Floor,
                    2000 Plaza, I-8 Markaz, Islamabad, Pakistan.
                  </p>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MdOutlinePhone size={20} color={"#28BC34"} />{" "}
                  <p>+92 (51) 4938077 / +92 (51) 4938000.</p>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MdOutlineMail size={20} color={"#28BC34"} />{" "}
                  <p>nfo@qureshibrothers.com / qb-isb@qureshibrothers.com.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-[#D2A71980]/40" />

          <div className="flex items-center justify-between text-white font-semibold text-sm">
            <h3>© Qureshi Brothers  2025 | All Rights Reserved</h3>
            <div className="flex items-center space-x-4">
              <p>Trams & Condition</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
