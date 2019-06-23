import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchCategories} from '../store/modules/categories/actions';
import {fetchProductsByQuery} from '../store/modules/products/actions';
import Loader from './Loader';
import CategoriesSideBar from './CategoriesSideBar';
import queryString from 'query-string';

function Category({ categories, products, fetchCategories, fetchProductsByQuery, location }) {
  const values = queryString.parse(location.search);
  
  useEffect(() => {
    fetchCategories();
    fetchProductsByQuery(values.query);
  }, [values.query]);
  
  if (!categories.length || !products.products) {
    return <Loader />;
  }
  
  return (
    <div className="container">
      <div className="row">
        <CategoriesSideBar categories={categories} />
        <div className="col-lg-8 col-xl-9">
          {products.products.length === 0 &&
            <h4 className="col-title mb-2">{`По запросу ${values.query} ничего найти не удалось`}</h4>
          }
          {products.products.map(product => {
            return (
              <div className="product-list-box" key={product.id}>
                <div className="box-inner-col description-col">
                  <div className="product-img">
                    <img src={product.images[0]} alt="img" />
                  </div>
                  <div className="product-desc">
                    <h4 className="col-title mb-2">{product.title}</h4>
                    <div className="rate">
                      <i className="icon-star checked"></i>
                      <i className="icon-star checked"></i>
                      <i className="icon-star checked"></i>
                      <i className="icon-star checked"></i>
                      <i className="icon-star checked"></i>
                      <span className="rate-amount ml-2 d-inline-block d-md-none">121</span>
                    </div>
                    <p className="rate-amount d-none d-md-block mt-1">11 reviews</p>
                    <p className="price-text mb-0 mt-2 d-inline-block d-md-none"><strong>€
                      47.31</strong></p>
                  </div>
                </div>
                <div className="box-inner-col price-col">
                  <h4 className="col-title price-text mb-2">€ 491</h4>
                  <div>
                    <button type="button" className="btn btn-outline-primary">Add to basket</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  const values = queryString.parse(props.location.search);
  return {
    categories: state.categories,
    products: state.products.byQuery[values.query] || {}
  };
}

const mapDispatchToProps = { fetchCategories, fetchProductsByQuery };


export default connect(mapStateToProps, mapDispatchToProps)(Category);
