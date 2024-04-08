import React from "react";
import Logo from "../../assets/svgs/Logo";
import { IoIosMenu } from "react-icons/io";
import { Button } from "../composer";

const Navbar = ({ bgColor }) => {
  return (
    <div className={`${bgColor}`}>
      <div className="flex justify-between items-center p-4 w-5/6 m-auto">
        <div>
          <Logo />
        </div>
        <div className="hidden lg:flex md:items-center md:gap-5">
          <ol className="flex justify-center gap-5 text-sm font-bold">
            <li>Find Doctors</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgery</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
          </ol>
          <Button
            title="My Bookings"
            bgColor="bg-blue-700"
            color="text-white"
            padding="p-2"
            paddingLeft="pl-4"
            paddingRight="pr-4"
          />
        </div>

        <div className="lg:hidden cursor-pointer">
          <IoIosMenu size={32} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
