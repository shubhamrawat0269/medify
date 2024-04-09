import React, { useContext } from "react";
import HospitalDetailCard from "./HospitalDetailCard";
import { bookingStatus } from "../../utils";
import { PatientContext } from "../../contexts/PatientContext";

const HospitalDetailGrid = ({ status }) => {
  const { hospitalList, selectedState } = useContext(PatientContext);

  // for ref
  //       {
  //     "Provider ID": "020001",
  //     "Hospital Name": "PROVIDENCE ALASKA MEDICAL CENTER",
  //     "Address": "3200 PROVIDENCE DRIVE",
  //     "City": "ANCHORAGE",
  //     "State": "Alaska",
  //     "ZIP Code": 99508,
  //     "County Name": "ANCHORAGE",
  //     "Phone Number": 9075622211,
  //     "Hospital Type": "Acute Care Hospitals",
  //     "Hospital Ownership": "Voluntary non-profit - Church",
  //     "Emergency Services": "Yes",
  //     "Meets criteria for meaningful use of EHRs": "Y",
  //     "Hospital overall rating": 3,
  //     "Hospital overall rating footnote": "",
  //     "Mortality national comparison": "Same as the national average",
  //     "Mortality national comparison footnote": "",
  //     "Safety of care national comparison": "Below the national average",
  //     "Safety of care national comparison footnote": "",
  //     "Readmission national comparison": "Above the national average",
  //     "Readmission national comparison footnote": "",
  //     "Patient experience national comparison": "Same as the national average",
  //     "Patient experience national comparison footnote": "",
  //     "Effectiveness of care national comparison": "Same as the national average",
  //     "Effectiveness of care national comparison footnote": "",
  //     "Timeliness of care national comparison": "Below the national average",
  //     "Timeliness of care national comparison footnote": "",
  //     "Efficient use of medical imaging national comparison": "Same as the national average",
  //     "Efficient use of medical imaging national comparison footnote": ""
  // }
  return (
    <div className="bg-blue-50 pt-10 pb-10">
      <div className="w-5/6 m-auto mt-10 mb-10 pt-10 pb-10">
        {status === bookingStatus.APPOINTMENT_NOT_FIX && (
          <div>
            <h2 className="text-center font-bold text-lg md:text-left mt-2 mb-2">
              15 Medical Centers Availabel in {selectedState}
            </h2>
            <div className="flex items-center gap-2 mb-5">
              <figure>
                <img
                  className="w-4"
                  src="images/pngs/right-icon.png"
                  alt="Icon"
                />
              </figure>
              <p className="text-sm md:text-1xl">
                Book appointments with minimum wait-time & verified doctor
                details
              </p>
            </div>
          </div>
        )}

        <div className="md:flex md:gap-10">
          <div>
            {hospitalList.map((cur, id) => {
              {
                /* Hospital Name, Hospital Address, City, State, ZIP Code, Hospital overall rating */
              }
              const {
                "Hospital Name": name,
                "Hospital Address": address,
                City,
                State,
                "ZIP Code": zip,
                "Hospital overall rating": rating,
              } = cur;
              return (
                <HospitalDetailCard
                  status={status}
                  name={name}
                  address={address}
                  city={City}
                  state={State}
                  zip={zip}
                  rating={rating}
                />
              );
            })}
          </div>
          <div className="">
            <figure className="flex justify-center md:block">
              <img src="images/pngs/free.png" alt="free" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDetailGrid;
