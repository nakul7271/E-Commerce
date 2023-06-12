import React from "react";

const AddressBook = (props) => {
  return (
    <div>
      <h4 className="font-semibold mb-6">ADDRESS BOOK ENTRIES</h4>

      <hr className="bg-slate-200 hidden lg:block dark:bg-gray-700"></hr>
      <div className=" md:flex border border-slate-200">
        <div className="md:w-[50%] w-full flex justify-center md:border-r border-slate-200">
          <div className="my-6 text-center text-slate-600">
            <p>Jone Deo</p>
            <p>hastech</p>
            <p>28 Green Tower,</p>
            <p>Street Name.</p>
            <p>New York City,</p>
            <p>USA</p>
          </div>
        </div>
        <div className="md:w-[50%] w-full mt-3 mb-8 md:mt-0 md:mb-0 flex justify-center items-center">
          <div>
            <button className="py-2 mr-4 font-semibold hover:bg-blue-500 transition-all duration-300 px-4 bg-slate-800 text-white ">
              EDIT
            </button>
            <button className="py-2 font-semibold hover:bg-blue-500 transition-all duration-300 px-4 bg-red-500 text-white ">
              DELETE
            </button>
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

export default AddressBook;
