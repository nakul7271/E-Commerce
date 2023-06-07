import React from "react";

const CartItemsCartTotalBox = () => {
  return (
    <div className="py-11 px-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="w-[200px]  font-semibold text-xl">Cart Total</h3>
        <hr className="bg-gray-700 w-full dark:bg-gray-700 mt-2"></hr>
      </div>
      <div className="flex justify-between items-center my-8">
        <span>Total Products</span>
        <span className="font-semibold text-2xl">$260.00</span>
      </div>
      <hr className="bg-gray-700  dark:bg-gray-700"></hr>
      <div className="my-8">
        <h5 className="mb-2">Total Shipping</h5>
        <ul>
          <li id="#" className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" />
              <span className="ml-2">Standard</span>
            </div>
            <span>$20.00</span>
          </li>
          <li id="#" className="flex justify-between">
            <div className="flex items-center">
              <input type="checkbox" />
              <span className="ml-2">Express</span>
            </div>
            <span>$30.00</span>
          </li>
        </ul>
          </div>
          <hr className="bg-gray-700  dark:bg-gray-700"></hr>
          <h4 className="text-2xl text-blue-500 flex justify-between my-5 font-semibold">
              <span>Grand Total</span>
              <span>$260</span>
          </h4>
          <button className="py-3 px-12 w-full rounded-md text-white hover:bg-slate-900 transition-all duration-500 bg-blue-500">
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default CartItemsCartTotalBox;
