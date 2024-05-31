import "./assets/styles/App.css";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchImages } from "./utils/api";
import SearchOption from "./components/SearchOption";
import Pagination from "./components/Pagination";
import LoadingSpinner from "./components/LoadingSpinner";
const Gallery = lazy(() => import("./components/Gallery"));

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;

  // const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages();
        setImages(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchData();
  }, []);

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(search)
  );

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  return (
    <div className="flex flex-col items-center justify-center  min-h-screen bg-gray-100 w-full">
      <div className="container mx-auto w-full max-w-8xl m-4 c">
        <SearchOption searchInput={search} setSearchInput={setSearch} />
        <Suspense fallback={<LoadingSpinner />}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <Gallery images={currentImages} />
                  )
                }
              />
            </Routes>
          </BrowserRouter>
        </Suspense>
        <Pagination
          imagesPerPage={imagesPerPage}
          totalImages={images.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          images={currentImages}
        />
      </div>
    </div>
  );
}

export default App;

/* {<>
<header className="text-4xl font-bold tracking-wide text-center uppercase font-mono m-8">
  Welcome to my Gallery
</header>
</>} */
