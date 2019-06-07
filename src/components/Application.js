import React from 'react';

import Header from './Header';

function Application({children}) {
  return (
    <React.Fragment>
      <Header />
      <main role="main">
        <div className="d-none d-lg-block chat fixed">
          <div className="chat__header" data-toggle="collapse" data-target="#collapseExample"
               aria-expanded="false" aria-controls="collapseExample">
            Have a question?
            <img src="assets/icons/icon-chat-white.svg" alt="icon-chat" />
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
                    <img src="assets/icons/icon-send.svg" alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop"></div>
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-3">
              <ul className="list-group sidebar">
                <li className="list-group-item dropdown">
                  <a className="nav-link dropdown-toggle" id="dropdown1" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">Camera & Photo</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown1">
                    <li className="dropdown-item"><a>Accessories</a></li>
                    <li className="dropdown-item"><a>Action Cameras & Accessories</a></li>
                    <li className="dropdown-item"><a>Binoculars, Telescopes & Optics</a></li>
                    <li className="dropdown-item"><a>Camcorders</a></li>
                    <li className="dropdown-item"><a>Digital Cameras</a></li>
                    <li className="dropdown-item"><a>Digital Picture Frames</a></li>
                    <li className="dropdown-item"><a>Film Cameras</a></li>
                    <li className="dropdown-item"><a>Film Scanners</a></li>
                    <li className="dropdown-item"><a>Flashes</a></li>
                    <li className="dropdown-item"><a>Lenses</a></li>
                    <li className="dropdown-item"><a>Photo Printers</a></li>
                    <li className="dropdown-item"><a> Slide Projectors</a></li>
                    <li className="dropdown-item"><a>Slide Viewers</a></li>
                    <li className="dropdown-item"><a>Surveillance Cameras</a></li>
                    <li className="dropdown-item"><a>Tripods & Monopods</a></li>
                    <li className="dropdown-item"><a>Underwater Video & Photography</a></li>
                    <li className="dropdown-item"><a>Video Projectors</a></li>
                  </ul>
                </li>
                <li className="list-group-item dropdown">
                  <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">Home Cinema, TV & Video</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown2">
                    <li className="dropdown-item"><a>Home Cinema, TV & Video</a></li>
                  </ul>
                </li>
                <li className="list-group-item dropdown">
                  <a className="nav-link dropdown-toggle" id="dropdown3" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">Mobile Phones</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown3">
                    <li className="dropdown-item"><a>Mobile Phones</a></li>
                  </ul>
                </li>
                <li className="list-group-item dropdown">
                  <a className="nav-link dropdown-toggle" id="dropdown4" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">Computers & Components</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown4">
                    <li className="dropdown-item"><a>Computers & Components</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div id="mainCarousel" className="main-carousel carousel slide">
                <ol className="carousel-indicators">
                  <li data-target="#mainCarousel" data-slide-to="0" className="active"></li>
                  <li data-target="#mainCarousel" data-slide-to="1"></li>
                  <li data-target="#mainCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="assets/images/default-slide-img.jpg" alt="First slide" />
                    <div className="container">
                      <div className="carousel-caption">
                        <h3 className="h1">BEST LAPTOP DEALS</h3>
                        <div>
                          <a className="btn" href="#" role="button">
                            View all DEALS
                            <img src="assets/icons/icon-angle-white.svg" className="ml-3" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="second-slide" src="assets/images/default-slide-img.jpg"
                         alt="Second slide" />
                      <div className="container">
                        <div className="carousel-caption">
                          <h3 className="h1">BEST LAPTOP DEALS</h3>
                          <div>
                            <a className="btn" href="#" role="button">
                              View all DEALS
                              <img src="assets/icons/icon-angle-white.svg" className="ml-3" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="carousel-item">
                    <img className="third-slide" src="assets/images/default-slide-img.jpg"
                         alt="Third slide" />
                      <div className="container">
                        <div className="carousel-caption">
                          <h3 className="h1">BEST LAPTOP DEALS</h3>
                          <div>
                            <a className="btn" href="#" role="button">
                              View all DEALS
                              <img src="assets/icons/icon-angle-white.svg" className="ml-3" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#mainCarousel" role="button"
                   data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#mainCarousel" role="button"
                   data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-9">
              <h3 className="section-title">Top Recommendations for You</h3>
              <div className="row homepage-cards">
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card">
                    <div className="card-img-wrap">
                      <img className="card-img-top" src="assets/images/headphones.png"
                           alt="Card image cap" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Nuraphone - Wireless Bluetooth Over-Ear
                        Headphones</h5>
                      <div className="rate">
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star active"></i>
                        <span className="rate-amount ml-2">24</span>
                      </div>
                      <p className="card-text price-text"><strong>€ 399</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card">
                    <div className="card-img-wrap">
                      <img className="card-img-top" src="assets/images/headset.png"
                           alt="Card image cap" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Homido Virtual Reality Headset for Smartphone</h5>
                      <div className="flex-grow"></div>
                      <div className="rate">
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <span className="rate-amount ml-2">121</span>
                      </div>
                      <p className="card-text price-text"><strong>€ 47.31</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card">
                    <div className="card-img-wrap">
                      <img className="card-img-top" src="assets/images/turntable.png"
                           alt="Card image cap" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Victrola Pro USB Bluetooth Turntable Vinyl to MP3
                        Function</h5>
                      <div className="rate">
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <span className="rate-amount ml-2">24</span>
                      </div>
                      <p className="card-text price-text discount"><strong>€ 129.92</strong>
                        <small className="ml-2">€ 250</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card">
                    <div className="card-img-wrap">
                      <img className="card-img-top" src="assets/images/bluetooth-headphones.png"
                           alt="Card image cap" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Zolo Liberty Bluetooth Headphones</h5>
                      <div className="rate no-reviews">
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                        <span className="rate-amount ml-2">no reviews</span>
                      </div>
                      <p className="card-text price-text discount"><strong>€ 79.99</strong>
                        <small className="ml-2">€ 90.55</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card">
                    <div className="card-img-wrap">
                      <img className="card-img-top" src="assets/images/speaker.png"
                           alt="Card image cap" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Libratone Zipp Wireless Speaker</h5>
                      <div className="rate">
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <span className="rate-amount ml-2">11</span>
                      </div>
                      <p className="card-text price-text"><strong>€ 205.98</strong></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                  <div className="card">
                    <div className="card-img-wrap align-items-start">
                      <img className="card-img-top" src="assets/images/microphone.png"
                           alt="Card image cap" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Mikme Microphone, Black</h5>
                      <div className="rate">
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star checked"></i>
                        <i className="icon-star active"></i>
                        <span className="rate-amount ml-2">14</span>
                      </div>
                      <p className="card-text price-text"><strong>€ 299.00</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-menu">
              <a href="#" className="text-muted">Terms and Conditions</a>
              <span className="d-none d-md-inline-flex">|</span>
              <a href="#" className="text-muted">Privacy</a>
              <span className="d-none d-md-inline-flex">|</span>
              <a href="#" className="text-muted">Cookies</a>
              <span className="d-none d-md-inline-flex">|</span>
              <a href="#" className="text-muted">Home shopping guarantee</a>
            </div>
            <div>
              © 1998-2019, AnyShop.com, Inc. or its affiliates
            </div>
          </div>
        </div>
      </footer>
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
