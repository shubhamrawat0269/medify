import React from "react";
import { Button, SearchBox } from "../composer";

const UserSearchWrapper = () => {
  return (
    <div className="bg-blue-800 pt-10 rounded-bl-xl rounded-br-3xl">
      <div className="bg-white w-5/6 md:w-4/6 relative m-auto top-10 md:top-8 rounded-xl shadow-xl">
        <div className=" flex flex-col md:flex-row justify-center items-center p-5">
          <SearchBox placeText="Search State" width={20} />
          <SearchBox placeText="Search City" width={20} />
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
  );
};

export default UserSearchWrapper;
