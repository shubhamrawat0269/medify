import React from "react";
import { Button } from "../composer";
import TabComp from "./TabComp";

const HospitalDetailCard = () => {
  return (
    <div>
      <div>
        <div>
          <img src="images/pngs/icon1.png" alt="hospitalIcon" />
        </div>
        <div>
          <h3>Fortis Hospital Richmond Road</h3>
          <h4>Banglore, Karnataka</h4>
          <p>Smilessence Center for Advanced Dentistry</p>
          <div>
            <span>FREE</span>
            <span>
              <span>₹</span>
              <span>500</span>
            </span>
            <span>Consultation fee at clinic</span>
          </div>
          <div>
            <img src="images/pngs/thumbs.png" alt="thumbs" />
            <span>5</span>
          </div>
        </div>
        <div>
          <p>Available Today</p>
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
};

export default HospitalDetailCard;
