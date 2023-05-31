import React from "react";

const ShopCard = (props) => {
  return (
    <>
      <div>
        <div className="mx-2 my-4">
          <div className="rounded-b-md shadow hover:shadow-lg md:flex md:justify-between">
            <div className="relative md:w-[50%] lg:w-[40%] ">
              <img className="w-[100%] lg:w-[80%]" src={props.url1} alt="tshirt1" />
              <img
                src={props.url2}
                alt="tshirt2"
                className="w-[100%] lg:w-[80%] absolute top-0 transition duration-500 opacity-0 hover:opacity-100"
              />
            </div>
            <div className="lg:flex md:w-[50%] lg:w-[60%]">
              <div className="py-4 pl-2 lg:w-[50%]">
                <h2 className="mb-2">{props.para}</h2>
                <p className="text-slate-400 text-xs mb-2">
                  THE MINIMALIST COLLECTION
                </p>
                <p className="text-slate-500">{props.description}</p>
              </div>
              <div className="lg:w-[50%] text-center p-4 capitalize ">
                <div className="text-slate-500">
                  Availability :
                  <span className="text-blue-500">{props.availability}</span>
                </div>
                <div className="text-slate-400 text-sm mb-5">
                  Available Size :{" "}
                  <ul className="flex justify-center text-black">
                    <li id="#" className="mr-2">
                      S,
                    </li>
                    <li id="#" className="mr-2">
                      M,
                    </li>
                    <li id="#" className="mr-2">
                      L,
                    </li>
                    <li id="#" className="mr-2">
                      XL
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex justify-center">
                    <li
                      id="#"
                      className="mr-2 text-slate-400 line-through text-xs py-[6px]"
                    >
                      {props.prize1}
                    </li>
                    <li id="#" className="font-semibold">
                      {props.prize2}
                    </li>
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
