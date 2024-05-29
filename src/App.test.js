import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders an image app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Search for image /i);
  expect(linkElement).toBeInTheDocument();
});
