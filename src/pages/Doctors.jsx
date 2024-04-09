import React from "react";
import { Navbar, NotificationModal } from "../components/composer";
import { doctorsAdvice } from "../utils";

const Doctors = () => {
  return (
    <>
      <NotificationModal msg={doctorsAdvice} />
      <Navbar bgColor="bg-white" />
    </>
  );
};

export default Doctors;
