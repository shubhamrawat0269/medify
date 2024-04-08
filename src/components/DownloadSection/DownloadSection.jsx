import React from "react";
import { Button } from "../composer";

const DownloadSection = () => {
  return (
    <div className="bg-blue-50 mt-10 mb-10">
      <div className="w-5/6 m-auto pt-10 md:grid md:grid-cols-2 md:items-center">
        <div className="w-5/6 px-5 py-2 m-auto md:grid">
          <div className="py-5 relative mb-5">
            <figure>
              <img src="images/pngs/bazel2.png" alt="" />
            </figure>
            <figure className="absolute top-14 left-2">
              <img
                src="images/pngs/mobile1.png"
                className="w-full h-96 rounded-lg"
                alt=""
              />
            </figure>
            <figure className="absolute top-32 right-12">
              <img src="images/pngs/bazel1.png" className="h-96" alt="" />
            </figure>
            <figure className="absolute top-40" style={{ right: "2.2rem" }}>
              <img
                src="images/pngs/mobile1.png"
                style={{ width: "94%" }}
                className="h-96 rounded-lg"
                alt=""
              />
            </figure>
          </div>
        </div>
        <div>
          <div className="pt-5 pb-5 text-center  md:text-left">
            <h2 className="font-bold text-3xl md:text-4xl text-blue-900 mt-2 mb-2">
              Download the Medify App
            </h2>
            <p className="font-bold text-sm text-blue-700">
              Get the link to Download the app
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <input
              type="text"
              style={{ width: "15rem" }}
              className="p-2 my-4 outline-none"
              placeholder="Send SMS"
            />
            <Button
              title="Send SMS"
              bgColor="bg-blue-700"
              color="text-white"
              padding="p-2"
              paddingLeft="pl-4"
              paddingRight="pr-4"
            />
          </div>
          <div className="flex gap-5 items-center justify-center md:justify-start">
            <Button
              title="Google Play"
              bgColor="bg-black"
              color="text-white"
              padding="p-2"
              paddingLeft="pl-4"
              paddingRight="pr-4"
            />
            <Button
              title="App Store"
              bgColor="bg-black"
              color="text-white"
              padding="p-2"
              paddingLeft="pl-4"
              paddingRight="pr-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
