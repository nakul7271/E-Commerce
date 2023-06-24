import React, { useState } from "react";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const Shop = ({ DUMMY_PRODUCTS }) => {
  const [filtered, setFiltered] = useState(DUMMY_PRODUCTS);

  const filterByRange = (range) => {
    let filter = DUMMY_PRODUCTS.filter((product) => {
      if (product.prize2 >= range[0] && product.prize2 <= range[1]) {
        return true;
      }
      return false;
    });

    setFiltered(filter);
  };

  return (
    <>
      <div className="mt-8">
        <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
          <div className="lg:flex-row flex flex-col">
            <div className="lg:w-[25%] w-[100%] order-last lg:order-none">
              {" "}
              <LeftBar filterByRange={filterByRange} />{" "}
            </div>
            <div className="lg:w-[75%] w-[100%]">
              {" "}
              <RightBar filtered={filtered} />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
