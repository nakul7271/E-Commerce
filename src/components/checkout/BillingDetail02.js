import React from "react";

const BillingDetail02 = () => {
  return (
    <div className="my-4 animate-fade-in-down origin-top ">
      <input
        className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
        type="text"
        name="inputFName"
        id="inputFNId"
        placeholder="Email Address"
      />
      <input
        className=" w-full py-2 px-6 border mt-4 border-slate-200 outline-none"
        type="text"
        name="inputFName"
        id="inputFNId"
        placeholder="Password"
      />
      <button className=" rounded-md transition-all duration-500 mt-4 py-2 px-8 bg-blue-500 hover:bg-slate-900 text-white">
        REGISTER
      </button>
    </div>
  );
};

export default BillingDetail02;
