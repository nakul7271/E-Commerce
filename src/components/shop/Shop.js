import React, {useState} from "react";
import ShopHeader from "./ShopHeader";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const DUMMY_PRODUCTS = [
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/men/manBLACK01.jpg",
    url2: "images/men/manBLACK02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/men/manWHITE01.jpg",
    url2: "images/men/manWHITE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/men/manBLUE01.jpg",
    url2: "images/men/manBLUE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/women/womanBL01.jpg",
    url2: "images/women/womanBL02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/women/womanWH01.jpg",
    url2: "images/women/womanWH02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/women/womanBLUE01.jpg",
    url2: "images/women/womanBLUE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBLACK.jpg",
    url2: "images/men/manBLACK02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtWHITE.jpg",
    url2: "images/men/manWHITE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/men/manBLUE01.jpg",
    url2: "images/men/manBLUE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/women/womanBL01.jpg",
    url2: "images/women/womanBL02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/women/womanWH01.jpg",
    url2: "images/women/womanWH02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/women/womanBLUE01.jpg",
    url2: "images/women/womanBLUE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBLACK.jpg",
    url2: "images/men/manBLACK02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtWHITE.jpg",
    url2: "images/men/manWHITE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBLUE.jpg",
    url2: "images/men/manBLUE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBlueBlack.jpg",
    url2: "images/men/manBLUE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBlueWhite.jpg",
    url2: "images/men/manWHITE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBlackWhite.jpg",
    url2: "images/men/manBLACK02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBlueWhite.jpg",
    url2: "images/men/manWHITE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBlackWhite.jpg",
    url2: "images/men/manBLACK02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBLUE.jpg",
    url2: "images/men/manBLUE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBlueBlack.jpg",
    url2: "images/men/manBLUE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBlueWhite.jpg",
    url2: "images/men/manWHITE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/t-shirts/t-shirtBlackWhite.jpg",
    url2: "images/men/manBLACK02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/men/manBLACK01.jpg",
    url2: "images/men/manBLACK02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
  {
    para: "quadb men's regular fit solid cotton t-shirt (pack of 3)",
    prize1: "2997",
    prize2: "799",
    url1: "images/men/manWHITE01.jpg",
    url2: "images/men/manWHITE02.jpg",
    availability: "299 In Stock",
    description:
      " fabric: 80% cotton & 20% polyester,style: regular,neck style: round neck,pattern: solid,wash care: machine wash,number of items in pack: 1,color: jet black  ",
  },
];

const Shop = () => {

  const [filtered, setFiltered] = useState(DUMMY_PRODUCTS);

  const filterByRange = (range) => {
    let filter = DUMMY_PRODUCTS.filter((product) => {
      let a = parseInt(product.prize2);
      if (a >= range[0] && a <= range[1]) {
        return true;
      }
      return false
    });

    setFiltered(filter);
  }


  return (
    <>
      <ShopHeader />
      <div className="mt-8">
        <div className="mx-[5%] sm:mx[11%] md:mx-[12%] md:px-[12px] lg:mx-[2%] lg:px-[17px] xl:mx-[7%] xl:px-[20px]">
          <div className="lg:flex-row flex flex-col">
            <div className="lg:w-[25%] w-[100%] order-last lg:order-none"> <LeftBar filterByRange={filterByRange} /> </div>
            <div className="lg:w-[75%] w-[100%]"> <RightBar filtered={filtered} /> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
