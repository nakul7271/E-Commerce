import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./Product";
import { useRef } from "react";

var settings = {
  arrows:false,
  infinite: true,
  slidesToShow: 3,
  speed: 1000,
  rows: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        rows: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
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
        <div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl w-[204px] h-[24px]">Featured Products</h2>

            <hr className="bg-gray-700 w-[40%] sm:w-[58%] md:w-[60%] lg:w-[78%] xl:w-[80%] dark:bg-gray-700 mt-[15px]"></hr>

            <div className="flex lg:hidden">
              <button
                className="text-3xl text-gray-400 mr-2 "
                onClick={() => slider?.current?.slickPrev()}
              >
                {" "}
                &#8249;{" "}
              </button>
              <button
                className="text-3xl text-gray-400 "
                onClick={() => slider?.current?.slickNext()}
              >
                &#8250;
              </button>
            </div>
          </div>
          <div className="xl:mx-10">
            <Slider ref={slider} {...settings}>
              <Products
                para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/featured/featuredImg10.jpg"
                url2="images/featured/featuredImg11.jpg"
              />
              <Products
                para="quadb women's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/featured/featuredImg20.jpg"
                url2="images/featured/featuredImg21.jpg"
              />
              <Products
                para="quadb men's regular fit solid cotton t-shirt (Best Available)"
                prize1="₹999"
                prize2="₹499"
                url1="images/featured/featuredImg30.jpg"
                url2="images/featured/featuredImg31.jpg"
              />
              <Products
                para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/featured/featuredImg20.jpg"
                url2="images/featured/featuredImg21.jpg"
              />
              <Products
                para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/featured/featuredImg10.jpg"
                url2="images/featured/featuredImg41.jpg"
              />
              <Products
                para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/featured/featuredImg50.jpg"
                url2="images/featured/featuredImg30.jpg"
              />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
