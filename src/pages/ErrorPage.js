import React from "react";
import ShopHeader from "../components/shop/ShopHeader";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <ShopHeader heading03="404 Page" />
      <div className="my-12">
        <div className="mx-[5%]  sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
          <h2 className="text-3xl font-semibold">
            The page you are looking for was not found.
          </h2>
                  <div className="mt-10 flex justify-center">
                      <div className="border w-[60%] py-6 border-slate-200 shadow-md flex justify-center">
                          <div className="text-center">
                          <h4 className="font-semibold mb-4">Sorry For The Inconvenience.</h4>
                          <p className="mb-2">Search again what you are looking for</p>
                          <Link className="font-semibold hover:text-blue-500 transition-colors duration-300"  to="/" >Go To Home</Link>
                          </div>
                          
                      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
