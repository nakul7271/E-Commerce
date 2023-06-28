import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./Product";
import { useRef } from "react";
import HotDeals from "../hotDeals/HotDeals";

var settings = {
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  speed: 1000,
  rows: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        rows: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const FeaturedProducts = () => {
  const slider = useRef();

  return (
    <>
      <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div className="md:flex">
          <div className="w-full md:w-[65%] lg:w-[70%] xl:w-2/3">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl w-60 h-[24px] ">Featured Products</h2>
              <div className="lg:w-[70%] 1.5md:w-[20%] md:w-[13%] 0.8sm:w-[45%] 0.5sm:w-[25%] w-[10%] mr-3">
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
                  id="p4"
                  productName="White Shirt"
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/featured/featuredImg10.jpg"
                  url2="images/featured/featuredImg11.jpg"
                />
                <Products
                  id="p5"
                  productName="Black Shirt"
                  para="quadb women's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/featured/featuredImg20.jpg"
                  url2="images/featured/featuredImg21.jpg"
                />
                <Products
                  id="p6"
                  productName="Black Shirt"
                  para="quadb men's regular fit solid cotton t-shirt (Best Available)"
                  prize1={999}
                  prize2={499}
                  url1="images/featured/featuredImg30.jpg"
                  url2="images/featured/featuredImg31.jpg"
                />
                <Products
                  id="p7"
                  productName="Blue Shirt"
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/featured/featuredImg20.jpg"
                  url2="images/featured/featuredImg21.jpg"
                />
                <Products
                  id="p8"
                  productName="Blue Shirt"
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/featured/featuredImg10.jpg"
                  url2="images/featured/featuredImg41.jpg"
                />
                <Products
                  id="p9"
                  productName="White Shirt"
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/featured/featuredImg50.jpg"
                  url2="images/featured/featuredImg30.jpg"
                />
                <Products
                  id="p10"
                  productName="White Shirt"
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/featured/featuredImg10.jpg"
                  url2="images/featured/featuredImg41.jpg"
                />
                <Products
                  id="p11"
                  productName="White Shirt"
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1={2997}
                  prize2={799}
                  url1="images/featured/featuredImg50.jpg"
                  url2="images/featured/featuredImg30.jpg"
                />
              </Slider>
            </div>
          </div>
          <div className="md:w-[35%] lg:w-[30%] xl:w-1/3">
            <div className="w-full md:ml-3 lg:ml-8">
              <HotDeals />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
