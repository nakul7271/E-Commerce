import React from "react";
import Shop from "../components/shop/Shop";
import ShopHeader from "../components/shop/ShopHeader";

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


const ShopPage = () => { 
  return <>
      <ShopHeader heading03="Shop" />
    <Shop DUMMY_PRODUCTS={DUMMY_PRODUCTS}  />
    </>
}



export default ShopPage;

