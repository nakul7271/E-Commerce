import React from "react";
import Dropdown from "../dropdowns/Dropdown";
import { useState } from "react";
import PaginatedItems from "./Pagination";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
const optionsSort = [
  { label: "Sort by newness", value: "newness" },
  { label: "A to Z", value: "atoz" },
  { label: "Z to A", value: "ztoa" },
  { label: "In stock", value: "inStock" },
];

const RightBar = (props) => {
  const [gridView, SetGridView] = useState(true);
  const [detailView, setDetailView] = useState(false);

  const gridViewHandler = () => {
    SetGridView(true);
    setDetailView(false);
  };
  const detailViewHandler = () => {
    setDetailView(true);
    SetGridView(false);
  };

  const gridClasses = "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1";
  const detailClasses = "grid grid-cols-1";

  return (
    <>
      <div className="px-8 py-3 mb-8 border border-gray-200 rounded-md">
        <div className="1.5md:flex justify-between">
          <div className="flex items-center">
            <div onClick={gridViewHandler}>
              <BsFillGrid3X3GapFill
                className={`w-6  h-6 ${
                  gridView ? "text-blue-500" : "text-slate-400"
                } hover:text-blue-500 transition-all duration-300 mr-4`}
              />
            </div>
            <div onClick={detailViewHandler}>
              <FaList
                className={`w-6  h-6 ${
                  detailView ? "text-blue-500" : "text-slate-400"
                } hover:text-blue-500 transition-all duration-300 mr-4`}
              />
            </div>

            <p className=" ml-3 0.8sm:ml-14 1.5md:ml-2 lg:ml-14 text-sm text-slate-600">
              There Are 26 Products.
            </p>
          </div>

          <div className="flex 1.5md:mt-0 mt-3 justify-between ">
            <div className="mr-3 mt-[2px] text-sm text-slate-600">
              Sort By :
            </div>
            <div className="rounded-3xl  px-2 1.5md:w-48 sm:w-96 0.8sm:w-72 0.5sm:w-52 w-44 bg-gray-100">
              <Dropdown
                value="Sort by newness"
                options={optionsSort}
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>

      {gridView && (
        <div className="mb-8">
          <PaginatedItems
            data={props.filtered}
            Classes={gridClasses}
            grid={true}
          />
        </div>
      )}

      {detailView && (
        <div className="mb-8">
          <PaginatedItems
            data={props.filtered}
            Classes={detailClasses}
            grid={false}
          />
        </div>
      )}

      {props.filtered.length === 0 && (
        <div className="flex flex-col justify-center items-center m-10">
          <div className="p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>

          <h2 className="font-bold pb-4 text-3xl">No Product Found</h2>
          <button className="bg-blue-500 mt-3 py-2 px-4 rounded-md text-white hover:bg-slate-800">
            Continue Shopping
          </button>
        </div>
      )}
    </>
  );
};

export default RightBar;
