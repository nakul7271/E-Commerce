import React from "react";

const Images = () => {
  return (
    <>
      <div className="mt-8 mb-5">
        <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
          <div className="xl:mx-12 md:flex">
            <div className="mb-6 ">
              <div className="relative">
                <img
                  className="w-[100%] hidden lg:block lg:h-[300px] xl:h-[350px] "
                  src="images/banner01.jpg"
                  alt=""
                ></img>
                <img
                  className="w-[100%] lg:hidden "
                  src="images/banner010.jpg"
                  alt=""
                ></img>
                <div className="absolute inset-0 border-[15px] border-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-1000 ease-in-out"></div>
              </div>
            </div>
            <div className="mb-6 px-4">
              <div className="relative">
                <img
                  className="w-[100%] hidden lg:block lg:h-[300px] xl:h-[350px] "
                  src="images/banner02.jpg"
                  alt=""
                ></img>
                <img
                  className="w-[100%] lg:hidden "
                  src="images/banner020.jpg"
                  alt=""
                ></img>
                <div className="absolute inset-0 border-[15px] border-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-1000 ease-in-out"></div>
              </div>
            </div>
            <div className="mb-6 px-4">
              <div className="relative">
                <img
                  className="w-[100%] hidden lg:block lg:h-[300px] xl:h-[350px] "
                  src="images/banner03.jpg"
                  alt=""
                ></img>
                <img
                  className="w-[100%] lg:hidden "
                  src="images/banner030.jpg"
                  alt=""
                ></img>
                <div className="absolute inset-0 border-[15px] border-gray-600 opacity-0 hover:opacity-30 transition-opacity duration-1000 ease-in-out"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
