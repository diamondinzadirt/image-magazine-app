import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders App component without errors", () => {
  render(<App />);

  // Check if the search input is rendered
  expect(
    screen.getByPlaceholderText("Search for image ...")
  ).toBeInTheDocument();

  // Check if the pagination buttons are rendered
  expect(screen.getByText("Prev")).toBeInTheDocument();
  expect(screen.getByText("Next")).toBeInTheDocument();
});
