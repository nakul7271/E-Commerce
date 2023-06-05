import React from "react";
import StarSvg from "./StarSvg";
import { ChatSvg } from "./StarSvg";


const SummaryUpper01 = () => {
    return <>
    <p className="mb-1">
                <span className="font-semibold">Collection: </span>
                <span className="text-slate-500">
                  the minimalist collection
                </span>
              </p>
              <h2 className="text-2xl capitalize mb-1">
                quadb men's regular fit solid cotton t-shirt
              </h2>
              <div className="flex items-center mt-4">
                <div className=" flex mr-4">
                  <StarSvg />
                  <StarSvg />
                  <StarSvg />
                  <StarSvg />
                </div>
                <span>
                  <a
                    href="id"
                    className="flex items-center hover:text-blue-500"
                  >
                    <ChatSvg />
                    <span className="ml-1">Read reviews(7)</span>
                  </a>
                </span>
              </div>
              <div className="my-4">
                <ul className="flex items-center">
                  <li
                    id="#"
                    className="mr-3 text-gray-500 line-through text-2xl py-[6px]"
                  >
                    ₹999
                  </li>
                  <li id="#" className="text-2xl font-semibold mr-3">
                    ₹499
                  </li>
                  <li
                    id="#"
                    className="bg-slate-900 text-white text-lg rounded-md px-1"
                  >
                    Save 50.05%
                  </li>
                </ul>
              </div>
              <hr className="bg-gray-700  dark:bg-gray-700"></hr>
    </>
}


export default SummaryUpper01;
