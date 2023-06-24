import "../../index.css";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// const optionsLearn = [
//   { label: "Learn More", value: "learnMore" },
//   { label: "About", value: "about" },
//   { label: "Cart", value: "cart" },
//   { label: "Services", value: "services" },
//   { label: "Blogs", value: "blogs" },
//   { label: "Wishlist", value: "wishlist" },
// ];

const LowerHeader = () => {
  const [stickyClass, setStickyClass] = useState("relative");
  const [toggle, setToggle] = useState(false);
  const [toggleLearnMore, setToggleLearnMore] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 280
        ? setStickyClass(
            "fixed top-0 left-0 z-10 bg-white shadow-lg animate-fade-in-down-nav hidden lg:block origin-top w-full "
          )
        : setStickyClass("relative");
    }
  };

  const learnMoreHandler = () => {
    setToggleLearnMore((prev) => { return !prev });
  }

  return (
    <>
      <div className={stickyClass}>
        <div className="mx-[5%]  sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px] ">
          <div className="hidden lg:flex">
            <div className="">
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="flex text-white font-semibold text-sm mr-10 bg-blue-500 py-4 "
              >
                <div className="flex flex-col justify-center">
                  <span className="w-6 h-[1px] bg-white mx-5 my-[3px]" />
                  <span className="w-6 h-[2px] bg-white mx-5 my-[3px]" />
                  <span className="w-6 h-[1px] bg-white mx-5 my-[3px]" />
                </div>
                Browse categories
                <BiChevronDown className="text-xl mr-4 ml-8" />
              </button>
              <div
                className={
                  toggle
                    ? "absolute z-50 w-[247px] bg-white animate-fade-in-down  origin-top "
                    : "hidden"
                }
              >
                <ul>
                  <li
                    id="men"
                    className="border-t border-r border-l border-slate-200  px-4 py-3"
                  >
                    Men
                  </li>
                  <li id="women" className="border border-slate-200  px-4 py-3">
                    Women
                  </li>
                </ul>
              </div>
            </div>

            <div className="">
              <ul className="flex text-sm">
                <li id="home" className="xl:mr-12 mr-6 py-4 ">
                <Link className="hover:text-blue-500" to="/">
                    Home
                  </Link>
                </li>
                <li id="shop" className="xl:mr-12 mr-6 py-4">
                  <Link className="hover:text-blue-500" to="/shop">
                    Shop
                  </Link>
                </li>
                <li id="products" className="xl:mr-12 mr-6 py-4">
                <Link className="hover:text-blue-500" to="/summary">
                    Summary
                  </Link>
                </li>
                <li
                  id="learnMore"
                  className="xl:mr-12 mr-6 py-4 cursor-pointer relative"
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
                  <div
                    className={
                      toggleLearnMore
                        ? "absolute z-50 w-[200px] bg-white animate-fade-in-down origin-top  top-[54px] "
                        : "hidden"
                    }
                  >
                    <ul>
                    <Link onClick={learnMoreHandler} to="about">
                        <li
                          id="women"
                          className="border-r border-l border-b hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-3"
                        >
                          About
                        </li>
                      </Link>
                      <Link onClick={learnMoreHandler} to="cart">
                        <li
                          id="women"
                          className="border-r border-l border-b hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-3"
                        >
                          Cart
                        </li>
                      </Link>

                      <Link onClick={learnMoreHandler} to="compare">
                        <li
                          id="women"
                          className="border-r border-l border-b hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-3"
                        >
                          Compare
                        </li>
                      </Link>
                      <Link onClick={learnMoreHandler} to="auth?mode=login">
                        <li
                          id="women"
                          className="border-r border-l border-b hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-3"
                        >
                          Login / Register
                        </li>
                      </Link>
                      <Link onClick={learnMoreHandler} to="wishlist">
                        <li
                          id="women"
                          className="border-r border-l border-b hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-3"
                        >
                          Wishlist
                        </li>
                      </Link>
                      <Link onClick={learnMoreHandler} to="checkout">
                        <li
                          id="women"
                          className="border-r border-l border-b hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-3"
                        >
                          Checkout
                        </li>
                      </Link>
                      <Link onClick={learnMoreHandler} to="account">
                        <li
                          id="women"
                          className="border-r border-l border-b hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-3"
                        >
                          Account
                        </li>
                      </Link>
                      <Link onClick={learnMoreHandler} to="404error">
                        <li
                          id="women"
                          className="border-r border-l border-b hover:text-blue-500 hover:pl-6 transition-all duration-300 border-slate-200  px-4 py-3"
                        >
                          404 Page
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
                <li id="portfolio" className="xl:mr-12 mr-6 py-4">
                  Portfolio
                </li>
                <li id="buySamples" className="xl:mr-12 mr-6 py-4">
                  Buy Samples
                </li>
                <li id="contacts" className="xl:mr-12 mr-6 py-4">
                  <Link className="hover:text-blue-500" to="contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:hidden">
            <div className=" bg-white">
              <button
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="flex justify-between text-black font-semibold text-sm w-full border py-3 border-slate-200"
              >
                <div className="flex justify-center">
                  <div className="flex flex-col">
                    <span className="w-6 h-[2px] bg-black mx-5 my-[3px]" />
                    <span className="w-6 h-[2px] bg-black mx-5 my-[3px]" />
                    <span className="w-6 h-[2px] bg-black mx-5 my-[3px]" />
                  </div>
                  <div>BROWSE CATEGORIES</div>
                </div>

                <BiChevronDown className=" text-xl mr-4 ml-8" />
              </button>
              <div
                className={
                  toggle
                    ? "relative w-full z-10 bg-white animate-fade-in-down origin-top "
                    : "hidden"
                }
              >
                <ul className="absolute w-full bg-white">
                  <li className="border border-slate-200  px-4 py-3">Men</li>
                  <li className="border-r border-l border-b border-slate-200  px-4 py-3">Women</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-gray-700 hidden lg:block dark:bg-gray-700"></hr>
    </>
  );
};

export default LowerHeader;
