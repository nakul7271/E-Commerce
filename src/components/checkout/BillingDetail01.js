import React, { useState } from "react";
import Dropdown from "../dropdowns/Dropdown";

const optionsCountry = [
  { label: "Bangladesh", value: "Bangladesh" },
  { label: "India", value: "India" },
  { label: "USA", value: "USA" },
  { label: "Sri Lanka", value: "Sri Lanka" },
];

const BillingDetail01 = () => {
  const [country, setCountry] = useState("India");

  const selectCountryHandler = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className="my-6">
      <div className="md:flex justify-between">
        <div className="md:w-[48%] w-full  flex flex-col">
          <label htmlFor="inputFNId">First Name</label>
          <input
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="text"
            name="inputFName"
            id="inputFNId"
          />
        </div>
        <div className="md:w-[48%] w-full flex flex-col">
          <label htmlFor="inputLNId">Last Name</label>
          <input
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="text"
            name="inputLName"
            id="inputLNId"
          />
        </div>
      </div>
      <div className="my-5 w-full flex flex-col">
        <label htmlFor="companyName">Company Name</label>
        <input
          className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
          type="text"
          name="companyName"
          id="companyName"
        />
      </div>
      <div className="my-5 w-full flex flex-col">
        <label htmlFor="countryName">Country</label>
        <div className=" w-full py-2 px-2 border mt-1 border-slate-200 outline-none">
          <Dropdown
            options={optionsCountry}
            onChange={selectCountryHandler}
            value={country}
          />
        </div>
      </div>
      <div className="my-5 w-full flex flex-col">
        <label htmlFor="streetAddress">Street Address</label>
        <input
          className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="House number and street name"
        />
        <input
          className=" w-full py-2 px-6 border mt-3 border-slate-200 outline-none"
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Apartment, suite, unit etc."
        />
      </div>
      <div className="my-5 w-full flex flex-col">
        <label htmlFor="town">Town / City</label>
        <input
          className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
          type="text"
          name="town"
          id="town"
        />
      </div>
      <div className="md:flex justify-between mt-4">
        <div className="md:w-[48%] w-full flex flex-col">
          <label htmlFor="state">State / Country</label>
          <input
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="text"
            name="state"
            id="state"
          />
        </div>
        <div className="md:w-[48%] w-full flex flex-col">
          <label htmlFor="postCode">Postcode / ZIP</label>
          <input
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="text"
            name="postCode"
            id="postCode"
          />
        </div>
      </div>
      <div className="md:flex justify-between mt-4">
        <div className="md:w-[48%] w-full flex flex-col">
          <label htmlFor="phone">Phone</label>
          <input
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="text"
            name="phone"
            id="phone"
          />
        </div>
        <div className="md:w-[48%] w-full flex flex-col">
          <label htmlFor="emailAddress">Email Address</label>
          <input
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="text"
            name="emailAddress"
            id="emailAddress"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingDetail01;
