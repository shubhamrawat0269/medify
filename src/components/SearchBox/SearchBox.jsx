import React from "react";

const SearchBox = ({ placeText, width, data, error, label, dispatch }) => {
  return (
    <div className="m-2">
      <select
        value={label}
        onChange={(e) => dispatch(e.target.value)}
        placeholder={placeText}
        style={{ width: `${width}rem` }}
        className="p-2 border"
      >
        <option value="">Select a Value</option>
        {data.map((state, id) => {
          return (
            <option key={id} value={state}>
              {state}
            </option>
          );
        })}
      </select>
      {error && <p className="text-red-800">{Error}</p>}
    </div>
  );
};

export default SearchBox;
