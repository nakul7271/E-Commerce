import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import Products from "../featuredProducts/Product";

var settings = {
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

const NewArrivals = () => {
  const slider = useRef();
  const [mensBar, setMensBar] = useState(true);
  return (
    <>
      <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl w-[204px] h-[24px]">New Arrivals</h2>

            <hr className="bg-gray-700 w-[40%] sm:w-[58%] md:w-[60%] lg:w-[78%] xl:w-[80%] dark:bg-gray-700 mt-[15px]"></hr>

            <div className="flex ">
              <button onClick={()=>{setMensBar(true)}} className="m-4 pt-3 hover:text-slate-600">Men</button>
              <button onClick={()=>{setMensBar(false)}} className="m-4 pt-3 hover:text-slate-600">Women</button>
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
            {mensBar && (
              <Slider ref={slider} {...settings}>
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1="₹2997"
                  prize2="₹799"
                  url1="images/men/manBLACK01.jpg"
                  url2="images/men/manBLACK02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1="₹2997"
                  prize2="₹799"
                  url1="images/men/manBLUE01.jpg"
                  url2="images/men/manBLUE02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (Best Available)"
                  prize1="₹999"
                  prize2="₹499"
                  url1="images/men/manWHITE01.jpg"
                  url2="images/men/manWHITE02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1="₹2997"
                  prize2="₹799"
                  url1="images/t-shirts/t-shirtBLACK.jpg"
                  url2="images/men/manBLACK02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1="₹2997"
                  prize2="₹799"
                  url1="images/t-shirts/t-shirtBLUE.jpg"
                  url2="images/men/manBLUE02.jpg"
                />
                <Products
                  para="quadb men's regular fit solid cotton t-shirt (pack of 3)"
                  prize1="₹2997"
                  prize2="₹799"
                  url1="images/t-shirts/t-shirtWHITE.jpg"
                  url2="images/men/manWHITE02.jpg"
                />
              </Slider>
            )}

            {!mensBar && (
              <Slider ref={slider} {...settings}>
              <Products
                para="quadb women's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/women/womanBL01.jpg"
                url2="images/women/womanBL02.jpg"
              />
              <Products
                para="quadb women's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/women/womanBLUE01.jpg"
                url2="images/women/womanBLUE02.jpg"
              />
              <Products
                para="quadb women's regular fit solid cotton t-shirt (Best Available)"
                prize1="₹999"
                prize2="₹499"
                url1="images/women/womanWH01.jpg"
                url2="images/women/womanWH02.jpg"
              />
              <Products
                para="quadb women's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/t-shirts/t-shirtBLACK.jpg"
                url2="images/women/womanBL02.jpg"
              />
              <Products
                para="quadb women's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/t-shirts/t-shirtBLUE.jpg"
                url2="images/women/womanBLUE02.jpg"
              />
              <Products
                para="quadb women's regular fit solid cotton t-shirt (pack of 3)"
                prize1="₹2997"
                prize2="₹799"
                url1="images/t-shirts/t-shirtWHITE.jpg"
                url2="images/women/womanWH02.jpg"
              />
            </Slider>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
