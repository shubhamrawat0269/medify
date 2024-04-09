import React from "react";
import { appointmentAdvice } from "../utils";
import {
  DownloadSection,
  HospitalDetailGrid,
  Navbar,
  NotificationModal,
  BookingSearchWrapper,
} from "../components/composer";

const Appointment = () => {
  return (
    <div>
      <NotificationModal msg={appointmentAdvice} />
      <Navbar bgColor="bg-white" />
      <BookingSearchWrapper width={20} />
      <HospitalDetailGrid status="appointment-fix" />
      <DownloadSection />
    </div>
  );
};

export default Appointment;
