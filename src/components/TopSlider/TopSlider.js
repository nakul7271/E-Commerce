import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopSlider.css";
import SliderContent from "./SliderContent";

const settings = {
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: true, // Display navigation dots
  infinite: true, // Allow infinite scrolling
  speed: 1000,
  slidesToShow: 1, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll per interaction
};

const TopSlider = () => {
  
  return (
    <Slider {...settings}>
      <SliderContent
        color={true}
        url="url(./images/topSlider/topImg01.jpg)"
        h101="The Minimalist Collection"
        h102="Ft. Shubham Semwal"
        para="Get the best Cotton T-shirt for all your Wardrobe Needs"
      />
      <SliderContent
        color={false}
        url="url(./images/topSlider/topImg02.jpg)"
        h101="Exclusive Bundles"
        h102="Made Just for you"
        para="Grab these Bundles Now at Amazing Discount"
      />
      <SliderContent
        color={false}
        url="url(./images/topSlider/topImg03.jpg)"
        h101="Made From"
        h102="The Most Premium Cotton"
        para="Comfortable Yet Stylish T-shirts for Every Occasion"
      />
    </Slider>
  );
};

export default TopSlider;
