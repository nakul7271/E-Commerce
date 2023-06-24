import { Backdrop } from "./Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [toggleLearnMore, setToggleLearnMore] = useState(false);

  const learnMoreHandler = () => {
    setToggleLearnMore((prev) => {
      return !prev;
    });
  };

  return (
    <div className="lg:hidden">
      {props.showSidebar && <Backdrop onClose={props.onClose} />}
      <div
        className={`top-0 left-0 w-[270px] 0.8sm:w-[300px] sm:w-[350px] bg-white border border-slate-200 overflow-y-auto p-10  text-white fixed h-full z-40 animate-fade-in-right origin-left ${
          props.showSidebar ? "translate-x-0 " : "translate-x-[-35vw]"
        }`}
      >
        <div className=" flex justify-end">
          <button onClick={props.onClose} className="">
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
        <hr className="w-full bg-slate-200 mt-2"></hr>
        <div className="mt-6 uppercase">
          <ul className="text-sm text-slate-500">
            <li className="xl:mr-12 mr-6 py-4    ">
              <Link
                onClick={props.onClose}
                className="hover:text-blue-500 transition-all duration-300"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="xl:mr-12 mr-6 py-4">
              <Link
                onClick={props.onClose}
                className="hover:text-blue-500 transition-all duration-300"
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li className="xl:mr-12 mr-6 py-4 ">Products</li>
            <li id="learnMore" className="xl:mr-12 mr-6 py-4  ">
              <button
                onClick={learnMoreHandler}
                className={`flex w-full justify-between hover:text-blue-500 transition-all uppercase duration-300 ${
                  toggleLearnMore ? "text-blue-500" : ""
                } `}
              >
                <span>Learn More</span>
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
              {toggleLearnMore && (
                <div className="bg-white animate-fade-in-down origin-top capitalize">
                  <ul>
                    <li id="men" className="   border-slate-200  px-4 pt-4">
                      <Link
                        onClick={props.onClose}
                        className="hover:text-blue-500 hover:pl-2 transition-all duration-300"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>

                    <li id="women" className="  border-slate-200  px-4 pt-4">
                      <Link
                        onClick={props.onClose}
                        className="hover:text-blue-500 hover:pl-2 transition-all duration-300"
                        to="/cart"
                      >
                        Cart
                      </Link>
                    </li>

                    <li id="women" className="  border-slate-200  px-4 pt-4">
                      <Link
                        onClick={props.onClose}
                        className="hover:text-blue-500 hover:pl-2 transition-all duration-300"
                        to="/compare"
                      >
                        Compare
                      </Link>
                    </li>
                    <li id="women" className="  border-slate-200  px-4 pt-4">
                      <Link
                        onClick={props.onClose}
                        className="hover:text-blue-500 hover:pl-2 transition-all duration-300"
                        to="/auth"
                      >
                        Login / Register
                      </Link>
                    </li>

                    <li id="women" className="  border-slate-200  px-4 pt-4">
                      <Link
                        onClick={props.onClose}
                        className="hover:text-blue-500 hover:pl-2 transition-all duration-300"
                        to="/wishlist"
                      >
                        Wishlist
                      </Link>
                    </li>

                    <li id="women" className="  border-slate-200  px-4 pt-4">
                      <Link
                        onClick={props.onClose}
                        className="hover:text-blue-500 hover:pl-2 transition-all duration-300"
                        to="/checkout"
                      >
                        Checkout
                      </Link>
                    </li>
                    <li id="women" className="  border-slate-200  px-4 pt-4">
                      <Link
                        onClick={props.onClose}
                        className="hover:text-blue-500 hover:pl-2 transition-all duration-300"
                        to="/account"
                      >
                        Account
                      </Link>
                    </li>
                    <li id="women" className="  border-slate-200  px-4 pt-4">
                      <Link
                        onClick={props.onClose}
                        className="hover:text-blue-500 hover:pl-2 transition-all duration-300"
                        to="/404error"
                      >
                        404 Page
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="xl:mr-12 mr-6 py-4 ">Portfolio</li>
            <li className="xl:mr-12 mr-6 py-4 ">Buy Samples</li>
            <li className="xl:mr-12 mr-6 py-4 ">
              <Link
                onClick={props.onClose}
                className="hover:text-blue-500 hover:pl-2 transition-all duration-300"
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
