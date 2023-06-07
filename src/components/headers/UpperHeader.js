import { useState } from "react";
import Dropdown from "../dropdowns/Dropdown";
import { Link } from "react-router-dom";
import "../../index.css";

const optionsAccount = [
  { label: "My Account", value: "myAccount" },
  { label: "Checkout", value: "checkout" },
  { label: "Sign in", value: "signIn" },
];

const optionsUSD = [
  { label: "USD $", value: "usd$" },
  { label: "EUR €", value: "eur€" },
];

const optionsLanguage = [
  { label: "English", value: "english" },
  { label: "Hindi", value: "hindi" },
];

const UpperHeader = () => {
  const [account, setAccount] = useState("My Account");
  const [usd, setUsd] = useState("USD $");
  const [lang, setLang] = useState("English");

  const accountHandler = (event) => {
    setAccount(event.target.value);
    console.log(account);
  };

  const usdHandler = (event) => {
    setUsd(event.target.value);
    console.log(usd);
  };

  const langHandler = (event) => {
    setLang(event.target.value);
    console.log(lang);
  };

  return (
    <>
      <div className="bg-white py-[15px] text-sm  text-slate-700 ">
        <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px] ">
          <div className=" sm:flex sm:flex-col sm:justify-center md:flex md:flex-row md:justify-between ">
            <div className="grid place-items-center pb-2 md:pb-0">
              <Link className="items-center" to="mailto:yourname@gmail.com">
                yourname@gmail.com
              </Link>
            </div>
            <div className="grid place-items-center">
              <ul className="flex">
                <li className="mr-6 pr-6 border-r">
                  <Dropdown
                    value={account}
                    options={optionsAccount}
                    onChange={accountHandler}
                  />
                </li>
                <li className="mr-6 pr-6 border-r">
                  <Dropdown
                    value={usd}
                    options={optionsUSD}
                    onChange={usdHandler}
                  />
                </li>
                <li className="pr-6 border-r">
                  <Dropdown
                    value={lang}
                    options={optionsLanguage}
                    onChange={langHandler}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-gray-700  dark:bg-gray-700"></hr>
    </>
  );
};

export default UpperHeader;
