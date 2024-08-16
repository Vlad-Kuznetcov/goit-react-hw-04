import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./servise/unsplashAPI";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalImg, setModalImg] = useState({});

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setShowLoader(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        if (!data.results.length) {
          setIsEmpty(true);
          return;
        }

        setImages((prev) => [...prev, ...data.results]);
        setShowLoadMore(page < data.total_pages);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setShowLoader(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSearchSubmit = (value) => {
    setQuery(value);
    setShowLoadMore(false);
    setPage(1);
    setImages("");
    setIsError(false);
    setIsEmpty(false);
  };

  const handleClickMoreBtn = () => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (img) => {
    setOpenModal(true);
    setModalImg(img);
  };

  const closeModal = () => {
    setOpenModal(false);
    setModalImg({});
  };
  return (
    <>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      {isEmpty && (
        <ErrorMessage
          title={"Error... Reason: invalid value"}
          notify={"Nothing found, please enter a valid query!"}
        />
      )}
      {images.length > 0 && (
        <ImageGallery images={images} handleOpenModal={handleOpenModal} />
      )}

      <ImageModal
        modalIsOpen={openModal}
        closeModal={closeModal}
        url={modalImg.url}
        alt={modalImg.alt}
      />

      {showLoader && <Loader />}
      {showLoadMore && <button onClick={handleClickMoreBtn}>Load More</button>}
      {isError && (
        <ErrorMessage title={"Something went wrong!"} notify={"OOOPSS..."} />
      )}
    </>
  );
}

export default App;
