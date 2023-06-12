import React from "react";

const AccountPassword = (props) => {
  return (
    <div>
      <h4 className="font-semibold mb-1">CHANGE PASSWORD</h4>
      <p className="mb-8">Your Password</p>
      <hr className="bg-slate-200 hidden lg:block dark:bg-gray-700"></hr>
      <div className="text-slate-600 mt-6">
        <div className=" w-full flex flex-col my-4">
          <label htmlFor="passwordId">Password</label>
          <input
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="password"
            name="password"
            id="passwordId"
          />
        </div>
        <div className=" w-full flex flex-col my-4">
          <label htmlFor="changePasswordId">Change Password</label>
          <input
            className=" w-full py-2 px-6 border mt-1 border-slate-200 outline-none"
            type="changePassword"
            name="changePassword"
            id="changePasswordId"
          />
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

export default AccountPassword;
