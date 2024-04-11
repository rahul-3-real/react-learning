const Modal = ({ onModalVisibility, modalIsVisible, children }) => {
  const handleModalClick = () => {
    onModalVisibility();
  };

  const handleModalBodyClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`modal ${modalIsVisible ? "show" : ""}`}
      onClick={handleModalClick}
    >
      <div className="modal-body" onClick={handleModalBodyClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
