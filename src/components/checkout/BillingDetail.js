import React, { useState } from "react";

import BillingDetail01 from "./BillingDetail01";
import BillingDetail02 from "./BillingDetail02";

const BillingDetail = () => {
  const [accountCheckbox, setAccountCheckbox] = useState(false);
  const [shippingCheckbox, setShippingCheckbox] = useState(false);

  const accountCheckboxHandler = () => {
    setAccountCheckbox((prev) => {
      return !prev;
    });
  };

  const shippingCheckboxHandler = () => {
    setShippingCheckbox((prev) => {
      return !prev;
    });
  };

  return (
    <div className="text-slate-600">
      <h3 className="text-2xl text-black font-semibold">Billing Details</h3>

      <BillingDetail01 />
      <div>
        <input
          onChange={accountCheckboxHandler}
          id="createAccount"
          type="checkbox"
        />
        <label className="ml-2" htmlFor="createAccount">
          Create an account?
        </label>
      </div>
      {accountCheckbox && <BillingDetail02 />}
      <div className="my-8">
        <h5 className="font-semibold text-black">Additional Information</h5>
        <p className="mt-3 mb-1">Order notes</p>
        <textarea
          placeholder="Notes about your order, e.g. special notes for delivery. "
          type="text"
          className="border w-[100%] h-[180px] border-slate-200 py-2 px-2 outline-none"
        ></textarea>
      </div>
      <div>
        <input
          onChange={shippingCheckboxHandler}
          id="shipping"
          type="checkbox"
        />
        <label className="ml-2" htmlFor="shipping">
          Ship to a different address?
        </label>
      </div>
      {shippingCheckbox && <BillingDetail01 />}
      
    </div>
  );
};

export default BillingDetail;
