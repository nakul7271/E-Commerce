import React from "react";

const SliderContent = (props) => {
  return (
    <>
      <div>
        <div
          className="h-[300px] md:h-[360px] lg:h-[460px] w-full bg-cover bg-right bg-color-burn"
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
                <button className="text-white py-2 0.8sm:mb-0 0.5sm:mb-3 mb-6 px-6 rounded-md bg-blue-600 hover:bg-slate-900 transition-all duration-300" type="button">
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
