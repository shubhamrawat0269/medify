import React from "react";
import {
  DownloadSection,
  FAQ,
  Navbar,
  NotificationModal,
  UserSearchWrapper,
} from "../components/composer";
import { doctorsAdvice } from "../utils";

const Doctors = () => {
  return (
    <>
      <NotificationModal msg={doctorsAdvice} />
      <Navbar bgColor="bg-white" />
      <UserSearchWrapper />
      <FAQ />
      <DownloadSection />
    </>
  );
};

export default Doctors;
