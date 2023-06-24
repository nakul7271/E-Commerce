import React from "react";

const BestSellerCard = (props) => {
  return (
    <>
      <div>
        <div className="mx-2 my-4">
          <div className="rounded-md shadow hover:shadow-lg 0.8sm:flex py-2 group">
            <div className="relative w-[100%] ">
              <img className="w-full" src={props.url01} alt="tshirt1" />
              <img
                src={props.url02}
                alt="tshirt2"
                className=" w-full absolute top-0 transition duration-500 opacity-0 hover:opacity-100"
              />
              <div className="absolute z-[5] right-2 top-2 hidden group-hover:block animate-fade-out">
            <ul className="text-slate-600">
              <li id="#" className="p-2 m-2 bg-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
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
              </li>
              <li id="#"className="p-2 m-2 bg-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </li>
              <li id="#" className="p-2 m-2 bg-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
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
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </li>
            </ul>
          </div>
            </div>
            <div className="w-[100%] pt-4 0.8sm:pt-0 sm:pt-4 px-4 pb-4 text-center 0.8sm:text-left">
              <p className="text-slate-400 text-xs mb-2">
                THE MINIMALIST COLLECTION
              </p>
              <h2 className="mb-2">{props.heading}</h2>
              <div className="text-slate-400 text-sm mb-5">
                Availability :{" "}
                <span className="text-blue-500">{props.stocks}</span>
              </div>
              <p className="text-slate-600">{props.para}</p>
              <div className="py-3">
                <ul className="flex justify-center 0.8sm:justify-start ">
                  <li id="#" className="mr-2 text-slate-400 line-through text-xs py-[6px]">
                    {props.prize1}
                  </li>
                  <li id="#" className="font-semibold">{props.prize2}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellerCard;
