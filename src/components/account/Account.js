import React from "react";
import AccountEdit from "./AccountEdit";
import { useState } from "react";
import AccountPassword from "./AccountPassword";
import AddressBook from "./AddressBook";
import { Link } from "react-router-dom";

const Account = () => {
  const [toggleEditAccount, setToggleEditAccount] = useState(false);
  const [togglePasswordChange, setTogglePasswordChange] = useState(false);
  const [toggleAddressBook, setToggleAddressBook] = useState(false);

  const editAccountHandler = () => {
    setToggleEditAccount((prev) => {
      return !prev;
    });
  };
  const passwordChangeHandler = () => {
    setTogglePasswordChange((prev) => {
      return !prev;
    });
  };
  const addressBookHandler = () => {
    setToggleAddressBook((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <div className="mt-10">
        <div className="mx-[5%]  sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
          <div className="lg:mx-[10%]">
            <div>
              <div className="mb-4 ">
                <div
                  onClick={editAccountHandler}
                  className="group bg-gray-100 cursor-pointer py-4 px-4 border border-slate-200 flex text-base font-semibold items-center uppercase"
                >
                  <div>
                    <span className="mr-6 text-base">1.</span>
                  </div>
                  <div className="flex transition-all duration-200 w-full items-center justify-between group-hover:text-blue-500">
                    <span>Edit your account information </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className=" w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                {toggleEditAccount && (
                  <div className="border-l border-r animate-fade-in-down origin-top border-b border-slate-200">
                    <div className="py-8 px-4">
                      <AccountEdit onChange={editAccountHandler} />
                    </div>
                  </div>
                )}
              </div>
              <div className="my-4 ">
                <div
                  onClick={passwordChangeHandler}
                  className="group bg-gray-100 cursor-pointer py-4 px-4 border border-slate-200 flex text-base font-semibold items-center uppercase"
                >
                  <div>
                    <span className="mr-6 text-base">2.</span>
                  </div>
                  <div className="flex transition-all duration-200 w-full items-center justify-between group-hover:text-blue-500">
                    <span>Change your password </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className=" w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                {togglePasswordChange && (
                  <div className="border-l border-r animate-fade-in-down origin-top border-b border-slate-200">
                    <div className="py-8 px-4">
                      <AccountPassword onChange={passwordChangeHandler} />
                    </div>
                  </div>
                )}
              </div>
              <div className="my-4 ">
                <div
                  onClick={addressBookHandler}
                  className="group bg-gray-100 cursor-pointer py-4 px-4 border border-slate-200 flex text-base font-semibold items-center uppercase"
                >
                  <div>
                    <span className="mr-6 text-base">3.</span>
                  </div>
                  <div className="flex transition-all duration-200 w-full items-center justify-between group-hover:text-blue-500">
                    <span>Modify your address book entries </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className=" w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
                {toggleAddressBook && (
                  <div className="border-l border-r animate-fade-in-down origin-top border-b border-slate-200">
                    <div className="py-8 px-4">
                      <AddressBook onChange={addressBookHandler} />
                    </div>
                  </div>
                )}
              </div>
              <div className="my-4">
                <Link to="/wishlist">
                  <div className="group bg-gray-100 cursor-pointer py-4 px-4 border border-slate-200 flex text-base font-semibold items-center uppercase">
                    <div>
                      <span className="mr-6 text-base">4.</span>
                    </div>
                    <div className="flex transition-all duration-200 w-full items-center justify-between group-hover:text-blue-500">
                      <span>modify your wishlist </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-80">footer</div>
    </>
  );
};

export default Account;
