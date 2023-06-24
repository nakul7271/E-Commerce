import React, { useState } from "react";
import { Form } from "react-router-dom";
import Dropdown from "./dropdowns/Dropdown";
import "../index.css";

const optionsCategories = [
  { label: "All Categories", value: "All Categories" },
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
];

const MainForm = () => {
  const [selected, setSelected] = useState("All Categories");

  const selectHandler = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <div className="1.5xl:w-[700px] 0.5xl:w-[600px] lg:w-[495px]">
        <Form className="border border-slate-200 rounded-md flex">
          <div className=" bg-gray-100 py-3 sm:px-2 px-1 text-sm sm:text-base 0.5xl:w-1/4 lg:w-[35%] sm:w-[30%] w-[35%] ">
            <Dropdown
              options={optionsCategories}
              onChange={selectHandler}
              value={selected}
            />
          </div>
          <input
            className="xl:pl-10 xl:pr-20  lg:pl-3 lg:pr-3 sm:pl-10 sm:pr-20 pl-[1%] pr-[2%] focus:outline-0 sm:w-[50%] w-[50%] lg:w-[45%] 0.5xl:w-1/2 placeholder:text-[12px] sm:placeholder:text-base"
            type="text"
            placeholder="Enter your search key..."
          />
          <button
            className="bg-blue-500 text-white font-semibold rounded-r-md py-3 sm:px-8 px-4 0.5xl:w-1/4 sm:w-[20%] w-[15%] lg:w-[20%] transition-colors duration-300 hover:bg-[#1c1917] "
            type="submit"
          >
            <span className="hidden lg:block">Search</span>
            <span className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </button>
        </Form>
      </div>
    </>
  );
};

export default MainForm;
