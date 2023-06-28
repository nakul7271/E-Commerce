import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import BottomSlidesCard from "./BottomSlidesCard";

var settings = {
  infinite: true,
  slidesToShow: 1,
  speed: 1000,
  rows: 3,
  initialSlide: 0,
};

const BottomSlides = () => {
    const sliderWomen = useRef();
    const sliderMen = useRef();
  return (
    <>
      <div className="mt-6">
        <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
          <div className="lg:flex justify-between">
            <div className="lg:w-[48%]">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl w-[204px] h-[24px]">Women</h2>

                <hr className="bg-gray-700 w-[40%] sm:w-[58%] md:w-[60%] lg:w-[78%] xl:w-[80%] dark:bg-gray-700 mt-[15px]"></hr>

                <div className="flex mt-3">
                  <button
                    className="text-4xl text-gray-400 mr-2 "
                    onClick={() => sliderWomen?.current?.slickPrev()}
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
                    className="text-4xl text-gray-400 "
                    onClick={() => sliderWomen?.current?.slickNext()}
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
              <div className="mr-5">
                <Slider ref={sliderWomen} {...settings}>
                  <BottomSlidesCard
                    url01="images/women/womanBL01.jpg"
                    url02="images/women/womanBL02.jpg"
                    para="quadb women's regular fit solid cotton t-shirt (pack of 2)"
                    prize="₹699"
                  />
                  <BottomSlidesCard
                    url01="images/women/womanWH01.jpg"
                    url02="images/women/womanWH02.jpg"
                    para="quadb women's regular fit solid cotton t-shirt"
                    prize="₹499"
                  />
                  <BottomSlidesCard
                    url01="images/women/womanBLUE01.jpg"
                    url02="images/women/womanBLUE02.jpg"
                    para="quadb women's regular fit solid cotton t-shirt"
                    prize="₹499"
                  />
                  <BottomSlidesCard
                    url01="images/t-shirts/t-shirtBLACK.jpg"
                    url02="images/women/womanBL02.jpg"
                    para="quadb women's regular fit solid cotton t-shirt (pack of 2)"
                    prize="₹699"
                  />
                  <BottomSlidesCard
                    url01="images/t-shirts/t-shirtWHITE.jpg"
                    url02="images/women/womanWH02.jpg"
                    para="quadb women's regular fit solid cotton t-shirt (pack of 2)"
                    prize="₹699"
                  />
                  <BottomSlidesCard
                    url01="images/t-shirts/t-shirtBLUE.jpg"
                    url02="images/women/womanBLUE02.jpg"
                    para="quadb women's regular fit solid cotton t-shirt (pack of 2)"
                    prize="₹699"
                  />
                </Slider>
              </div>
            </div>
            <div className="lg:w-[48%]">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl w-[204px] h-[24px]">Men</h2>

                <hr className="bg-gray-700 w-[40%] sm:w-[58%] md:w-[60%] lg:w-[78%] xl:w-[80%] dark:bg-gray-700 mt-[15px]"></hr>

                <div className="flex mt-3">
                  <button
                    className="text-4xl text-gray-400 mr-2 "
                    onClick={() => sliderMen?.current?.slickPrev()}
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
                    className="text-4xl text-gray-400 "
                    onClick={() => sliderMen?.current?.slickNext()}
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
              <div className="mr-5">
                <Slider ref={sliderMen} {...settings}>
                  <BottomSlidesCard
                    url01="images/men/manBLACK01.jpg"
                    url02="images/men/manBLACK02.jpg"
                    para="quadb men's regular fit solid cotton t-shirt (pack of 2)"
                    prize="₹699"
                  />
                  <BottomSlidesCard
                    url01="images/men/manWHITE01.jpg"
                    url02="images/men/manWHITE02.jpg"
                    para="quadb men's regular fit solid cotton t-shirt"
                    prize="₹499"
                  />
                  <BottomSlidesCard
                    url01="images/men/manBLUE01.jpg"
                    url02="images/men/manBLUE02.jpg"
                    para="quadb men's regular fit solid cotton t-shirt"
                    prize="₹499"
                  />
                  <BottomSlidesCard
                    url01="images/t-shirts/t-shirtBLACK.jpg"
                    url02="images/men/manBLACK02.jpg"
                    para="quadb women's regular fit solid cotton t-shirt (pack of 2)"
                    prize="₹699"
                  />
                  <BottomSlidesCard
                    url01="images/t-shirts/t-shirtWHITE.jpg"
                    url02="images/men/manWHITE02.jpg"
                    para="quadb women's regular fit solid cotton t-shirt (pack of 2)"
                    prize="₹699"
                  />
                  <BottomSlidesCard
                    url01="images/t-shirts/t-shirtBLUE.jpg"
                    url02="images/men/manBLUE02.jpg"
                    para="quadb men's regular fit solid cotton t-shirt (pack of 2)"
                    prize="₹699"
                  />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomSlides;
