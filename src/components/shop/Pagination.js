import React, { useEffect, useState } from "react";
import Products from "../featuredProducts/Product";
import ReactPaginate from "react-paginate";
import "./Pagination.css";
import ShopCard from "./ShopCard";

const PaginatedItems = (props) => {
  const { data, Classes, grid } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {grid && (
        <div className={Classes}>
          {currentItems.map((product) => {
            return (
              <Products
                key={product.id}
                id={product.id}
                productName={product.productName}
                para={product.para}
                prize1={product.prize1}
                prize2={product.prize2}
                url1={product.url1}
                url2={product.url2}
              />
            );
          })}
        </div>
      )}
      {!grid && (
        <div className={Classes}>
          {currentItems.map((product) => {
            return (
              <ShopCard
              key={product.id}
                para={product.para}
                prize1={product.prize1}
                prize2={product.prize2}
                url1={product.url1}
                url2={product.url2}
                description={product.description}
                availability={product.availability}
              />
            );
          })}
        </div>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center "
        pageLinkClassName="m-2 py-2 px-4 rounded-full bg-slate-200 hover:bg-blue-500 hover:text-white transition-all duration-500 flex justify-center items-center"
        previousLinkClassName="m-2 py-2 px-4 rounded-full bg-slate-200 hover:bg-blue-500 hover:text-white transition-all duration-500 flex justify-center items-center"
        nextLinkClassName="m-2 py-2 px-4 rounded-full bg-slate-200 hover:bg-blue-500 hover:text-white transition-all duration-500 flex justify-center items-center"
        activeLinkClassName="active"
      />
    </>
  );
};

export default PaginatedItems;
