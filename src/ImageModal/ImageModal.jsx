import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    width: "auto",
    height: "auto",
    maxWidth: "90vw",
    maxHeight: "90vh",
    border: "none",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, url, alt }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img src={url} alt={alt} />
    </Modal>
  );
};

export default ImageModal;
