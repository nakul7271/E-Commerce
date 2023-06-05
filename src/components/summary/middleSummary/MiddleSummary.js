import React from "react";
import ProductDetail from "./ProductDetail";
import { useState } from "react";

import Description from "./Description";
import Review from "./Review";

const MiddleSummary = () => {
  const [showProductDetail, setShowProductDetail] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const [showReview, setShowReview] = useState(false);

  const descriptionHandler = () => {
    setShowDescription(true);
    setShowProductDetail(false);
    setShowReview(false);
  };

  const productDetailHandler = () => {
    setShowDescription(false);
    setShowProductDetail(true);
    setShowReview(false);
  };

  const reviewHandler = () => {
    setShowDescription(false);
    setShowProductDetail(false);
    setShowReview(true);
  };

  return (
    <>
      <div className="my-14">
        <div className="flex justify-evenly  text-slate-500  text-base sm:text-xl font-semibold">
          <div
            onClick={descriptionHandler}
            className={`pb-2 pr-1 cursor-pointer hover:text-slate-950 hover:border-b-2 ${
              showDescription ? "border-b-2 border-blue-500 text-slate-950" : ""
            } hover:border-blue-500`}
          >
            Description
          </div>
          <div
            onClick={productDetailHandler}
            className={`pb-2 pr-1 cursor-pointer hover:text-slate-950 hover:border-b-2 ${
              showProductDetail
                ? "border-b-2 border-blue-500 text-slate-950"
                : ""
            } hover:border-blue-500`}
          >
            Product Deatails
          </div>
          <div
            onClick={reviewHandler}
            className={`pb-2 pr-1 cursor-pointer hover:text-slate-950 hover:border-b-2 ${
              showReview ? "border-b-2 border-blue-500 text-slate-950" : ""
            } hover:border-blue-500`}
          >
            Reviews(7)
          </div>
        </div>
        <div className="border border-slate-200">
          {showProductDetail && <ProductDetail />}
          {showDescription && <Description />}
          {showReview && <Review />}
        </div>
      </div>
    </>
  );
};

export default MiddleSummary;
