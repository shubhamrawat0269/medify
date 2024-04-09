import React from "react";
import HospitalDetailCard from "./HospitalDetailCard";

const HospitalDetailGrid = () => {
  return (
    <div>
      <div>
        <h2>15 Medical Centers Availabel in Alaska</h2>
        <div>
          <figure>
            <img src="images/pngs/right-icon.png" alt="Icon" />
          </figure>
          <p>
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>
      </div>
      <HospitalDetailCard />
    </div>
  );
};

export default HospitalDetailGrid;
