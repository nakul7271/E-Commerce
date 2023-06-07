import React, { useState } from "react";
import BillingDetail from "./BillingDetail";

const Checkout = () => {
  const [toggle01, setToggle01] = useState(false);
  const [toggle02, setToggle02] = useState(false);
  const [toggle03, setToggle03] = useState(false);

  return (
    <div className="mt-10">
      <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div className="lg:flex justify-between">
          <div className="lg:w-[59%] w-full">
            <BillingDetail />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-[38%] w-full">
            <h3 className="font-semibold text-2xl">Your Order</h3>
            <div className="my-6 bg-gray-100 ">
              <div className="py-8 px-10">
                <div className="font-semibold flex justify-between text-lg mb-6">
                  <span>Product</span>
                  <span>Total</span>
                </div>
                <hr className="bg-gray-700  dark:bg-gray-700"></hr>
                <div className="mt-6 mb-1 flex justify-between text-slate-600">
                  <p>Product Name X 1</p>
                  <span>$329.00</span>
                </div>
                <div className="flex justify-between mb-6  text-slate-600">
                  <p>Product Name X 1</p>
                  <span>$329.00</span>
                </div>
                <hr className="bg-gray-700  dark:bg-gray-700"></hr>
                <div className="my-5 flex justify-between">
                  <span className="text-lg">Shipping</span>
                  <span className="text-slate-600">Free shipping</span>
                </div>
                <hr className="bg-gray-700  dark:bg-gray-700"></hr>
                <div className="flex justify-between text-lg font-semibold my-6">
                  <span className="">Total</span>
                  <span className="text-blue-500">$329.00</span>
                </div>
                <hr className="bg-gray-700  dark:bg-gray-700"></hr>

                <div className="my-8 ">
                  <h5
                    onClick={() => {
                      setToggle01((prev) => {
                        return !prev;
                      });
                    }}
                    className="cursor-pointer mt-3 mb-1 font-semibold"
                  >
                    Direct bank transfer
                  </h5>
                  {toggle01 && (
                    <p className="text-slate-600 pl-3">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  )}
                  <h5
                    onClick={() => {
                      setToggle02((prev) => {
                        return !prev;
                      });
                    }}
                    className="cursor-pointer mt-3 mb-1 font-semibold"
                  >
                    Check payments
                  </h5>
                  {toggle02 && (
                    <p className="text-slate-600 pl-3">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  )}
                  <h5
                    onClick={() => {
                      setToggle03((prev) => {
                        return !prev;
                      });
                    }}
                    className="cursor-pointer mt-3 mb-1 font-semibold"
                  >
                    Cash on delivery
                  </h5>
                  {toggle03 && (
                    <p className="text-slate-600 pl-3">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <button className="w-full font-semibold text-white py-3 px-6 rounded-md bg-blue-500 hover:bg-slate-900 transition-all duration-500">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
