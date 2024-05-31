import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "../../components/Pagination";

test("clicking on page number updates current page", () => {
  let currentPage = 1;
  const setCurrentPage = jest.fn((page) => {
    currentPage = page;
  });

  const { getByText } = render(
    <Pagination
      imagesPerPage={12}
      totalImages={100}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  );

  const pageNumberButton = getByText("2");
  fireEvent.click(pageNumberButton);
  expect(currentPage).toBe(2);
});

test("disables Prev button on first page", () => {
  const setCurrentPage = jest.fn();

  const { getByText } = render(
    <Pagination
      imagesPerPage={12}
      totalImages={100}
      currentPage={1}
      setCurrentPage={setCurrentPage}
    />
  );

  const prevButton = getByText("Prev");
  fireEvent.click(prevButton);
  expect(setCurrentPage).not.toHaveBeenCalled();
});
