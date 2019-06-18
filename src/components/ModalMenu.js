import React from 'react';
import {Link} from 'react-router-dom';
import Modal from './Modal';
import {ChatMobile} from './ModalChat';
import {Button} from 'reactstrap';

const ModalMenu = () => (
  <div className="modal-menu">
    <Link to="#" className="modal-menu__item">Sales</Link>
    <Link to="#" className="modal-menu__item">Gift Cards</Link>
    <Link to="#" className="modal-menu__item">Login</Link>
    <Link to="#" className="modal-menu__item">Register</Link>
    <h3 className="h6 mb-0 modal-menu__title">Product categories</h3>
    <Modal
      title="Chat"
      content={<ChatMobile/>}
      id="chatModal"
      isBackBtn
      isCloseBtn
      openModalButtonContent={
        <Button color="link" className="modal-menu__item is-submenu w-100">
          Have a question? <img src="assets/icons/icon-chat.svg" alt=""/>
        </Button>
      }
    />
    <Link to="#" className="modal-menu__item is-submenu">Home Cinema, TV & Video</Link>
    <Link to="#" className="modal-menu__item is-submenu">Mobile Phones</Link>
    <Link to="#" className="modal-menu__item is-submenu">Computers & Components</Link>
  </div>
);

export default ModalMenu;