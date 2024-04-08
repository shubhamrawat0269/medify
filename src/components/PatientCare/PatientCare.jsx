import React from "react";
import { patientCodeEthics } from "../../dummy/primeCardData";

const PatientCare = () => {
  return (
    <div className="bg-teal-50">
      <div className="w-5/6 m-auto p-5  md:relative md:grid md:gap-5 md:grid-cols-2 md:items-center">
        <div className="mt-5 mb-5">
          <img
            className="md:relative md:left-48 md:top-16"
            src="images/pngs/doctors.png"
            alt="Patient"
          />
          <img
            className="md:relative md:z-10"
            src="images/pngs/patient.png"
            alt="Doctors"
          />
          <img
            className="hidden md:block md:absolute md:top-24 md:left-0"
            src="images/pngs/happy-clients.png"
            alt="happyClient"
          />
        </div>

        <div className="mt-5 mb-5">
          <p className="font-bold text-sm text-blue-700">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </p>
          <h2 className="font-bold text-4xl mt-2 mb-2">
            <span className="text-blue-900">Patient</span> Caring
          </h2>
          <p className="text-blue-800 mb-5">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <div className="flex flex-col gap-3">
            {patientCodeEthics.map((curr) => {
              return (
                <div className="flex items-center gap-2">
                  <img src={curr.image} alt={curr.label} />
                  <p>{curr.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCare;
