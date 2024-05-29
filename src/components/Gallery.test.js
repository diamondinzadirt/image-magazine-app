import React from "react";
import { render } from "@testing-library/react";
import Gallery from "./Gallery";

test("renders images in the gallery", () => {
  const images = [
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

  const { getByAltText } = render(<Gallery images={images} />);

  images.forEach((image) => {
    const imgElement = getByAltText(image.title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", image.title);
  });
});
