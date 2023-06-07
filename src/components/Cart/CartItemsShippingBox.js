import React, { useState } from "react";
import Dropdown from "../dropdowns/Dropdown";

const optionsCountry = [
  { label: "Bangladesh", value: "Bangladesh" },
  { label: "India", value: "India" },
  { label: "USA", value: "USA" },
  { label: "Sri Lanka", value: "Sri Lanka" },
];

const CartItemsShippingBox = () => {
  const [country, setCountry] = useState("India");

  const selectCountryHandler = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="py-11 px-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="w-[900px] font-semibold text-xl ">
          Estimate Shipping And Tax
        </h3>
        <hr className="bg-gray-700 w-full dark:bg-gray-700 mt-2"></hr>
      </div>
      <p className="text-slate-500">
        Enter your destination to get a shipping estimate.
      </p>
      <div className="mt-5">
        <div className="flex flex-col mb-3">
          <label>* Country</label>
          <div className="py-2 rounded-md bg-white border my-2 border-slate-200">
            <Dropdown
              options={optionsCountry}
              onChange={selectCountryHandler}
              value={country}
            />
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <label>* Region / State</label>
          <div className="py-2 rounded-md bg-white border my-2 border-slate-200">
            <Dropdown
              options={optionsCountry}
              onChange={selectCountryHandler}
              value={country}
            />
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <label>* Zip / Postal Code</label>
          <div className="py-2 rounded-md bg-white border my-2 border-slate-200">
            <input type="text" className="outline-none pl-2 w-full" />
          </div>
        </div>
        <button className="py-3 px-12 rounded-md text-white hover:bg-slate-900 transition-all duration-500 bg-blue-500">
          GET A QUOTE
        </button>
      </div>
    </div>
  );
};

export default CartItemsShippingBox;
