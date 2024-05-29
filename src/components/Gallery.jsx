import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="px-5 m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10">
      {images.length > 0 ? (
        images.map((image) => (
          <div key={image.id} className="flex flex-col items-center">
            <img
              src={image.url}
              alt={image.title}
              className="rounded-full shadow-md object-cover h-60 sm:h-48 md:h-54 lg:h-60"
            />
            <p className="text-sm mt-2 font-mono text-center ">{image.title}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-red-500 "> No image found</p>
      )}
    </div>
  );
};

export default Gallery;
