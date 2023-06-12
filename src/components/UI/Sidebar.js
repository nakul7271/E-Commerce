import { Backdrop } from "./Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {

  const [toggleLearnMore, setToggleLearnMore] = useState(false);

  const learnMoreHandler = () => {
    setToggleLearnMore((prev) => { return !prev });
  }

  return (
    <div>
      {props.showSidebar && <Backdrop onClose={props.onClose} />}
      <div
        className={`top-0 left-0 sm:w-[35vw] w-[60%] bg-white border border-slate-200  p-10  text-white fixed h-full z-40 animate-fade-in-right origin-left ${
          props.showSidebar ? "translate-x-0 " : "translate-x-[-35vw]"
        }`}
      >
        <div className="relative">
          <button onClick={props.onClose} className="absolute right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6">
          <ul className="text-sm text-slate-700">
            <li className="xl:mr-12 mr-6 py-4 cursor-pointer ">Home</li>
            <li className="xl:mr-12 mr-6 py-4 cursor-pointer">Shop</li>
            <li className="xl:mr-12 mr-6 py-4 cursor-pointer">Products</li>
            <li
              id="learnMore"
              className="xl:mr-12 mr-6 py-4 cursor-pointer"
            >
              <button
                onClick={learnMoreHandler}
                className={`flex items-center hover:text-blue-500 transition-all duration-300 ${
                  toggleLearnMore ? "text-blue-500" : ""
                } `}
              >
                Learn More{" "}
                <span className="ml-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
              {toggleLearnMore&&<div
                className="bg-white animate-fade-in-down origin-top"
              >
                <ul>
                  <li
                    id="men"
                    className=" hover:text-blue-500 hover:pl-6 transition-all duration-300  border-slate-200  px-4 py-1"
                  >
                    About
                  </li>
                  <Link onClick={learnMoreHandler} to="cart">
                    <li
                      id="women"
                      className=" hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-1"
                    >
                      Cart
                    </li>
                  </Link>

                  <li
                    id="women"
                    className=" hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-1"
                  >
                    Services
                  </li>
                  <li
                    id="women"
                    className=" hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-1"
                  >
                    Blogs
                  </li>
                  <Link onClick={learnMoreHandler} to="wishlist">
                    <li
                      id="women"
                      className=" hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-1"
                    >
                      Wishlist
                    </li>
                  </Link>
                  <Link onClick={learnMoreHandler} to="checkout">
                    <li
                      id="women"
                      className=" hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-1"
                    >
                      Checkout
                    </li>
                  </Link>
                </ul>
              </div>}
            </li>
            <li className="xl:mr-12 mr-6 py-4 cursor-pointer">Portfolio</li>
            <li className="xl:mr-12 mr-6 py-4 cursor-pointer">Buy Samples</li>
            <li className="xl:mr-12 mr-6 py-4 cursor-pointer">Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
