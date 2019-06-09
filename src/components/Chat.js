import React from 'react';

function Chat() {
  return (
    <div className="d-none d-lg-block chat fixed">
      <div className="chat__header" data-toggle="collapse" data-target="#collapseExample"
           aria-expanded="false" aria-controls="collapseExample">
        Have a question?
        <img src="/assets/icons/icon-chat-white.svg" alt="icon-chat" />
      </div>
      <div className="collapse" id="collapseExample">
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
              <input className="form-control mr-2" type="text" />
              <button type="submit" className="btn btn-send">
                <img src="/assets/icons/icon-send.svg" alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
