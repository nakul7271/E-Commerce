import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotDealsCard from "./HotDealsCard";

var settings = {
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  speed: 1000,
  rows: 1,
  initialSlide: 0,
};

const HotDeals = () => {
  const slider = useRef();

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl w-60 h-[24px] ">Hot Deals</h2>
        <div className="w-[80%] mr-2">
          <hr className="bg-gray-700 mt-[15px]"></hr>
        </div>

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
              class="w-4 h-4"
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
              class="w-4 h-4"
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
      <div>
        <Slider ref={slider} {...settings}>
          <div>
            <HotDealsCard
              id="ph1"
              productName="Black Shirt"
              para="quadb men's regular fit solid cotton t-shirt (Best Available)"
              prize1={999}
              prize2={499}
              url1="images/men/manBLACK01.jpg"
              url2="images/men/manBLACK02.jpg"
            />
          </div>
          <HotDealsCard
              id="ph2"
              productName="Blue Shirt"
              para="quadb men's regular fit solid cotton t-shirt (Best Available)"
              prize1={999}
              prize2={499}
              url1="images/men/manBLUE01.jpg"
              url2="images/men/manBLUE02.jpg"
            />
         <HotDealsCard
              id="ph3"
              productName="White Shirt"
              para="quadb men's regular fit solid cotton t-shirt (Best Available)"
              prize1={999}
              prize2={499}
              url1="images/men/manWHITE01.jpg"
              url2="images/men/manWHITE02.jpg"
            />
        </Slider>
      </div>
    </div>
  );
};

export default HotDeals;
