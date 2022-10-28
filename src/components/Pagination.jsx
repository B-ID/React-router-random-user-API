import React from 'react';

function Pagination({ totalPages, handleClick, handleNext, handlePrev }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  // console.log(pages)

  return (
    <div>
      <button className="prevButton" onClick={handlePrev}>
        prev
      </button>
      {pages.map((pageNum) => {
        return (
          <button
            className="page__button"
            key={pageNum}
            onClick={() => handleClick(pageNum)}
          >
            {pageNum}
          </button>
        );
      })}
      <button className="nextButton" onClick={handleNext}>
        next
      </button>
    </div>
  );
}

export default Pagination;
