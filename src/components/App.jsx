import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getPhotos } from "../apiService/photos";
import ImageGallery from "./ImageGallery/ImageGallery";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { results, total_pages } = await getPhotos(query, page);

        if (!results.length) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setIsVisible(total_pages > 1 && page < total_pages);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = (value) => {
    setQuery(value);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {/* {!images.length && !isEmpty && <p>Let's begin search</p>}
      {isLoading && <Loader />}
      {error && <Text>Something went wrong - {error}</Text>}
      {isEmpty && <Text>Sorry.There are no images...</Text>} */}
    </>
  );
}

export default App;
