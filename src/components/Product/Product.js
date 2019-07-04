import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProductById} from '../../store/modules/products/actions';
import Loader from '../Loader';
import ProductCarousel from './ProductCarousel';

const formatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' });

function Product({ product, fetchProductById, match }) {
  useEffect(() => {
    fetchProductById(match.params.id);
  }, [match.params.id]);

  if (product.fetching || !product.product) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <ProductCarousel images={product.product.images} />
        </div>
        <div className="col-lg-7">
          <div className="product-info">
            <h3 className="h5">{product.product.title}</h3>
            <div className="row flex-column-reverse flex-lg-row">
              <div className="col-md-7">
                <p className="d-none d-lg-block">
                  {product.product.description}
                </p>
              </div>
              <div className="col-md-5">
                <h4 className="col-title price-text mb-2 mt-0">{formatter.format(product.product.price)}</h4>
                <Link to={`/checkout/${product.product.id}`} className="btn btn-primary btn-lg">Купить</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    product: state.products.byId[props.match.params.id] || {}
  };
}

const mapDispatchToProps = { fetchProductById };


export default connect(mapStateToProps, mapDispatchToProps)(Product);
