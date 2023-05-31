import React from "react";
import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import "./RangeSlider.css";

const LeftBar = (props) => {
  const [mensBar, setMensBar] = useState(false);
  const [womensBar, setWomensBar] = useState(false);
  const [range, setRange] = useState([0, 100000]);

  useEffect(() => {
    props.filterByRange(range);
  }, [range, props]);

  return (
    <>
      <div className="pr-8">
        <div>
          <div className="flex justify-between">
            <h3 className="pr-8 text-2xl">All</h3>
            <hr className="bg-gray-700 w-[100%] mt-[15px]"></hr>
          </div>
          <div className="mt-12">
            <div
              onClick={() => {
                setMensBar((prev) => {
                  return !prev;
                });
                setWomensBar(false);
              }}
              className="cursor-pointer hover:text-blue-500 flex justify-between text-slate-500 text-sm"
            >
              <div>Men</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            {mensBar && (
              <div>
                <ul className="p-1 text-slate-600 animate-fade-in-down">
                  <li className="p-1 cursor-pointer hover:text-blue-500">
                    Single
                  </li>
                  <li className="p-1 cursor-pointer hover:text-blue-500 ">
                    Bundle
                  </li>
                </ul>
              </div>
            )}
            <div
              onClick={() => {
                setWomensBar((prev) => {
                  return !prev;
                });
                setMensBar(false);
              }}
              className="cursor-pointer hover:text-blue-500 flex justify-between mt-3 text-slate-500 text-sm"
            >
              <div>Women</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            {womensBar && (
              <div>
                <ul className="p-1 text-slate-600 animate-fade-in-down">
                  <li className="p-1 cursor-pointer hover:text-blue-500">
                    Single
                  </li>
                  <li className="p-1 cursor-pointer hover:text-blue-500">
                    Bundle
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="mt-14">
          <div className="flex justify-between">
            <h4 className=" text-2xl w-40">Filter By</h4>
            <hr className="bg-gray-700 w-[100%] mt-[15px]"></hr>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl">Price</h3>
            <div className="mt-6">
              <div>
                <input
                  type="text"
                  className="focus:outline-none"
                  value={`₹${range[0]}-₹${range[1]}`}
                />
              </div>
              <div className="mt-2">
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, 100000]}
                  min={0}
                  max={100000}
                
                  minDistance={10}
                  onChange={(range, index) => {
                    setRange(range);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="flex justify-between">
            <h4 className=" text-2xl w-40">Tags</h4>
            <hr className="bg-gray-700 w-[100%] mt-[15px]"></hr>
          </div>
          <div className="mt-8">
            <button className="border text-slate-600 border-gray-300 rounded-2xl py-1 px-4 mr-3 hover:bg-blue-500 transition-all duration-500">
              Men
            </button>
            <button className="border  text-slate-600 border-gray-300 rounded-2xl py-1 px-4 hover:bg-blue-500 transition-all duration-500">
              Women
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
