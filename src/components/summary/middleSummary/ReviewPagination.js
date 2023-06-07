import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../../shop/Pagination.css";
import ReviewCard from "./ReviewCard";

const ReviewPagination = (props) => {
  const { data } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 5;

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
      {currentItems.map((review) => {
        return (
          <ReviewCard
            key={review.name}
            url={review.url}
            name={review.name}
            star={review.star}
            message={review.message}
          />
        );
      })}
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

export default ReviewPagination;
