import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import ImageZoom from "react-image-zooom";


const ImageSlider = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a href="#">
          <img
            alt="#"
            className="w-32"
            src={`images/detail/imageMan0${i + 1}.jpg`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "",
    arrows: false,
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
        <ImageZoom
          src="images/detail/imageMan01.jpg"
          alt="A image to apply the ImageZoom plugin"
          zoom="200"
        />
        </div>
        <div>
        <ImageZoom
          src="images/detail/imageMan02.jpg"
          alt="A image to apply the ImageZoom plugin"
          zoom="200"
        />
        </div>
        <div>
        <ImageZoom
          src="images/detail/imageMan03.jpg"
          alt="A image to apply the ImageZoom plugin"
          zoom="200"
        />
        </div>
        <div>
        <ImageZoom
          src="images/detail/imageMan04.jpg"
          alt="A image to apply the ImageZoom plugin"
          zoom="200"
        />
        </div>
        <div>
        <ImageZoom
          src="images/detail/imageMan05.jpg"
          alt="A image to apply the ImageZoom plugin"
          zoom="200"
        />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
