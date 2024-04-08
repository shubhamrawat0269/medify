import React from "react";
import { Button, Card } from "../composer";
import { specialisedCardData } from "../../dummy/primeCardData";

const Specialization = () => {
  return (
    <div className="bg-teal-50 ">
      <div className="w-5/6 m-auto p-10">
        <h2 className="font-bold text-blue-800 text-3xl lg:text-4xl text-center">
          Find By Specialisation
        </h2>
        {/* Bunch of Card  */}
        <div className="grid lg:grid-cols-4 lg:place-items-center gap-5 mt-10 mb-10">
          {specialisedCardData.map((card, id) => {
            return <Card key={id} label={card.label} iconSrc={card.Icon} />;
          })}
        </div>

        <div className="flex items-center justify-center">
          <Button
            title="View All"
            bgColor="bg-blue-700"
            color="text-white"
            padding="p-2"
            paddingLeft="pl-4"
            paddingRight="pr-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Specialization;
