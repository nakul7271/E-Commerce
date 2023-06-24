import React from "react";
import ReactImageMagnify from "react-image-magnify";

const Qwerty = () => {
  return (
    <div>
      <div className=" w-[400px] h-[561px]">
        
        <ReactImageMagnify
          {...{
            smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: "images/compare/download.png",
              },
              largeImage: {
                src: "images/compare/download.png",
                width: 400,
                height: 561,
              },
              enlargedImageContainerStyle: {
                zIndex: "1500",
              },
              enlargedImageContainerDimensions: {
                width: "100%",
                height: "100%",
              },
            // enlargedImagePosition: "over",
            // lensStyle: { backgroundColor: "rgba(0,0,0, .4)" },
          }}
        />
      </div>
    </div>
  );
};

export default Qwerty;
