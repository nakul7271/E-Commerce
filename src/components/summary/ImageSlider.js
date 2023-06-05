import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"

const ImageSlider = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a href="#">
          <img alt="#" src={`images/detail/imageMan0${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "",
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div style={{}}>
        <ul
          style={{
            margin: "10px",
            display: "flex",
            flexDirection: "row",
                    justifyContent: "center",
                    
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <img alt="#" className="w-full" src="images/detail/imageMan01.jpg" />
        </div>
        <div>
          <img alt="#" className="w-full" src="images/detail/imageMan02.jpg" />
        </div>
        <div>
          <img alt="#" className="w-full" src="images/detail/imageMan03.jpg" />
        </div>
        <div>
          <img alt="#" className="w-full" src="images/detail/imageMan04.jpg" />
        </div>
        <div>
          <img alt="#" className="w-full" src="images/detail/imageMan05.jpg" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
