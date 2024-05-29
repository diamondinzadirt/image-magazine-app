import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchOption from "./SearchOption";

test("renders search input component", () => {
  const { getByPlaceholderText } = render(
    <SearchOption searchInput="" setSearchInput={() => {}} />
  );
  const searchInput = getByPlaceholderText("Search for image ...");
  expect(searchInput).toBeInTheDocument();
});

test("updates search input value", () => {
  let searchValue = "";
  const setSearchValue = jest.fn((value) => {
    searchValue = value;
  });

  const { getByPlaceholderText } = render(
    <SearchOption searchInput={searchValue} setSearchInput={setSearchValue} />
  );
  const searchInput = getByPlaceholderText("Search for image ...");
  fireEvent.change(searchInput, { target: { value: "test" } });

  expect(searchValue).toBe("test");
});
