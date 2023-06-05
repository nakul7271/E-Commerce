import React from "react";

const MiddleSummaryCard = (props) => {
  return (
    <>
      <div>
        <div className="mb-3">
          <img
            className="hidden lg:inline-block w-full"
            src={props.url01}
            alt=""
          ></img>
          <img
            className="lg:hidden w-full"
            src={props.url02}
            alt=""
          ></img>
        </div>
        <div className="text-center">
                  <h2 className="font-semibold mb-2">{props.heading }</h2>
          <p className="text-slate-700 mb-3">
            {props.para}
          </p>
        </div>
      </div>
    </>
  );
};

export default MiddleSummaryCard;
