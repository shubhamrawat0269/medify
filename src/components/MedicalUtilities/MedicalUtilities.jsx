import React from "react";
import { doctorsList } from "../../dummy/primeCardData";
import { Slider } from "../composer";

const MedicalUtilities = () => {
  return (
    <div className="bg-white">
      <div className="mt-10 mb-10">
        <h2 className="font-bold text-blue-800 text-3xl lg:text-4xl text-center">
          Medical Specialist
        </h2>
        {/* Bunch of Card  */}
        <div className="m-12">
          <Slider data={doctorsList} noOfSlides={3} />
        </div>
      </div>
    </div>
  );
};

export default MedicalUtilities;
