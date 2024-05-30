import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component and loads images", async () => {
  render(<App />);

  // Check if the search input is rendered
  expect(
    screen.getByPlaceholderText("Search for image ...")
  ).toBeInTheDocument();

  // Wait for images to be loaded
  await waitFor(() =>
    expect(screen.getByAltText("accusamus")).toBeInTheDocument()
  );
});

test("renders pagination buttons", async () => {
  render(<App />);

  // Wait for images to be loaded
  await waitFor(() =>
    expect(screen.getByAltText("accusamus")).toBeInTheDocument()
  );

  // Check if pagination buttons are successfully rendered
  expect(screen.getByText("Prev")).toBeInTheDocument();
  expect(screen.getByText("Next")).toBeInTheDocument();
});
