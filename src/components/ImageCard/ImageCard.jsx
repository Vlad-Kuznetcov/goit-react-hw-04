import s from "../ImageCard/ImageCard.module.css";

const ImageCard = ({ alt_description, id, urls, handleOpenModal }) => {
  return (
    <li className={s.item} key={id}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() =>
          handleOpenModal({ url: urls.regular, alt: alt_description })
        }
      />
    </li>
  );
};

export default ImageCard;
