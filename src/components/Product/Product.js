import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProductsByCategory} from '../../store/modules/products/actions';
import Loader from '../Loader';
import ProductCarousel from './ProductCarousel';
import ProductTabs from './ProductTabs';

function Product({ products, fetchProductsByCategory, match }) {
  useEffect(() => {
    fetchProductsByCategory(match.params.category);
  }, [match.params.category]);

  if (!products.length) {
    return <Loader />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <ProductCarousel images={products[0].images} />
        </div>
        <div className="col-lg-7">
          {products &&
            <div className="product-info">
              <h3 className="h5">{products[0].title}</h3>
              <div className="rate">
                <i className="icon-star checked"></i>
                <i className="icon-star checked"></i>
                <i className="icon-star checked"></i>
                <i className="icon-star checked"></i>
                <i className="icon-star checked"></i>
                <span className="rate-amount ml-2 d-inline-block d-md-none">121</span>
              </div>
              <p className="rate-amount d-none d-md-block mt-1">11 reviews</p>
              <div className="row flex-column-reverse flex-lg-row">
                <div className="col-md-7">
                  <p className="d-none d-lg-block">
                    An easy-to-use camera that works hand-in-hand with smart devices and delivers superb quality whatever
                    you’re shooting.
                  </p>
                  <h5 className="h6 mt-4">Highlights</h5>
                  <ul className="pl-4 mb-1">
                    <li>Beginner's DSLR to tell the story as you see it</li>
                    <li>24.2 MP, APS-C sensor, 5 fps, Dual Pixel CMOS AF</li>
                    <li>Wi-Fi, NFC, Bluetooth, vari-angle touch screen LCD</li>
                  </ul>
                  <div>
                    <Link to="#">View all specifications</Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <p className="d-block d-lg-none mt-3">
                    An easy-to-use camera that works hand-in-hand with smart devices and delivers superb quality whatever
                    you’re shooting.
                  </p>
                  <h4 className="col-title price-text discount mb-2 mt-0">€ 359 <small className="ml-2">€ 395</small></h4>
                  <Link to="#" className="btn btn-primary btn-lg">Buy now</Link>
                  <p className="p-notice mb-0 text-success">Min. 2 year guarantee included Extensive range of genuine
                    Canon products Eligible for free delivery</p>
                </div>
              </div>
              <ProductTabs />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    products: state.products.byCategory[props.match.params.category] || []
  };
}

const mapDispatchToProps = { fetchProductsByCategory };


export default connect(mapStateToProps, mapDispatchToProps)(Product);
