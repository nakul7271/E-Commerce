import React from "react";

const DummyCartItems = [
  {
    name: "Mobile",
    url: "images/cartImages/cart01.jpg",
    price: "60",
    quantity: 2,
    totalAmount: "120",
  },
  {
    name: "Product Name",
    url: "images/cartImages/cart02.jpg",
    price: "60",
    quantity: 2,
    totalAmount: "120",
  },
  {
    name: "Product Name",
    url: "images/cartImages/cart03.jpg",
    price: "60",
    quantity: 2,
    totalAmount: "120",
  },
];

const WishlistItems = () => {
  const tableRows = DummyCartItems.map((item) => {
    return (
      <tr key={item.url}>
        <td className="py-8 flex justify-center">
          <img className="w-[140px] " src={item.url} alt=""></img>
        </td>
        <td className="py-8 text-center">{item.name}</td>
        <td className="py-8 text-center"> {`$${item.price}`} </td>
        <td className="py-8 ">
          <div className="flex justify-center items-center ">
            <div className="py-2 px-2 border border-slate-200 cursor-pointer">
              -
            </div>
            <input
              className=" py-2 px-2 outline-none border-t border-b border-slate-200 w-[80px] text-center"
              type="text"
              name="amount"
              defaultValue={item.quantity}
            />
            <div className=" border border-slate-200 py-2 px-2 cursor-pointer   ">
              +
            </div>
          </div>
        </td>
        <td className="py-8 text-center">{`$${item.totalAmount}`}</td>
        <td className="py-8">
          <div className="flex justify-center">
            <button className="text-white py-2 px-4 rounded-md hover:bg-slate-900 transition-all duration-500 bg-blue-500">
              ADD TO CART
            </button>
          </div>
        </td>
      </tr>
    );
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
                  <th className="py-4 px-11 font-semibold w-[220px] h-[24px]">
                    Product Name
                  </th>
                  <th className="py-4 px-11 font-semibold w-[200px] h-[24px]">
                    Until Price
                  </th>
                  <th className="py-4 px-11 font-semibold">Qty</th>
                  <th className="py-4 px-11 font-semibold">Subtotal</th>
                  <th className="py-4 px-11 font-semibold">ADD TO CART</th>
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
