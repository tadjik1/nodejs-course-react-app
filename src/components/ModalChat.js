import React from 'react';
import Modal from './Modal/Modal';
import {Button} from 'reactstrap';

export const ChatMobile = () => (
  <div className="chat">
    <div className="chat__inner">
      <div className="chat__body">
        <div className="chat__message -income">
          <div className="chat__message--date">AnyShop @ 16:45</div>
          <div className="chat__message--inner">
            hello
          </div>
        </div>
        <div className="chat__message -outcome">
          <div className="chat__message--date">you @ 16:47</div>
          <div className="chat__message--inner">
            hello
          </div>
        </div>
        <div className="chat__message -income">
          <div className="chat__message--date">AnyShop @ 16:50</div>
          <div className="chat__message--inner">
            hello
          </div>
        </div>
      </div>
      <div className="chat__footer">
        <form className="form-inline form-inline-flex">
          <input className="form-control mr-2" type="text"/>
          <Button color="link" type="submit" className="btn btn-send">
            <img src="assets/icons/icon-send.svg" alt=""/>
          </Button>
        </form>
      </div>
    </div>
  </div>
);

const ModalChat = () => {
  return (
    <Modal
      title="Chat"
      isBackBtn
      isCloseBtn
      content={<ChatMobile/>}
    />
  );
};

export default ModalChat;