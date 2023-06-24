import React from "react";

const BottomSlidesCard = (props) => {
  return (
    <>
      <div className="rounded-md shadow hover:shadow-lg flex py-2 mb-4 ml-1">
        <div className="relative ">
          <img className="w-[120px]" src={props.url01} alt="tshirt1" />
          <img
            src={props.url02}
            alt="tshirt2"
            className="w-[120px] absolute top-0 transition duration-500 opacity-0 hover:opacity-100"
          />
        </div>
        <div className="w-[100%]  0.8sm:p-4 pt-0 pb-4 px-4">
          <p className="text-slate-600 capitalize">{props.para}</p>
          <div className="py-3 font-bold">{props.prize}</div>
        </div>
      </div>
    </>
  );
};

export default BottomSlidesCard;
