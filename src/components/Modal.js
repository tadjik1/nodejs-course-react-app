import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Modal as ReactstrapModal, ModalHeader, Button} from 'reactstrap';

const Modal = ({title, content, openModalButtonContent, isBackBtn, isCloseBtn, ...rest}) => {
  const [isOpen, setToggleState] = useState(false);

  const handleToggleModal = () => {
    setToggleState(!isOpen);
  };

  return (
    <>
      <span className="d-flex" onClick={handleToggleModal}>
                {openModalButtonContent}
            </span>
      <ReactstrapModal
        title={title}
        isOpen={isOpen}
        toggle={handleToggleModal}
        content={content}
        {...rest}
      >
        <ModalHeader>
          {title}
          {isBackBtn && (
            <Button
              color="link"
              className="arrow-back px-2 py-2"
              onClick={handleToggleModal}
              aria-label="back"
            >
              <img src="assets/icons/icon-arrow.svg" alt="back"/>
            </Button>
          )}
          {isCloseBtn && (
            <Button
              color="link"
              className="btn-close px-2 py-2"
              onClick={handleToggleModal}
              aria-label="close"
            >
              <img src="assets/icons/icon-close.svg" alt="close"/>
            </Button>
          )}
        </ModalHeader>
        {content}
      </ReactstrapModal>
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isBackBtn: PropTypes.bool,
  isCloseBtn: PropTypes.bool,
  content: PropTypes.element.isRequired,
  openModalButtonContent: PropTypes.element.isRequired
};

export default Modal;
