import React from "react";
import { useState } from "react";

const SummaryUpper03 = () => {
  const [toggle01, setToggle01] = useState(false);
  const [toggle02, setToggle02] = useState(false);
  const [toggle03, setToggle03] = useState(false);

  return (
    <>
      <div className="my-8">
        <div className="relative">
          <div className="flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="font-semibold mr-2">
              Secure Transaction Guarantee With Razorpay
            </span>
            <span
              onClick={() => {
                setToggle01((prev) => {
                  return !prev;
                });
                setToggle02(false);
                setToggle03(false);
              }}
              className="border px-[5.5px] mt-1 hover:border-blue-500 cursor-pointer border-slate-200 rounded-full text-xs text-slate-600"
            >
              ?
            </span>
          </div>
          {toggle01 && (
            <div className="z-10 absolute bg-white">
              <div className="m-2 p-2  border border-slate-200 shadow-xl rounded-sm">
                <h3 className="font-semibold text-slate-500 mb-2">
                  Your transaction is secure
                </h3>
                <p className="text-sm text-slate-800 mb-2">
                  We work hard to protect your security and privacy.
                </p>
                <p className="text-sm text-slate-800 mb-2">
                  Our payment security system encrypts your information during
                  transmission.
                </p>
                <p className="text-sm text-slate-800 mb-2">
                  We don’t share your credit card details with third-party
                  sellers, and we don’t sell your information to others.
                </p>
                <p className="text-sm text-slate-800 mb-2">
                  * Your payment is 100% safe and secure with Razorpay.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="relative mt-5">
          <div className="flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
                <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
                <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
              </svg>
            </span>
            <span className="font-semibold mr-2">
              Free Fast and Secure Shipping Pan India
            </span>
            <span
              onClick={() => {
                setToggle02((prev) => {
                  return !prev;
                });
                setToggle01(false);
                setToggle03(false);
              }}
              className="border px-[5.5px] mt-1 hover:border-blue-500 cursor-pointer border-slate-200 rounded-full text-xs text-slate-600"
            >
              ?
            </span>
          </div>
          {toggle02 && (
            <div className="z-10 absolute bg-white">
              <div className="m-2 p-2  border border-slate-200 shadow-xl rounded-sm">
                <h3 className="font-semibold text-slate-500 mb-2">
                  Shipping Charges For Quadb Assured Items
                </h3>
                <p className="text-sm text-slate-800 mb-2">
                  Shipping charges are calculated based on the number of units,
                  distance and delivery date.
                </p>

                <p className="text-sm text-slate-800 mb-2">
                  * For faster delivery, shipping charges will be applicable
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="relative mt-5">
          <div className="flex items-center">
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="font-semibold mr-2">7 day Return Garuntee</span>
            <span
              onClick={() => {
                setToggle03((prev) => {
                  return !prev;
                });
                setToggle01(false);
                setToggle02(false);
              }}
              className="border px-[5.5px] mt-1 hover:border-blue-500 cursor-pointer border-slate-200 rounded-full text-xs text-slate-600"
            >
              ?
            </span>
          </div>
          {toggle03 && (
            <div className="z-10 absolute bg-white">
              <div className="m-2 p-2  border border-slate-200 shadow-xl rounded-sm">
                <div className="mt-1 mb-3">
                  <div className="bg-gray-300 py-3 flex justify-evenly border border-slate-400">
                    <span>Validity</span>
                    <span>Covers</span>
                    <span>Type Accepted</span>
                  </div>
                  <div className="py-1 flex justify-evenly  border-l border-r border-b border-slate-400 text-sm">
                    <span className="pr-1">14 days from delivery</span>
                    <span className="pr-1">All Return Reasons</span>
                    <span className="pr-1">
                      Refund / Replacement / Exchange
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-800 mb-2">
                  *If there is any issue with your product, you can raise a
                  refund, replacement or exchange request within 14 days of
                  receiving the product.
                </p>

                <p className="text-sm text-slate-800 mb-2">
                  Successful pick-up of the product is subject to the following
                  conditions being met:
                </p>
                <ul className="ml-8">
                  <li className="text-sm text-slate-800 mb-2">
                    Correct and complete product (with the original brand,
                    article number, undetached MRP tag, product's original
                    packaging, freebies and accessories)
                  </li>
                  <li className="text-sm text-slate-800 mb-2">
                    The product should be in unused, undamaged and original
                    condition without any stains, scratches, tears or holes and
                    with non-tampered quality check seals/return tags/ warranty
                    seals (wherever applicable)
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="bg-gray-700  dark:bg-gray-700"></hr>
    </>
  );
};

export default SummaryUpper03;
