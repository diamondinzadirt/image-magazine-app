// import React from "react";
// import { render } from "@testing-library/react";
// import Gallery from "../../components/Gallery";

// test("renders images in the gallery", () => {
//   const images = [
//     {
//       id: 1,
//       thumbnailUrl: "https://via.placeholder.com/150/92c952",
//       title: "accusamus beatae ad facilis cum similique qui sunt",
//       url: "https://via.placeholder.com/600/92c952",
//     },
//     {
//       id: 2,
//       thumbnailUrl: "https://via.placeholder.com/150/771796",
//       title: "reprehenderit est deserunt velit ipsam",
//       url: "https://via.placeholder.com/600/771796",
//     },
//   ];

//   const { getByAltText } = render(<Gallery images={images} />);

//   images.forEach((image) => {
//     const imgElement = getByAltText(image.title);
//     expect(imgElement).toBeInTheDocument();
//     expect(imgElement).toHaveAttribute("src", image.url);
//   });
// });

import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import App from "../../App";
import { fetchImages } from "../../utils/api"; // Adjust the path as needed

jest.mock("../../utils/api"); // Mock the API module

test("renders App component and loads images", async () => {
  const mockImages = [
    {
      id: 1,
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
    },
    {
      id: 2,
      thumbnailUrl: "https://via.placeholder.com/150/771796",
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
    },
  ];

  // Mock the implementation of fetchImages to return mock data
  fetchImages.mockResolvedValue(mockImages);

  render(<App />);

  // Check if the search input is rendered
  expect(
    screen.getByPlaceholderText("Search for image ...")
  ).toBeInTheDocument();

  // Wait for images to be loaded
  await waitFor(() =>
    expect(screen.getByAltText(mockImages[0].title)).toBeInTheDocument()
  );

  // Assertions for images
  mockImages.forEach((image) => {
    const imgElement = screen.getByAltText(image.title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", image.url);
  });
});
