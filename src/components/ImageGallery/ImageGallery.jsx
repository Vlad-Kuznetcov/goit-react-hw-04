import ImageCard from "../ImageCard/ImageCard";
import s from "../ImageGallery/ImageGallery.module.css";

const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <ul className={s.list}>
      {images?.map((item) => {
        return (
          <ImageCard
            key={item.id}
            {...item}
            handleOpenModal={handleOpenModal}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
