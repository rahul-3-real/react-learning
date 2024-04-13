const Modal = ({ children, handleModalCancelClick, handleModalClick }) => {
  return (
    <div className="modal" onClick={handleModalClick}>
      <div className="modal-body" onClick={handleModalCancelClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
