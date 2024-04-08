import React from "react";

const Button = ({
  title,
  bgColor,
  color,
  padding,
  paddingLeft,
  paddingRight,
}) => {
  return (
    <button
      className={`${bgColor} ${color} ${padding} ${paddingLeft} ${paddingRight} rounded-md`}
    >
      {title}
    </button>
  );
};

export default Button;
