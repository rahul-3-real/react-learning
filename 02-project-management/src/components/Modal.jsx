import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ title, children }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const modal = (
    <dialog ref={dialog}>
      <div className="title">
        <h5>{title}</h5>
      </div>
      <div className="content">{children}</div>
      <form method="dialog">
        <button className="button-alt">X</button>
      </form>
    </dialog>
  );
  return createPortal(modal, document.querySelector("#modal-root"));
});

export default Modal;
