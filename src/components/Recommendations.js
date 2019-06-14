import React from 'react';
import { CardDeck } from 'reactstrap';

import CardExample from './Card';

function Recommendations() {
  return (
    <React.Fragment>
      <h3 className="section-title">Top Recommendations for You</h3>
      <CardDeck className="homepage-cards">
        <CardExample
          cardTitle="Card product title"
          cardImgSrc="assets/images/headset.png"
          cardRate={true}
          cardRateAmount="121"
          cardPrice="129.92"
          cardOldPrice="250"
          discount={true}
        />
        <CardExample
          cardTitle="Homido Virtual Reality Headset for Smartphone"
          cardImgSrc="assets/images/headset.png"
          cardRate={true}
          cardRateAmount="121"
          cardPrice="129.92"
          cardOldPrice="250"
        />
        <CardExample
          cardTitle="Victrola Pro USB Bluetooth Turntable Vinyl to MP3 Function"
          cardImgSrc="assets/images/headset.png"
          cardRate={true}
          cardRateAmount="121"
          cardPrice="129.92"
          cardOldPrice="250"
        />
        <CardExample
          cardTitle="Card product title"
          cardImgSrc="assets/images/headset.png"
          cardRate={true}
          cardRateAmount="121"
          cardPrice="129.92"
          cardOldPrice="250"
          discount={true}
        />
        <CardExample
          cardTitle="Homido Virtual Reality Headset for Smartphone"
          cardImgSrc="assets/images/headset.png"
          cardRate={true}
          cardRateAmount="121"
          cardPrice="129.92"
          cardOldPrice="250"
        />
        <CardExample
          cardTitle="Victrola Pro USB Bluetooth Turntable Vinyl to MP3 Function"
          cardImgSrc="assets/images/headset.png"
          cardRate={true}
          cardRateAmount="121"
          cardPrice="129.92"
          cardOldPrice="250"
        />
      </CardDeck>
      <div className="row homepage-cards">
        <div className="col-md-6 col-lg-4 mb-4">
            <CardExample
              cardTitle="Card product title"
              cardImgSrc="assets/images/headset.png"
              cardRate={true}
              cardRateAmount="121"
              cardPrice="129.92"
              cardOldPrice="250"
            />
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
              <p className="card-text price-text"><strong>€ 129.92</strong>
                  <small className="ml-2">€ 250</small></p>
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
    </React.Fragment>
  );
}

export default Recommendations;
