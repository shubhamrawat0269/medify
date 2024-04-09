import React from "react";
import { Button, Card, SearchBox } from "../composer";
import { cardData } from "../../dummy/primeCardData";

const HeroSection = () => {
  return (
    <div className="bg-teal-50  lg:relative">
      <div className="pt-0 pr-0 pl-0 pb-36 w-5/6 m-auto md:flex md:justify-between md:items-center md:gap-5">
        <div>
          <h1 className="text-center font-extrabold md:text-left">
            Skip the travel! Find Online
            <span className="block font-bold text-5xl text-blue-600 mt-2 mb-2">
              Medical Centers
            </span>
          </h1>
          <p className="text-center md:text-left">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </p>
          <div className="flex items-center justify-center mt-3 md:justify-start">
            <Button
              title="Find Centers"
              bgColor="bg-blue-700"
              color="text-white"
              padding="p-2"
              paddingLeft="pl-4"
              paddingRight="pr-4"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="images/pngs/hero_image.png"
            className="wh-100"
            alt="heroImg"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="bg-white lg:absolute lg:inset-x-64 lg:top-96 lg:py-4 lg:px-20 rounded border">
          <div className=" flex flex-col md:flex-row justify-center items-center p-5">
            <SearchBox placeText="Search State" width={20} />
            <SearchBox placeText="Search City" width={20} />
            <Button
              title="Search"
              bgColor="bg-blue-700"
              color="text-white"
              padding="p-2"
              paddingLeft="pl-4"
              paddingRight="pr-4"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <h2 className="text-2xl font-bold">You may be looking for</h2>

            <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
              {cardData.map((card, id) => {
                return <Card key={id} label={card.label} iconSrc={card.Icon} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
