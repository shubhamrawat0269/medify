import React from "react";
import {
  DownloadSection,
  FAQ,
  HospitalDetailGrid,
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
      <HospitalDetailGrid status="appointment-not-fix" />
      <FAQ />
      <DownloadSection />
    </>
  );
};

export default Doctors;
