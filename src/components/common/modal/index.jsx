import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import '../modal/styles.css';

const Modal = ({ children, onClose, isOpen, time }) => {
  const portalRoot = document.getElementById("portal-root");
  useEffect(() => {
    let timer;
    if (time) {
      timer = setTimeout(() => {
        onClose();
      }, time);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [time, onClose]);
  if (!portalRoot) return;

  if (!isOpen) return null;
  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal">{children}</div>
      </div>
    </>,
    portalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

export default Modal;
