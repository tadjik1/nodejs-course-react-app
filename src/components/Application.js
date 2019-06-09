import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Chat from './Chat';

function Application({children}) {
  return (
    <React.Fragment>
      <Header />
      <main role="main">
        <Chat />
        {children}
      </main>
      <Footer />
      <div
        className="modal fade"
        id="xsMenuModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="xsMenuModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              Menu
              <button
                type="button"
                className="btn-close float-none px-2 py-2"
                data-dismiss="modal"
                aria-label="Close">
                <img src="assets/icons/icon-close.svg" alt="close" />
              </button>
            </div>
            <div className="modal-menu">
              <a href="#" className="modal-menu__item">Sales</a>
              <a href="#" className="modal-menu__item">Gift Cards</a>
              <a href="#" className="modal-menu__item">Login</a>
              <a href="#" className="modal-menu__item">Register</a>
              <a href="#"
                 className="modal-menu__item"
                 data-toggle="modal"
                 data-target="#chatModal">Have a question? <img src="assets/icons/icon-chat.svg"
                                                                alt="" /></a>
              <h3 className="h6 mb-0 modal-menu__title">Product categories</h3>
              <a
                href="#"
                className="modal-menu__item is-submenu"
                data-toggle="modal"
                data-target="#menuItemModal">
                Camera & Photo
              </a>
              <a href="#" className="modal-menu__item is-submenu">Home Cinema, TV & Video</a>
              <a href="#" className="modal-menu__item is-submenu">Mobile Phones</a>
              <a href="#" className="modal-menu__item is-submenu">Computers & Components</a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="menuItemModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="menuItemModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="arrow-back"
                data-toggle="modal"
                data-target="#xsMenuModal"
                aria-label="back">
                <img src="assets/icons/icon-arrow.svg" alt="back" />
              </button>
              Camera & Photo
              <button
                type="button"
                className="btn-close float-none px-2 py-2"
                data-dismiss="modal"
                aria-label="Close">
                <img src="assets/icons/icon-close.svg" alt="close" />
              </button>
            </div>
            <div className="modal-menu">
              <a href="#" className="modal-menu__item">Home</a>
              <a href="#" className="modal-menu__item">Switch to business account</a>
              <a href="#" className="modal-menu__item">Buy a gift card</a>
              <a
                href="#"
                className="modal-menu__item"
                data-toggle="modal"
                data-target="#signUpModal">
                Sign up
              </a>
              <a
                href="#"
                className="modal-menu__item"
                data-toggle="modal"
                data-target="#signInModal">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="chatModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="chatModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="arrow-back"
                data-toggle="modal"
                data-target="#xsMenuModal"
                aria-label="back">
                <img src="assets/icons/icon-arrow.svg" alt="back" />
              </button>
              Have a question?
              <button
                type="button"
                className="btn-close float-none px-2 py-2"
                data-dismiss="modal"
                aria-label="Close">
                <img src="assets/icons/icon-close.svg" alt="close" />
              </button>
            </div>
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
                    <input className="form-control mr-2" type="text" />
                      <button type="submit" className="btn btn-send"><img
                        src="assets/icons/icon-send.svg" alt="" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Application;
