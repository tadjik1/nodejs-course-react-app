import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';
import cx from 'classnames';

const CardComponent = ({cardTitle, cardImgSrc, cardRate, cardRateAmount, cardPrice, cardOldPrice, discount}) => (
    <Card>
        <div className="card-img-wrap">
            <CardImg width="100%" className="card-img-top" src={ cardImgSrc } alt="Card image cap" />
        </div>
        <CardBody>
            <CardTitle>{ cardTitle }</CardTitle>
            <div className="flex-grow"></div>
            {
                cardRate !== false &&
                <div className="rate">
                    <i className="icon-star checked"></i>
                    <i className="icon-star checked"></i>
                    <i className="icon-star checked"></i>
                    <i className="icon-star checked"></i>
                    <i className="icon-star checked"></i>
                    <span className="rate-amount ml-2">{ cardRateAmount }</span>
                </div>
            }
            <CardText className={ cx("price-text", { "discount": discount }) }>
                <strong>€ { cardPrice }</strong>
                { cardOldPrice && <small className="ml-2">€ {cardOldPrice}</small> }
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