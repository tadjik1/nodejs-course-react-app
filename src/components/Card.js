import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Card, CardTitle, CardText, CardImg, CardBody} from 'reactstrap';
import cx from 'classnames';

const CardComponent = ({url, cardTitle, cardImgSrc, cardRate, cardRateAmount, cardPrice, cardOldPrice, discount}) => (
  <Card tag={Link} to={url}>
    <div className="card-img-wrap">
      <CardImg width="100%" className="card-img-top" src={cardImgSrc} alt="Card image cap"/>
    </div>
    <CardBody>
      <CardTitle>{cardTitle}</CardTitle>
      <div className="flex-grow"></div>
      <CardText className={cx("price-text")}>
        ₽ {cardPrice}
      </CardText>
    </CardBody>
  </Card>
);

CardComponent.propTypes = {
  cardTitle: PropTypes.string,
  cardImgSrc: PropTypes.string,
  cardRate: PropTypes.bool,
  cardRateAmount: PropTypes.string,
  cardPrice: PropTypes.string,
  cardOldPrice: PropTypes.string,
  discount: PropTypes.bool
};

export default CardComponent;
