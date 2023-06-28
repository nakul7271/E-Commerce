import React from "react";
import CartItemsShippingBox from "./CartItemsShippingBox";
import CartItemsCouponBox from "./CartItemsCouponBox";
import CartItemsCartTotalBox from "./CartItemsCartTotalBox";
import { useSelector } from "react-redux";
import CartItemsRow from "./CartItemsRow";

const CartItems = () => {
  const cartItemsArray = useSelector((state) => state.cart.cartItems);

  const tableRows = cartItemsArray.map((item) => {
    return <CartItemsRow key={item.id} item={item} />;
  });

  return (
    <div className="mt-12">
      <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <h3 className="mb-8 text-3xl font-semibold">Your Cart Items</h3>
        <div className="">
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200 ">
              <thead className="uppercase bg-gray-100 border-b border-slate-200">
                <tr>
                  <th className="py-4 px-11 font-semibold">Image</th>
                  <th className="py-4 px-11 font-semibold  h-[24px]">
                    <button className="w-[130px] font-semibold uppercase cursor-default">
                    Product Name
                    </button>
                    
                  </th>
                  <th className="py-4 px-11 font-semibold w-[200px] h-[24px]">
                  <button className="w-[100px] font-semibold uppercase cursor-default">
                    Util price
                    </button>
                  </th>
                  <th className="py-4 px-11 font-semibold">Qty</th>
                  <th className="py-4 px-11 font-semibold">Subtotal</th>
                  <th className="py-4 px-11 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">{tableRows}</tbody>
            </table>
          </div>
          <div className="mt-8 mb-15">
            <div className="lg:flex justify-between">
              <div>
                <button className="py-3 lg:px-16 md:px-10 px-5 rounded-md hover:text-white hover:bg-blue-500 transition-all duration-500 bg-gray-200">
                  CONTINUE SHOPPING
                </button>
              </div>
              <div className="sm:flex lg:mt-0 mt-4">
                <button className="py-3 lg:px-16 md:px-10 px-5 rounded-md mr-8 hover:text-white hover:bg-blue-500 transition-all duration-500 bg-gray-200">
                  UPDATE SHOPPING CART
                </button>
                <button className="py-3 sm:mt-0 mt-4 lg:px-16 md:px-10 px-5 rounded-md text-white hover:bg-slate-900 transition-all duration-500 bg-blue-500">
                  CLEAR SHOPPING CART
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <div className="lg:flex">
              <div className="md:flex w-full lg:w-2/3">
                <div className="w-full md:w-1/2">
                  <div className="md:mr-4 rounded-md bg-gray-100 border border-slate-200">
                    <CartItemsShippingBox />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:mt-0 mt-4">
                  <div className="md:mx-4 rounded-md bg-gray-100 border border-slate-200">
                    <CartItemsCouponBox />
                  </div>
                </div>
              </div>
              <div className="w-full lg:mt-0 mt-4 lg:w-1/3">
                <div className="lg:ml-4 rounded-md bg-gray-100 border border-slate-200">
                  <CartItemsCartTotalBox />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-96">footer</div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
