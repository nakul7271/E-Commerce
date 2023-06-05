import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Products from "./Product";
import { useRef } from "react";
import BestSellerCard from "./BestSellerCard";

var settings = {
  arrows:false,
  infinite: true,
  slidesToShow: 2,
  speed: 1000,
  rows: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const BestSeller = () => {
  const slider = useRef();

  return (
    <>
      <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div className="mt-8">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl w-[204px] h-[24px]">Best Sellers</h2>

            <hr className="bg-gray-700 w-[40%] sm:w-[58%] md:w-[60%] lg:w-[78%] xl:w-[80%] dark:bg-gray-700 mt-[15px]"></hr>

            <div className="flex">
              <button
                className="text-4xl text-gray-400 mr-2 "
                onClick={() => slider?.current?.slickPrev()}
              >
                {" "}
                &#8249;{" "}
              </button>
              <button
                className="text-4xl text-gray-400 "
                onClick={() => slider?.current?.slickNext()}
              >
                &#8250;
              </button>
            </div>
          </div>
          <div className="xl:mx-10">
            <Slider ref={slider} {...settings}>
              <BestSellerCard
                heading="quadb women's regular fit solid cotton t-shirt"
                stocks="900 In Stock"
                para="fabric: 80% cotton & 20% polyester, style: regular, neck
                        style: round neck, pattern: solid, wash care: machine
                        wash, number of items in pack: 1, color: ink blue"
                prize1="₹1998"
                prize2="₹699"
                url01="images/featured/featuredImg20.jpg"
                url02="images/featured/featuredImg21.jpg"
              />
              <BestSellerCard
                heading="quadb men's regular fit solid cotton t-shirt"
                stocks="300 In Stock"
                para="fabric: 80% cotton & 20% polyester,
                style: regular,
                neck style: round neck,
                pattern: solid,
                wash care: machine wash,
                number of items in pack: 1,
                color: ink blue"
                prize1="₹999"
                prize2="₹499"
                url01="images/featured/featuredImg51.jpg"
                url02="images/featured/featuredImg53.jpg"
              />
              <BestSellerCard
                heading="quadb women's regular fit solid cotton t-shirt"
                stocks="300 In Stock"
                para="fabric: 80% cotton & 20% polyester,
                style: regular,
                neck style: round neck,
                pattern: solid,
                wash care: machine wash,
                number of items in pack: 1,
                color: light grey "
                prize1="₹999"
                prize2="₹499"
                url01="images/featured/featuredImg54.jpg"
                url02="images/featured/featuredImg41.jpg"
              />
              <BestSellerCard
                heading="quadb women's regular fit solid cotton t-shirt"
                stocks="900 In Stock"
                para="fabric: 80% cotton & 20% polyester, style: regular, neck
                        style: round neck, pattern: solid, wash care: machine
                        wash, number of items in pack: 1, color: ink blue"
                prize1="₹1998"
                prize2="₹699"
                url01="images/featured/featuredImg20.jpg"
                url02="images/featured/featuredImg21.jpg"
              />
              <BestSellerCard
                heading="quadb men's regular fit solid cotton t-shirt (pack of 2)"
                stocks="300 In Stock"
                para="fabric: 80% cotton & 20% polyester,
                style: regular,
                neck style: round neck,
                pattern: solid,
                wash care: machine wash,
                number of items in pack: 2,
                color: jet black + jet black"
                prize1="₹1998"
                prize2="₹699"
                url01="images/featured/featuredImg31.jpg"
                url02="images/featured/featuredImg50.jpg"
              />
              <BestSellerCard
                heading="quadb women's regular fit solid cotton t-shirt"
                stocks="900 In Stock"
                para="fabric: 80% cotton & 20% polyester, style: regular, neck
                        style: round neck, pattern: solid, wash care: machine
                        wash, number of items in pack: 1, color: ink blue"
                prize1="₹1998"
                prize2="₹699"
                url01="images/featured/featuredImg55.jpg"
                url02="images/featured/featuredImg50.jpg"
              />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;

// <Products
//                 para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
//                 prize1="₹2997"
//                 prize2="₹799"
//                 url1="images/featured/featuredImg10.jpg"
//                 url2="images/featured/featuredImg11.jpg"
//               />
//               <Products
//                 para="quadb women's regular fit solid cotton t-shirt (pack of 3)"
//                 prize1="₹2997"
//                 prize2="₹799"
//                 url1="images/featured/featuredImg20.jpg"
//                 url2="images/featured/featuredImg21.jpg"
//               />
//               <Products
//                 para="quadb men's regular fit solid cotton t-shirt (Best Available)"
//                 prize1="₹999"
//                 prize2="₹499"
//                 url1="images/featured/featuredImg30.jpg"
//                 url2="images/featured/featuredImg31.jpg"
//               />
//               <Products
//                 para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
//                 prize1="₹2997"
//                 prize2="₹799"
//                 url1="images/featured/featuredImg20.jpg"
//                 url2="images/featured/featuredImg21.jpg"
//               />
//               <Products
//                 para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
//                 prize1="₹2997"
//                 prize2="₹799"
//                 url1="images/featured/featuredImg10.jpg"
//                 url2="images/featured/featuredImg41.jpg"
//               />
//               <Products
//                 para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
//                 prize1="₹2997"
//                 prize2="₹799"
//                 url1="images/featured/featuredImg50.jpg"
//                 url2="images/featured/featuredImg30.jpg"
//                            />
