import React from "react";

const AccountEdit = (props) => {
  return (
    <div>
      <h4 className="font-semibold mb-1">MY ACCOUNT INforMATION</h4>
      <p className="mb-8">Your Personal Details</p>
      <hr className="bg-slate-200 hidden lg:block dark:bg-gray-700"></hr>
      <div className="text-slate-600 mt-6">
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
        <div className=" w-full flex flex-col my-4">
          <label htmlFor="emailId">Email Address</label>
          <input
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="email"
            name="email"
            id="emailId"
          />
        </div>
        <div className="md:flex justify-between">
          <div className="md:w-[48%] w-full  flex flex-col">
            <label htmlFor="telephoneId">Telephone</label>
            <input
              className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
              type="text"
              name="telephone"
              id="telephoneId"
            />
          </div>
          <div className="md:w-[48%] w-full flex flex-col">
            <label htmlFor="faxId">Fax</label>
            <input
              className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
              type="text"
              name="fax"
              id="faxId"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center justify-between text-slate-800">
        <button
          onClick={props.onChange}
          className="flex items-center font-semibold hover:text-blue-500 transition-all duration-300"
        >
          {" "}
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </span>{" "}
          BACK
        </button>
        <button className="py-3 px-8 cursor-pointer rounded-md font-semibold hover:bg-blue-500 bg-gray-200  hover:text-white transition-all duration-300">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default AccountEdit;
