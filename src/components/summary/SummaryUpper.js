import React from "react";
import ImageSlider from "./ImageSlider";

import SummaryUpper02 from "./SummaryUpper02";
import SummaryUpper01 from "./SummaryUpper01";
import SummaryUpper03 from "./SummaryUpper03";

const SummaryUpper = () => {
  return (
    <>
      <div className="lg:flex lg:justify-between">
        <div className="lg:w-[45%] mb-10 lg:mb-0">
          <ImageSlider />
        </div>
        <div className="border border-slate-200 rounded-md lg:w-[50%] ">
          <div className="py-8 px-4">
            <SummaryUpper01 />
            <SummaryUpper02 />
            <SummaryUpper03 />
            <div className="">
              <div className="py-4">
                <span className="font-semibold ">Color</span>
                <ul className="flex mt-2">
                  <li
                    id="#"
                    className="bg-black mr-5 shadow-2xl border hover:border-slate-800 w-8 h-8"
                  ></li>
                  <li
                    id="#"
                    className="bg-white mr-5 shadow-2xl border hover:border-slate-800 w-8 h-8"
                  ></li>
                  <li
                    id="#"
                    className="bg-blue-950 mr-5 shadow-2xl border hover:border-slate-800 w-8 h-8"
                  ></li>
                </ul>
              </div>
              <div>
                <span className="font-semibold ">Size</span>
                <ul className=" mt-3  text-slate-700 flex items-center">
                  <li
                    id="#"
                    className="mr-5 font-semibold rounded-full border border-slate-600 px-3 py-1"
                  >
                    S
                  </li>
                  <li
                    id="#"
                    className="mr-5 text-white bg-blue-500 font-semibold rounded-full border border-slate-600 px-2 py-1"
                  >
                    M
                  </li>
                  <li
                    id="#"
                    className="mr-5 font-semibold rounded-full border border-slate-600 px-3 py-1"
                  >
                    L
                  </li>
                  <li
                    id="#"
                    className="mr-5 font-semibold rounded-full border border-slate-600 px-2  py-[6px] text-sm "
                  >
                    XL
                  </li>
                  <div>
                    <span className="text-blue-500 text-sm font-semibold">
                      Size Chart
                    </span>
                  </div>
                </ul>
              </div>
              <div className="flex mt-6">
                <button className="py-3 px-10 rounded-md border border-blue-500 mr-2 hover:text-white hover:bg-slate-900">
                  ADD TO CART
                </button>
                <button className="py-3 px-10 rounded-md border border-blue-500 text-white hover:bg-slate-900 bg-blue-500">
                  BUY NOW
                </button>
              </div>
              <div className="mt-6 text-slate-500  ">
                <button className="flex items-center hover:text-blue-500">
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <span className="ml-3">Add to wishlist</span>
                </button>
              </div>
              <div className="mt-4 flex">
                <span className="font-semibold mr-5">Share</span>
                <ul className="flex">
                  <li id="#" className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                      className="w-6 h-6 hover:scale-110 cursor-pointer rounded-full"
                    >
                      <path
                        fill="lightslategray"
                        fill-rule="evenodd"
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16c24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31Z"
                      />
                    </svg>
                  </li>
                  <li id="#" className="mr-4">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                      className="w-6 h-6 hover:scale-110 cursor-pointer rounded-full"
                    >
                      <path
                        fill="lightslategray"
                        d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.51 97.51 0 0 0 43.33-53.6a197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4a94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5Z"
                      />
                    </svg>
                  </li>
                  <li id="#" className="mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                      className="w-6 h-6 hover:scale-110 cursor-pointer rounded-full"
                    >
                      <path
                        fill="lightslategray"
                        d="m473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72c-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 0 1-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4c57.73 0 112.45-22.62 151.45-63.66c38.34-40.4 58.17-96.3 58.17-154.9c0-24.67-2.48-39.32-2.59-39.96Z"
                      />
                    </svg>
                  </li>
                  <li id="#" className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                      className="w-6 h-6 hover:scale-110 cursor-pointer rounded-full"
                    >
                      <path
                        fill="lightslategray"
                        d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummaryUpper;
