import React from "react";
import { serviceData } from "../../dummy/primeCardData";

const ServiceCard = ({ uId, numbers, label, image }) => {
  return (
    <div
      key={uId}
      className="bg-white mb-5 p-5 flex flex-col items-center w-4/6 justify-center rounded-xl  shadow-lg"
    >
      <figure>
        <img className="w-12 my-5" src={image} alt={uId} />
      </figure>
      <div className="text-slate-600 mb-2">
        <span className="font-bold text-4xl">{numbers}+</span>
      </div>
      <div className="text-1xl text-black mb-3">{label}</div>
    </div>
  );
};

const ServiceSection = () => {
  // {
  //   label: "Happy Patients",
  //   numbers: 5000,
  //   image: "images/pngs/Hospital.png",
  // },
  return (
    <div className="bg-teal-50 pt-10 pb-10">
      <div className="w-5/6 m-auto md:grid md:grid-cols-2 md:gap-10 md:items-center">
        <div className="pt-5 pb-5 text-center md:text-left">
          <p className="font-bold text-sm text-blue-700">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </p>
          <h2 className="font-bold text-4xl text-blue-900 mt-2 mb-2">
            Our Families
          </h2>
          <p>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>

        <div className="px-5 py-2 mt-5 mb-5 md:grid md:grid-cols-2 md:gap-5">
          {serviceData.map((service, id) => {
            return (
              <ServiceCard
                uId={id}
                numbers={service.numbers}
                label={service.label}
                image={service.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
