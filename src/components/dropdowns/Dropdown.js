import React from "react";
import "../../index.css";

const Dropdown = ({ value, options, onChange }) => {
  return (
    <select
      className="border w-full border-transparent top-20 bg-inherit focus:outline-0 text-inherit"
      
      onChange={onChange}
      defaultValue={value}
    >
      {/* <option disabled="disabled" selected="selected" style={{display:"none"}}>{value}</option> */}
      {options.map((option) => (
        <option
          className="text-gray-700 block sm:px-4 sm:py-2 px-2 py-2 text-sm "
          value={option.value}
          key={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
