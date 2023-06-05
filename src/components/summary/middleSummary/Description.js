import MiddleSummaryCard from "./middleSummaryCard";
import React from "react";

const Description = () => {
  return (
    <>
      <div className="py-9 px-4">
        <div>
          <img
            className="w-full hidden lg:inline-block "
            src="images/summary/summaryDes01.png"
            alt=""
          ></img>
          <img
            className="w-full lg:hidden  inline-block"
            src="images/summary/summaryDes0101.png"
            alt=""
          ></img>
          <div className="mt-5 text-center text-slate-600">
            <p className="mb-2">
              QuadB presents you it’s{" "}
              <span className="font-semibold">Minimalist Collection.</span>{" "}
            </p>
            <p className="mb-3">
              This Collection of Minimalist T-shirts made from India’s Finest
              Cotton is perfect for every occassion.Be it a Party,a Business
              Meeting or evenaDate,these T-shirts will keep the focus on the
              most important thing in the room,You.Mix and Match this T-shirt
              with any article of clothing and gain a new outfit everytime.
            </p>
            <p className="mb-3">
              The Premium Cotton Fleece used to create these T-shirts are Not
              Just comforatble,but also sweat absorbent and antimicrobial
              allowing you to wear the T-shirt anywhere anytime
            </p>
            <p className="font-semibold">As Seen on</p>
          </div>
          <div className="mt-3 flex justify-center ">
            <div className="lg:flex">
              <div>
                <img
                  className="px-6"
                  src="images/summary/summaryIcon01.png"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="px-6 pt-2"
                  src="images/summary/summaryIcon03.png"
                  alt=""
                ></img>
              </div>
            </div>

            <div className="lg:flex">
              <div>
                <img
                  className="px-6 "
                  src="images/summary/summaryIcon02.png"
                  alt=""
                ></img>
              </div>
              <div>
                <img
                  className="px-6"
                  src="images/summary/summaryIcon04.png"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              className="w-full hidden lg:inline-block"
              src="images/summary/summaryDes02.png"
              alt=""
            ></img>
            <img
              className="w-full lg:hidden "
              src="images/summary/summaryDes0202.png"
              alt=""
            ></img>
          </div>
          <div>
            <img
              className="w-full hidden lg:inline-block"
              src="images/summary/summaryDes03.png"
              alt=""
            ></img>
            <img
              className="w-full lg:hidden "
              src="images/summary/summaryDes0303.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className="lg:flex">
          <div className="flex w-full">
            <div className="w-[50%]">
              <MiddleSummaryCard
                url01="images/summary/summaryDes04.png"
                url02="images/summary/summaryDes0404.png"
                para="Avail Free Delivery offer Now
                          powered by Delivery and get free,
                          fast and secure delivery at all serviceable pincodesinIndia"
                heading="Free Delivery"
              />
            </div>
            <div className="w-[50%]">
              <MiddleSummaryCard
                url01="images/summary/summaryDes06.png"
                url02="images/summary/summaryDes0606.png"
                para="Pay Safely and securely with our ssl
              secured payment gateway powered
              by Razorpay."
                heading="Secure Gateway"
              />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-[50%]">
              <MiddleSummaryCard
                url01="images/summary/summaryDes05.png"
                url02="images/summary/summaryDes0505.png"
                para="Our Facilities have been 100% Sanitized according to WHO Covid-19
              Guidance. Get your package safely
              andSecurely"
                heading="Free Delivery"
              />
            </div>
            <div className="w-[50%]">
              <MiddleSummaryCard
                url01="images/summary/summaryDes04.png"
                url02="images/summary/summaryDes0404.png"
                para="Avail Free Delivery offer Now
                          powered by Delivery and get free,
                          fast and secure delivery at all serviceable pincodesinIndia"
                heading="Free Delivery"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
