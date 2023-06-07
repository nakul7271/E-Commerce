
import { Link } from "react-router-dom";
import React from "react";

const ShopHeader = (props) => {
    return <>
    <div className="py-6 my-7 lg:my-0 bg-gray-100">
        <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
          <ul className="flex items-center">
            <li className="pr-2">Home</li>
            <li className="pr-2" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="pr-2 hover:text-blue-500"> <Link to="/">Shop</Link> </li>
            <li className="pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="text-blue-500" >{props.heading03}</li>
          </ul>
        </div>
      </div>
    </>
}



export default ShopHeader;
