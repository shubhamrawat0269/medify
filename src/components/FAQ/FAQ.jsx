import React from "react";
import { accordionQuestionsList } from "../../dummy/primeCardData";

const AccordionList = ({ key, label }) => {
  return (
    <div
      key={key}
      className="w-96 flex justify-between items-center p-2 border"
    >
      <h3>{label}</h3>
      <img src="images/pngs/add.png" alt="addIcon" />
    </div>
  );
};

const FAQ = () => {
  // {
  //   label: "How to get appointment for emergency",
  //   numbers:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus similique alias neque nemo cupiditate accusantium ullam minima molestias officiis laboriosam.",
  // },
  return (
    <div className="bg-white">
      <div className="w-5/6 m-auto pt-10 pb-10">
        <div className="pt-5 pb-5 text-center">
          <p className="font-bold text-sm text-blue-700">Get Your Answer</p>
          <h2 className="font-bold text-4xl text-blue-900 mt-2 mb-2">
            Frequently Asked Questions
          </h2>
        </div>
      </div>

      <div className="w-5/6 px-5 py-2 m-auto md:flex md:gap-10 md:justify-center md:items-center">
        <div className="py-5">
          <figure>
            <img src="images/pngs/detox.png" alt="" />
          </figure>
        </div>

        <div className="flex flex-col gap-4 mt-5 mb-5">
          {accordionQuestionsList.map((cur, id) => {
            return <AccordionList label={cur.label} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
