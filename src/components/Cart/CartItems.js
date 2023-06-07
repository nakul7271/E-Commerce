import React from "react";
import CartItemsShippingBox from "./CartItemsShippingBox";
import CartItemsCouponBox from "./CartItemsCouponBox";
import CartItemsCartTotalBox from "./CartItemsCartTotalBox";

const DummyCartItems = [
  {
    name: "Mobile",
    url: "images/cartImages/cart01.jpg",
    price: "60",
    quantity: 2,
    totalAmount: "120",
  },
  {
    name: "Product Name",
    url: "images/cartImages/cart02.jpg",
    price: "60",
    quantity: 2,
    totalAmount: "120",
  },
  {
    name: "Product Name",
    url: "images/cartImages/cart03.jpg",
    price: "60",
    quantity: 2,
    totalAmount: "120",
  },
];

const CartItems = () => {
  const tableRows = DummyCartItems.map((item) => {
    return (
      <tr>
        <td className="py-8 flex justify-center">
          <img className="w-[140px] " src={item.url} alt=""></img>
        </td>
        <td className="py-8 text-center">{item.name}</td>
        <td className="py-8 text-center"> {`$${item.price}`} </td>
        <td className="py-8 ">
          <div className="flex justify-center items-center ">
            <div className="py-2 px-2 border border-slate-200 cursor-pointer">
              -
            </div>
            <input
              className=" py-2 px-2 outline-none border-t border-b border-slate-200 w-[80px] text-center"
              type="text"
              name="amount"
              defaultValue={item.quantity}
            />
            <div className=" border border-slate-200 py-2 px-2 cursor-pointer   ">
              +
            </div>
          </div>
        </td>
        <td className="py-8 text-center">{`$${item.totalAmount}`}</td>
        <td className="py-8">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-slate-600 mr-4 hover:text-blue-600 cursor-pointer"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-slate-600 hover:text-blue-600 cursor-pointer"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </td>
      </tr>
    );
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
                  <th className="py-4 px-11 font-semibold w-[220px] h-[24px]">Product Name</th>
                  <th className="py-4 px-11 font-semibold w-[200px] h-[24px]">Until Price</th>
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
                    <CartItemsShippingBox/>
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:mt-0 mt-4">
                  <div className="md:mx-4 rounded-md bg-gray-100 border border-slate-200">
                    <CartItemsCouponBox/>
                  </div>
                </div>
              </div>
              <div className="w-full lg:mt-0 mt-4 lg:w-1/3">
                <div className="lg:ml-4 rounded-md bg-gray-100 border border-slate-200">
                  <CartItemsCartTotalBox/>
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
