import { Toaster } from "react-hot-toast";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getPhotos } from "../apiService/photos";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalAlt, setModalAlt] = useState("");
  const [modalSrc, setModalSrs] = useState("");

  function openModal(src, alt) {
    setIsOpen(true);
    setModalAlt(alt);
    setModalSrs(src);
  }

  function closeModal() {
    setIsOpen(false);
    setModalAlt("");
    setModalSrs("");
  }

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
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSubmit = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
    setIsVisible(false);
    setIsEmpty(false);
  };

  const handleLoadMore = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery openModal={openModal} images={images} />
      )}
      {isVisible && !isLoading && !isEmpty && (
        <LoadMoreBtn onClick={handleLoadMore} disabled={isLoading}>
          {isLoading ? "Loading" : "Load more"}
        </LoadMoreBtn>
      )}
      {!images.length && !isEmpty && <p>Let&apos;s begin search</p>}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {isEmpty && <p>Sorry.There are no images...</p>}

      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
    </>
  );
}

export default App;
