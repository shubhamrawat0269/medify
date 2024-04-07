import React from "react";
import Logo from "../../assets/svgs/Logo";
import { IoIosMenu } from "react-icons/io";

const Navbar = ({ bgColor }) => {
  return (
    <div className={`${bgColor}`}>
      <div className="flex justify-between items-center p-4 w-5/6 m-auto">
        <div>
          <Logo />
        </div>
        <div className="hidden md:flex md:items-center md:gap-5">
          <ol className="flex justify-center gap-5 text-sm font-bold">
            <li>Find Doctors</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgery</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
          </ol>
          <button className="bg-blue-700 text-white p-2 pl-4 pr-4 rounded-md">
            My Bookings
          </button>
        </div>

        <div className="md:hidden cursor-pointer">
          <IoIosMenu size={32} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
