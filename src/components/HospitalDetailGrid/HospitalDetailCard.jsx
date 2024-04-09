import React from "react";
import { Button } from "../composer";
import TabComp from "./TabComp";

const HospitalDetailCard = ({ status }) => {
  const getPatientDetail = (status) => {
    switch (status) {
      case "appointment-fix": {
        return (
          <div className="bg-white rounded-xl mb-5">
            <div className="p-10 text-center md:text-left md:flex md:gap-5">
              <div className="flex justify-center my-5 md:block">
                <div className="bg-blue-200 p-4 h-24 text-center w-24 rounded-full flex justify-center items-center md:flex md:items-center md:justify-center">
                  <img
                    className="w-12"
                    src="images/pngs/icon1.png"
                    alt="hospitalIcon"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-blue-400">
                  Fortis Hospital Richmond Road
                </h3>
                <h4 className="text-sm font-bold">Banglore, Karnataka</h4>
                <p className="text-sm">
                  Smilessence Center for Advanced Dentistry
                </p>
                <div className="flex gap-3 items-center my-3">
                  <span className="text-sm font-bold text-green-600">FREE</span>
                  <span className="line-through text-slate-400">
                    <span>₹</span>
                    <span>500</span>
                  </span>
                  <span>Consultation fee at clinic</span>
                </div>
                <div className="bg-green-800 text-white w-10 flex items-center justify-around rounded-lg px-1">
                  <img src="images/pngs/thumbs.png" alt="thumbs" />
                  <span>5</span>
                </div>
              </div>
              <div className="flex items-center md:items-start justify-center md:justify-start gap-3 mt-5 mb-5 md:mt-0 md:mb-0">
                <button className="text-blue-500 border-blue-500 border-2 px-5 py-1">
                  <span>10:30AM</span>
                </button>
                <button className="text-green-500 border-green-500 border-2 px-5 py-1">
                  <span>20 April 2024</span>
                </button>
              </div>
            </div>
            <div style={{ display: "none" }}>
              <TabComp />
            </div>
          </div>
        );
      }
      case "appointment-not-fix": {
        return (
          <div className="bg-white rounded-xl mb-5">
            <div className="p-10 text-center md:text-left md:flex md:gap-5">
              <div className="flex justify-center my-5 md:block">
                <div className="bg-blue-200 p-4 h-24 text-center w-24 rounded-full flex justify-center items-center md:flex md:items-center md:justify-center">
                  <img
                    className="w-12"
                    src="images/pngs/icon1.png"
                    alt="hospitalIcon"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-blue-400">
                  Fortis Hospital Richmond Road
                </h3>
                <h4 className="text-sm font-bold">Banglore, Karnataka</h4>
                <p className="text-sm">
                  Smilessence Center for Advanced Dentistry
                </p>
                <div className="flex gap-3 items-center my-3">
                  <span className="text-sm font-bold text-green-600">FREE</span>
                  <span className="line-through text-slate-400">
                    <span>₹</span>
                    <span>500</span>
                  </span>
                  <span>Consultation fee at clinic</span>
                </div>
                <div className="bg-green-800 text-white w-10 flex items-center justify-around rounded-lg px-1">
                  <img src="images/pngs/thumbs.png" alt="thumbs" />
                  <span>5</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-end gap-3">
                <p className="text-green-800 font-bold">Available Today</p>
                <Button
                  title="Book Free Center Visit"
                  bgColor="bg-blue-700"
                  color="text-white"
                  padding="p-2"
                  paddingLeft="pl-16"
                  paddingRight="pr-16"
                />
              </div>
            </div>
            <div style={{ display: "none" }}>
              <TabComp />
            </div>
          </div>
        );
      }

      default:
        <></>;
    }
  };

  return getPatientDetail(status);
};

export default HospitalDetailCard;
