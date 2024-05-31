import React from "react";
import { motion } from "framer-motion";
import { MdOutlineImageSearch } from "react-icons/md";
const SearchOption = ({ searchInput, setSearchInput }) => {
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className="container mx-auto w-full flex gap-3 m-10  justify-center px-4 ">
        <motion.input
          whileTap={{ scale: 1.2 }}
          className="block w-5/6  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 "
          type="text"
          placeholder="Search for image ..."
          onChange={handleSearch}
          value={searchInput}
          aria-label="Search for images"
        />{" "}
        <span>
          <MdOutlineImageSearch className="mt-1 size-7 text-gray-900" />
        </span>
      </div>
    </>
  );
};

export default SearchOption;
