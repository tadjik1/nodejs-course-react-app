import React from 'react';
import { CardDeck } from 'reactstrap';

import CardExample from './Card';

const formatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' });

function Recommendations({ items }) {
  return (
    <React.Fragment>
      <h3 className="section-title">Лучшие рекоммендации для вас</h3>
      <CardDeck className="homepage-cards">
        {items.map(item => {
          return (
            <CardExample
              key={item.id}
              url={`/product/${item.id}`}
              cardTitle={item.title}
              cardImgSrc={item.images[0]}
              cardRate={true}
              cardRateAmount="121"
              cardPrice={formatter.format(item.price)}
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
