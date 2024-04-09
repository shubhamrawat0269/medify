import React from "react";
import { Button } from "../composer";

const BookingSearchWrapper = ({ width }) => {
  return (
    <div className="bg-blue-800 pt-10 rounded-bl-xl rounded-br-3xl">
      <div className="flex flex-col items-center md:flex-row md:justify-around md:gap-10">
        <div>
          <h2 className="text-3xl text-white">My Bookings</h2>
        </div>
        <div className="bg-white w-5/6 md:w-3/6 relative m-auto md:m-0 top-10 md:top-8 rounded-xl shadow-xl">
          <div className=" flex flex-col md:flex-row justify-center items-center p-5">
            <input
              type="search"
              placeholder="Search By Hospital"
              style={{ width: `${width}rem` }}
              className="p-2 border"
            />
            <Button
              title="Search"
              bgColor="bg-blue-700"
              color="text-white"
              padding="p-2"
              paddingLeft="pl-16"
              paddingRight="pr-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSearchWrapper;
