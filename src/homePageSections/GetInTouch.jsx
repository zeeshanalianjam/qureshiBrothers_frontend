import React from "react";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";

const GetInTouch = () => {
  return (
    <div className=" ">
      <div className="container mx-auto shadow-md  bg-white/20 rounded-[40px] backdrop-blur-[10px] py-10">
        <div className="w-[80%] mx-auto flex  justify-between space-x-4">
          {/* left form */}
          <div className="w-1/2 ">
            <form action="#" className="space-y-6">
              {/* email & phone */}
              <div className="flex justify-center gap-8">
                <div className="space-y-1">
                  <label
                    className="text-[#034833] font-semibold"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <div>
                    <input
                      className="border rounded-[999px] px-4 py-2 border-gray-400 bg-transparent outline-none "
                      type="text"
                      id="email"
                      placeholder="eg@gmail.com"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    className="text-[#034833] font-semibold"
                    htmlFor="phone"
                  >
                    Your phone
                  </label>
                  <div>
                    <input
                      className="no-spinner border rounded-[999px] px-4 py-2 border-gray-400 bg-transparent appearance-none outline-none"
                      type="number"
                      id="phone"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                </div>
              </div>

              {/* adress */}
              <div className="px-6 ">
                <div className="space-y-1">
                  <label
                    className="text-[#034833] font-semibold"
                    htmlFor="address"
                  >
                    Your Address
                  </label>
                  <div>
                    <input
                      className="border rounded-[999px] px-4 py-2 border-gray-400 bg-transparent outline-none w-full"
                      type="text"
                      id="address"
                      placeholder="Your Address"
                    />
                  </div>
                </div>
              </div>

              {/* message box */}
              <div className="px-6 ">
                <div className="space-y-1">
                  <label
                    className="text-[#034833] font-semibold"
                    htmlFor="address"
                  >
                    Your Address
                  </label>
                  <div>
                    <textarea
                      className="border rounded-[20px] px-4 py-2 border-gray-400 bg-transparent outline-none w-full"
                      type="text"
                      id="address"
                      cols="30"
                      rows="5"
                      placeholder="Write your message here..."
                    >
                      {" "}
                    </textarea>
                  </div>
                </div>
              </div>

              {/* submit button */}
              <div className="px-6 ">
                <button className="bg-[#28BC34] text-white px-6 py-2 rounded-[999px] hover:bg-[#022d22] transition-all duration-300 w-full font-semibold">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* right details get in touch */}
          <div className="w-1/2  space-y-10 px-10">
            {/* heading */}
            <div className="flex justify-between items-center">
              <div className="text-[#034833]">
                <h2 className="text-3xl font-bold">Get In Touch</h2>

                {/* sub heading */}
                <p className="uppercase text-[10px] font-semibold ">
                  Message us
                </p>
              </div>
            </div>

            {/* info */}
            <div className="space-y-6">
              {/* item_1 */}
              <div className="space-y-1">
                <div className="flex items-center font-semibold gap-4">
                  <FaPhone className="text-[#28BC34] text-xl" />
                  <h3 className="text-[#03483380]">Requesting A Call:</h3>
                </div>
                <p className="relative left-8 text-[#034833] text-sm">
                  +92 (51) 4938080{" "}
                </p>
              </div>

              {/* item_2 */}
              <div className="space-y-1">
                <div className="flex items-center font-semibold gap-4">
                  <GoClockFill className="text-[#28BC34] text-xl" />
                  <h3 className="text-[#03483380]">Open Hours:</h3>
                </div>
                <p className="relative left-9 text-[#034833] text-sm">
                  10am - 6pm
                </p>
              </div>

              {/* item_3 */}
              <div className="space-y-1">
                <div className="flex items-center font-semibold gap-4">
                  <IoLocationSharp className="text-[#28BC34] text-2xl" />
                  <h3 className="text-[#03483380]">Location:</h3>
                </div>
                <p className="relative left-10 text-[#034833] text-sm">
                  Plaza 2000, Plot No. 43, I-8 Markaz, Islamabad, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
