import React from "react";
import { Slider } from "../composer";
import { discountCarouselData } from "../../dummy/primeCardData";

const DiscountSection = () => {
  return (
    <div className="m-12">
      <Slider data={discountCarouselData} />
    </div>
  );
};

export default DiscountSection;
