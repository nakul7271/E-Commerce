import React from "react";
import StarSvg from "../summary/StarSvg";

const Compare = () => {
  return (
    <div className="my-10">
      <div className="mx-[5%]  sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div className="overflow-x-auto">
          <table className="w-full border border-slate-200">
            <tbody>
              <tr className="border-b border-slate-200 text-center">
                <td className="border-r border-slate-200 font-semibold text-xl px-8 py-7">
                  Product
                </td>
                <td className="border-r border-slate-200 px-8 pt-20 pb-7  ">
                  <img src="images/compare/compare01.jpg" alt="#"></img>
                  <p className="mt-4 ">Camera</p>
                  <p className="font-semibold ">Zeon Zen 4 Pro</p>
                </td>
                <td className="border-r border-slate-200 px-8 pt-20 pb-7 ">
                  <img className="" src="images/compare/compare02.jpg" alt="#"></img>
                  <p className="mt-4 ">Doren</p>
                  <p className="font-semibold ">Aquet Doren D 420</p>
                </td>
                <td className="px-8 pt-20 pb-7 ">
                  <img src="images/compare/compare03.jpg" alt="#"></img>
                  <p className="mt-4 ">Games</p>
                  <p className="font-semibold ">Game Station X 22</p>
                </td>
              </tr>

              <tr className="border-b border-slate-200 text-center">
                <td className="border-r border-slate-200 font-semibold text-xl px-8 py-7">
                  Description
                </td>
                <td className="border-r border-slate-200  px-8 py-7  ">
                  <p>
                    Samsome Note Book Pro 5 is the best Laptop on this budget.
                    You can satisfy after usign this laptop. It’s performance is
                    awesome. Designer’s love it.
                  </p>
                </td>
                <td className="border-r border-slate-200  px-8 py-7  ">
                  <p>
                    Samsome Note Book Pro 5 is the best Laptop on this budget.
                    You can satisfy after usign this laptop. It’s performance is
                    awesome. Designer’s love it.
                  </p>
                </td>
                <td className="border-r border-slate-200  px-8 py-7  ">
                  <p>
                    Samsome Note Book Pro 5 is the best Laptop on this budget.
                    You can satisfy after usign this laptop. It’s performance is
                    awesome. Designer’s love it.
                  </p>
                </td>
              </tr>

              <tr className="border-b border-slate-200 text-center">
                <td className="border-r border-slate-200 font-semibold text-xl px-8 py-7">
                  Price
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  $295
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  $275
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  $395
                </td>
              </tr>

              <tr className="border-b border-slate-200 text-center">
                <td className="border-r border-slate-200 font-semibold text-xl px-8 py-7">
                  Color
                </td>
                <td className="border-r border-slate-200  font-semibold text-base px-8 py-7  ">
                  Black
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  Black
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  Black
                </td>
              </tr>

              <tr className="border-b border-slate-200 text-center">
                <td className="border-r border-slate-200 font-semibold text-xl px-8 py-7">
                  Stock
                </td>
                <td className="border-r border-slate-200 font-semibold text-base   px-8 py-7  ">
                  In Stock
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  In Stock
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  In Stock
                </td>
              </tr>

              <tr className="border-b border-slate-200 text-center">
                <td className="border-r border-slate-200 font-semibold text-xl px-8 py-7">
                  Add to cart
                </td>
                <td className="border-r border-slate-200 font-semibold text-base   px-8 py-7  ">
                  <button className="py-2 px-6 w-[150px] md:mx-12 lg:mx-0 bg-blue-500 rounded-md text-white hover:bg-slate-900 transition-colors duration-300">
                    ADD TO CART
                  </button>
                </td>
                <td className="border-r  border-slate-200 font-semibold text-base  px-8 py-7  ">
                  <button className="py-2 px-6 w-[150px] md:mx-12 lg:mx-0 bg-blue-500 rounded-md text-white hover:bg-slate-900 transition-colors duration-300">
                    ADD TO CART
                  </button>
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  <button className="py-2 px-6 w-[150px] md:mx-12 lg:mx-0 bg-blue-500 rounded-md text-white hover:bg-slate-900 transition-colors duration-300">
                    ADD TO CART
                  </button>
                </td>
              </tr>

              <tr className="border-b border-slate-200 text-center">
                <td className="border-r border-slate-200 font-semibold text-xl px-8 py-7">
                  Delete
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 hover:text-blue-500 transition-all duration-300 cursor-pointer "
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 hover:text-blue-500 transition-all duration-300 cursor-pointer "
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 hover:text-blue-500 transition-all duration-300 cursor-pointer "
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-slate-200 text-center">
                <td className="border-r border-slate-200 font-semibold text-xl px-8 py-7">
                  Rating
                </td>
                <td className="border-r border-slate-200 font-semibold text-base   px-8 py-7  ">
                  <div className="flex justify-center">
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                  </div>
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  <div className="flex justify-center">
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                  </div>
                </td>
                <td className="border-r border-slate-200 font-semibold text-base  px-8 py-7  ">
                  <div className="flex justify-center">
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                    <StarSvg />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Compare;
