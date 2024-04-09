import React from "react";
import HospitalDetailCard from "./HospitalDetailCard";

const HospitalDetailGrid = () => {
  return (
    <div className="bg-blue-50 pt-10 pb-10">
      <div className="w-5/6 m-auto mt-10 mb-10 pt-10 pb-10">
        <div>
          <h2 className="text-center font-bold text-lg md:text-left mt-2 mb-2">
            15 Medical Centers Availabel in Alaska
          </h2>
          <div className="flex items-center gap-2 mb-5">
            <figure>
              <img
                className="w-4"
                src="images/pngs/right-icon.png"
                alt="Icon"
              />
            </figure>
            <p className="text-sm md:text-1xl">
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
        </div>
        <div className="md:flex md:gap-10">
          <div>
            <HospitalDetailCard status="appointment-not-fix" />
            <HospitalDetailCard status="appointment-fix" />
          </div>
          <div className="">
            <figure className="flex justify-center md:block">
              <img src="images/pngs/free.png" alt="free" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetailGrid;
