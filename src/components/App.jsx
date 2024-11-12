import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getPhotos } from "../apiService/photos";

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
        const { results } = await getPhotos(query, page);
        console.log(results);
        if (!results.lengs) {
          return setIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...results]);
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
    </>
  );
}

export default App;
