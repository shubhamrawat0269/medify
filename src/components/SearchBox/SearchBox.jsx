import React from "react";

const SearchBox = ({ placeText, width }) => {
  return (
    <div className="m-2">
      <input
        type="text"
        placeholder={placeText}
        style={{ width: `${width}rem` }}
        className="p-2 border"
      />
    </div>
  );
};

export default SearchBox;
