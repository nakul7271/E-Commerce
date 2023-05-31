import React from "react";

// "url(./images/topImg01.jpg)"
// The Minimalist Collection
// Ft. Shubham Semwal

const SliderContent = (props) => {
  return (
    <>
      <div>
        <div
          className="h-[300px] md:h-[360px] lg:h-[460px] w-full bg-cover bg-right"
          style={{ backgroundImage: props.url }}
        >
          <div
            className={`bg-slate-200 bg-opacity-30 h-full flex flex-col justify-center ${
              props.color ? "text-white" : "text-black"
            } `}
          >
            <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[1.5%] lg:px-[17px] xl:mx-[7%] xl:px-[20px] ">
              <div className="pl-[30px] md:pl-[60px]">
                <h1 className="text-2xl sm:text-3xl md:text-5xl  font-bold font-sans">
                  {props.h101}
                </h1>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                  {props.h102}
                </h1>
                <p className="mt-[25px] mb-[50px]  md:text-xl">{props.para}</p>
                <button className="text-white" type="button">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderContent;
