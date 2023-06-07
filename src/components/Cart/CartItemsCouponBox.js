import React from "react";

const CartItemsCouponBox = () => {
  return (
    <div className="py-11 px-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="w-[400px] font-semibold text-xl ">Use Coupon Code</h3>
        <hr className="bg-gray-700 w-full dark:bg-gray-700 mt-2"></hr>
      </div>
      <p className="text-slate-500 mb-3">
        Enter your coupon code if you have one.
      </p>
      <div className="py-2  rounded-md bg-white border mb-6 border-slate-200">
        <input type="text" className="outline-none pl-2 w-full" />
      </div>
      <button className="py-3 px-12 rounded-md text-white hover:bg-slate-900 transition-all duration-500 bg-blue-500">
        GET A QUOTE
      </button>
    </div>
  );
};

export default CartItemsCouponBox;
