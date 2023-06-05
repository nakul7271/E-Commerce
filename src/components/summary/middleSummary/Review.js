import React from "react";

import ReviewPagination from "./ReviewPagination";
import Rate from "./Rate";
import StarSvg from "../StarSvg";

const DUMMY_REVIEWS = [
  {
    name: "Nakul Yadav",
    url: "images/summary/Review01.png",
    star: 4,
    message: "Awesome!!",
  },
  {
    name: "SHEKHAR GUPTA",
    url: "images/summary/Review01.png",
    star: 3,
    message: "Tsirt has a pricky effect in summer .",
  },
  {
    name: "Saurabh Natu",
    url: "images/summary/Review01.png",
    star: 2,
    message: "Value for money",
  },
  {
    name: "Nakul Yadav",
    url: "images/summary/Review01.png",
    star: 5,
    message: "Awesome!!",
  },
  {
    name: "Nakul Yadav",
    url: "images/summary/Review01.png",
    star: 4,
    message: "Awesome!!",
  },
  {
    name: "Nakul Yadav",
    url: "images/summary/Review01.png",
    star: 4,
    message: "Awesome!!",
  },
  {
    name: "Nakul Yadav",
    url: "images/summary/Review01.png",
    star: 1,
    message: "Awesome!!",
  },
];

const Review = () => {
  return (
    <>
      <div className="py-9 px-4">
        <div className="lg:flex ">
          <div className="lg:w-[60%]">
            <ReviewPagination data={DUMMY_REVIEWS} />
          </div>
          <div className="lg:w-[40%] lg:my-4 my-12">
            <div>
              <h3 className="text-slate-800 font-semibold">Add a Review</h3>
              <div>
                <form className="mt-3">
                  <div className="flex">
                    <span className="text-slate-800 mr-4">Your Rating :</span>
                    <span className="flex mt-1">
                      <StarSvg />
                      <StarSvg />
                      <StarSvg />
                      <StarSvg />
                      <StarSvg />
                    </span>
                  </div>
                  <div>
                    <div className="mt-3 flex justify-between">
                      <input
                        placeholder="Name"
                        type="text"
                        className="border w-[45%]  border-slate-200 py-2 px-2 outline-none mr-5"
                      ></input>

                      <input
                        placeholder="Email"
                        type="email"
                        className="border w-[45%] border-slate-200 py-2 px-2 outline-none"
                      ></input>
                    </div>
                    <div className="mt-8">
                      <textarea
                        placeholder="Message"
                        type="text"
                        className="border w-[100%] h-[234px] border-slate-200 py-2 px-2 outline-none"
                      ></textarea>
                    </div>
                  </div>

                  <button className="py-3 px-16 my-4 bg-blue-500 hover:bg-slate-900 font-semibold text-white rounded-md">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
