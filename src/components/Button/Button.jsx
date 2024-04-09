import React from "react";

const Button = ({
  title,
  bgColor,
  color,
  padding,
  paddingLeft,
  paddingRight,
  onBtnClick,
}) => {
  return (
    <button
      className={`${bgColor} ${color} ${padding} ${paddingLeft} ${paddingRight} rounded-md`}
      onClick={onBtnClick}
    >
      {title}
    </button>
  );
};

export default Button;
