import React from "react";
import { motion } from "framer-motion";

const Pagination = ({
  imagesPerPage,
  totalImages,
  currentPage,
  setCurrentPage,
  images,
}) => {
  const totalPages = Math.ceil(totalImages / imagesPerPage);
  //// Show only 2 page numbers
  const maxPageNumbersToShow = 2;
  const currentRange = Math.floor((currentPage - 1) / maxPageNumbersToShow);
  const startPage = currentRange * maxPageNumbersToShow + 1;
  const endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const handlePrevRange = () => {
    if (startPage > 1) {
      setCurrentPage(startPage - 1);
    }
  };

  const handleNextRange = () => {
    if (endPage < totalPages) {
      setCurrentPage(endPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    images.length > 0 && (
      <nav className="container mx-auto flex flex-col items-center justify-center m-5 p-5 w-5/6 ">
        <ul className="flex justify-center space-x-1">
          <li>
            <motion.button
              whileTap={{ scale: 1.2 }}
              onClick={handlePrevRange}
              className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 text-black-500 transistion sm:px-2 sm:py-1 md:px-3 md:py-2 "
              disabled={startPage === 1}
            >
              &lt;&lt;
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 1.2 }}
              onClick={handlePrevPage}
              className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 text-black-500 transistion sm:px-2 sm:py-1 md:px-3 md:py-2 "
              disabled={currentPage === 1}
            >
              Prev
            </motion.button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <motion.button
                whileTap={{ scale: 1.2 }}
                onClick={() => setCurrentPage(number)}
                className={`px-3 py-1 border sm:px-2 sm:py-1 md:px-3 md:py-2  rounded ${
                  number === currentPage
                    ? "bg-gray-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-black-500"
                }`}
              >
                {number}
              </motion.button>
            </li>
          ))}
          <li>
            <motion.button
              whileTap={{ scale: 1.2 }}
              onClick={handleNextPage}
              className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 text-black-500 transistion sm:px-2 sm:py-1 md:px-3 md:py-2 "
              disabled={currentPage === totalPages}
            >
              Next
            </motion.button>
          </li>
          <li>
            <motion.button
              whileTap={{ scale: 1.2 }}
              onClick={handleNextRange}
              className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 text-black-500 transistion sm:px-2 sm:py-1 md:px-3 md:py-2 "
              disabled={endPage === totalPages}
            >
              &gt;&gt;
            </motion.button>
          </li>
        </ul>
      </nav>
    )
  );
};

export default Pagination;
