import React from "react";
import { useSelector } from "react-redux";
import WishlistItemsRow from "./WishlistItemsRow";

const WishlistItems = () => {
  const wishlistItemsArray = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const tableRows = wishlistItemsArray.map((item) => {
    return <WishlistItemsRow key={item.id} item={item} />;
  });

  return (
    <div className="mt-12">
      <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
        <h3 className="mb-8 text-3xl font-semibold">Your Wishlist Items</h3>
        <div className="">
          <div className="overflow-x-auto">
            <table className="w-full border border-slate-200 ">
              <thead className="uppercase bg-gray-100 border-b border-slate-200">
                <tr>
                  <th className="py-4 px-11 font-semibold">Image</th>
                  <th className="py-4 px-11 font-semibold  h-[24px]">
                    <button className="w-[130px] font-semibold uppercase cursor-default">
                      Product name
                    </button>
                  </th>
                  <th className="py-4 px-11 font-semibold  h-[24px]">
                    <button className="w-[100px] font-semibold uppercase cursor-default">
                      Util price
                    </button>
                  </th>
                  <th className="py-4 px-11 font-semibold">Qty</th>
                  <th className="py-4 px-11 font-semibold">Subtotal</th>
                  <th className="py-4 px-11 font-semibold">
                    <button className="w-[110px] font-semibold uppercase cursor-default">
                     Add to cart
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-600">{tableRows}</tbody>
            </table>
          </div>

          <div className="mt-96">footer</div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItems;
