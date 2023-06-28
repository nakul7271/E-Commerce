import React from "react";
import SummaryUpper from "./SummaryUpper";
import MiddleSummary from "./middleSummary/MiddleSummary";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Products from "../featuredProducts/Product";

var settings = {
  arrows:false,
    infinite: true,
    slidesToShow: 4,
    speed: 1000,
    rows: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          rows: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          rows: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          rows: 1,
          slidesToScroll: 2,
          infinite: true,
        },
      },
    ],
  };

const Summary = () => {

    const slider = useRef();
  return (
    <>
      <div className="mt-8">
        <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
          <div>
            <SummaryUpper />
          </div>
          <div>
            <MiddleSummary />
          </div>
          <div>
            <div className="flex justify-between items-center mb-5">
              <h2 className="sm:text-2xl w-[800px] h-[24px] text-lg mt-1 sm:mt-0">12 Other Products In The Same Category:</h2>

              <hr className="bg-gray-700 lg:w-[88%] 1.5md:w-[35%] md:w-[20%] w-[27%] dark:bg-gray-700 mt-[15px]"></hr>

              <div className="flex mt-3 ">
                <button
                  className="text-3xl text-gray-400 mr-2 "
                  onClick={() => slider?.current?.slickPrev()}
                >
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
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  className="text-3xl text-gray-400 "
                  onClick={() => slider?.current?.slickNext()}
                >
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
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
                      </div>
                      <div className="">
                      <Slider ref={slider} {...settings}>
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/men/manBLACK01.jpg"
                  url2="images/men/manBLACK02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/men/manBLUE01.jpg"
                  url2="images/men/manBLUE02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (Best Available)"
                  prize1={2997}
                  prize2={799}
                  url1="images/men/manWHITE01.jpg"
                  url2="images/men/manWHITE02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/t-shirts/t-shirtBLACK.jpg"
                  url2="images/men/manBLACK02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/t-shirts/t-shirtBLUE.jpg"
                  url2="images/men/manBLUE02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/t-shirts/t-shirtWHITE.jpg"
                  url2="images/men/manWHITE02.jpg"
                />
              </Slider>
                      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
