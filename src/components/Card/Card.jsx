import React from "react";

const Card = ({ label, iconSrc }) => {
  return (
    <div className="flex lg:flex-col gap-5 items-center justify-center border p-5 w-full hover:bg-slate-700 hover:text-white cursor-pointer">
      <img className="w-2/6" src={iconSrc} alt={label} />
      <p className="font-bold text-1xl">{label}</p>
    </div>
  );
};

export default Card;
