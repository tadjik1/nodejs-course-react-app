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
          cardImgSrc="assets/images/turntable.png"
          cardRate={true}
          cardRateAmount="24"
          cardPrice="129.92"
          cardOldPrice="250"
        />
        <CardExample
          cardTitle="Zolo Liberty Bluetooth Headphones"
          cardImgSrc="assets/images/bluetooth-headphones.png"
          cardRate={true}
          cardRateAmount="no reviews"
          cardPrice="79.99"
          cardOldPrice="90.55"
          discount={true}
        />
        <CardExample
          cardTitle="Libratone Zipp Wireless Speaker"
          cardImgSrc="assets/images/speaker.png"
          cardRate={true}
          cardRateAmount="11"
          cardPrice="205.98"
        />
        <CardExample
          cardTitle="Mikme Microphone, Black"
          cardImgSrc="assets/images/microphone.png"
          cardRate={true}
          cardRateAmount="14"
          cardPrice="299.00"
        />
      </CardDeck>
    </React.Fragment>
  );
}

export default Recommendations;
