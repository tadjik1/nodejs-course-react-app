import React from 'react';
import { CardDeck } from 'reactstrap';

import CardExample from './Card';

function Recommendations({ items }) {
  return (
    <React.Fragment>
      <h3 className="section-title">Top Recommendations for You</h3>
      <CardDeck className="homepage-cards">
        {items.map(item => {
          return (
            <CardExample
              key={item.id}
              cardTitle={item.title}
              cardImgSrc={item.images[0]}
              cardRate={true}
              cardRateAmount="121"
              cardPrice="129.92"
              cardOldPrice="250"
              discount={true}
            />
          );
        })}
      </CardDeck>
    </React.Fragment>
  );
}

export default Recommendations;
