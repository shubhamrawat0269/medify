import React from "react";
import Logo from "../../assets/svgs/Logo";
import { IoIosMenu } from "react-icons/io";
import { Button } from "../composer";
import { Link } from "react-router-dom";

const Navbar = ({ bgColor }) => {
  return (
    <div className={`${bgColor}`}>
      <div className="flex justify-between items-center p-4 w-5/6 m-auto">
        <Link to="/">
          <Logo />
        </Link>
        <div className="hidden lg:flex md:items-center md:gap-5">
          <ol className="flex justify-center gap-5 text-sm font-bold">
            <Link to="/doctors">Find Doctors</Link>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgery</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
          </ol>
          <Link to="/bookings">
            <Button
              title="My Bookings"
              bgColor="bg-blue-700"
              color="text-white"
              padding="p-2"
              paddingLeft="pl-4"
              paddingRight="pr-4"
            />
          </Link>
        </div>

        <div className="lg:hidden cursor-pointer">
          <IoIosMenu size={32} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
