import "../../index.css";
import MainForm from "../MainForm";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import Sidebar from "../UI/Sidebar";
import { useState,useEffect } from "react";

const MiddleHeader = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 280 ? setStickyClass('fixed top-0 left-0 z-10 bg-white shadow-lg animate-fade-in-down-nav origin-top w-full lg:hidden ') : setStickyClass('relative');
    }
  };

  const sideBarToggle = () => {
    setShowSidebar(() => {
      setShowSidebar(!showSidebar);
    });
  };

  return (
    <div>
      <div className="py-[30px] z-0 ">
        <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[1.5%] lg:px-[17px] xl:mx-[7%] xl:px-[20px] ">
          <div className={`flex justify-between ${stickyClass} ` }>
            <div>
              <Link>
                <img
                  className="h-[78px] w-[213px]"
                  src="./images/logo.png"
                  alt="quadb"
                />
              </Link>
            </div>
            <div className=" grid content-center">
              <div className="flex  ">
                <div className="mr-7 rounded-md hidden lg:inline-block ">
                  <MainForm />
                </div>
                <div className=" grid content-center sm:pr-7 pr-2">
                  <Cart />
                </div>
                <div className="inline-block lg:hidden ">
                  <button
                    className="pt-5"
                    onClick={() => {
                      setShowSidebar(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:hidden ">
            <MainForm />
          </div>
        </div>
      </div>
      <hr className="bg-gray-700 hidden lg:block dark:bg-gray-700"></hr>

      {showSidebar && (
        <Sidebar showSidebar={showSidebar} onClose={sideBarToggle} />
      )}
    </div>
  );
};

export default MiddleHeader;
