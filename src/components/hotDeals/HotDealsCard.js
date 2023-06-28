import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/index";
import { wishlistActions } from "../store/index";

const HotDealsCard = (props) => {

    const dispatch = useDispatch();

    const { id, productName, prize2, url1 } = props;

    const addCartHandler = () => {
        dispatch(
          cartActions.addToCart({
            id: id,
            productName: productName,
            price: prize2,
            quantity: 1,
            imageUrl: url1,
          })
        );
      };
    
      const addWishlistHandler = () => {
        dispatch(
          wishlistActions.addToWishlist({
            id: id,
            productName: productName,
            price: prize2,
            quantity: 1,
            imageUrl: url1,
          })
        );
      };


  return (
    <div className="p-12 md:p-4 lg:p-9 border border-blue-500 rounded-md relative group">
      <div className="relative w-full">
        <img className="w-full" src={props.url1} alt="tshirt1" />
        <img
          src={props.url2}
          alt="tshirt2"
          className="w-full absolute top-0 transition duration-500 opacity-0 hover:opacity-100"
        />
      </div>
      <div className="mt-6">
        <div className="text-center">
          <p className="text-slate-400 text-xs mb-4">
            THE MINIMALIST COLLECTION
          </p>
          <h2 className="mb-4">
          {props.para}
          </h2>
          <ul className="flex justify-center mb-4">
            <li
              id="#"
              className="mr-2 text-slate-400 line-through text-xs py-[6px]"
            >
              ₹{props.prize1}
            </li>
            <li id="#" className="font-semibold">
              ₹{props.prize2}
            </li>
          </ul>
          <div className="text-slate-400 text-sm mb-2">
            Availability : <span className="text-blue-500">300 In Stocks</span>
          </div>
          <div className="mt-6 mb-10">
            <div className="flex justify-center ">
              <span className="flex">
                <div>
                  <p className="text-4xl md:text-xl lg:text-4xl">0</p>
                  <p className="text-xs">DAYS</p>
                </div>
                <div className="text-4xl md:text-xl lg:text-4xl mx-2">:</div>
              </span>
              <span className="flex">
                <div>
                  <p className="text-4xl md:text-xl lg:text-4xl">0</p>
                  <p className="text-xs">HOURS</p>
                </div>
                <div className=" text-4xl md:text-xl lg:text-4xl mx-2">:</div>
              </span>
              <span className="flex">
                <div>
                  <p className="text-4xl md:text-xl lg:text-4xl">00</p>
                  <p className="text-xs">MINS</p>
                </div>
                <div className="text-4xl md:text-xl lg:text-4xl mx-2">:</div>
              </span>
              <span className="flex">
                <div>
                  <p className="text-4xl md:text-xl lg:text-4xl">00</p>
                  <p className="text-xs">SEC</p>
                </div>
              </span>
            </div>
          </div>
          <div>
            <button
              onClick={addCartHandler}
              className=" bg-blue-500 py-2 px-4 rounded-md text-white hover:bg-slate-900 transition-all duration-300 animate-fade-out"
            >
              ADD TO CART
            </button>
          </div>
        </div>
          </div>
          <div className="absolute z-[5] right-2 top-2 hidden group-hover:block animate-fade-out">
            <ul className="text-slate-600">
              <li id="1" className="cursor-pointer p-2 m-2 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </li>
              <li id="2" onClick={addWishlistHandler} className="cursor-pointer p-2 m-2 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </li>
              <li id="3" className="cursor-pointer p-2 m-2 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
              </li>
            </ul>
          </div>
    </div>
  );
};

export default HotDealsCard;
