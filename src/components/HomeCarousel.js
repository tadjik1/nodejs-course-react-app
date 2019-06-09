import React from 'react';

function HomeCarousel() {
  return (
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
  );
}

export default HomeCarousel;
