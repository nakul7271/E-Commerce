import React from "react";

const MainImg = () => {
  return (
    <>
      <div className="mt-8">
        <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
          <div className="mx-2 xl:mx-12 relative">
            <img
              className="w-[100%] hidden lg:block lg:h-[300px] xl:h-[350px] "
              src="images/main01.jpg"
              alt="quadb-tshirt"
            ></img>
            <img className="w-[100%] lg:hidden " src="images/main02.jpg" alt="quadb-tshirt"></img>
            <div className="absolute inset-0 border-[15px] border-gray-400 opacity-0 hover:opacity-30 transition-opacity duration-1000 ease-in-out"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainImg;
