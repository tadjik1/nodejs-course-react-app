import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Collapse} from 'reactstrap';
import {fetchCategories} from '../store/modules/categories/actions';
import {fetchProductsByCategory} from '../store/modules/products/actions';
import Loader from './Loader';

function Category({ categories, products, fetchCategories, fetchProductsByCategory, match }) {
  useEffect(() => {
    fetchCategories();
    fetchProductsByCategory(match.params.category);
  }, [match.params.category]);
  
  const [selectedCategoryId, selectCategoryId] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  
  useEffect(() => {
    if (!categories.length) return;
    
    for (const category of categories) {
      const subcategory = category.subcategories.find(({id}) => id === match.params.category);
      if (!subcategory) continue;
  
      selectCategoryId(category.id);
      setSelectedSubcategory(subcategory);
      
      break;
    }
  }, [categories.length]);
  
  if (!categories.length || !products.length) {
    return <Loader />;
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="d-none d-lg-block col-lg-4 col-xl-3">
          <div id="accordion" className="aside-accordion-menu list-group">
            {categories.map((category) => {
              return (
                <div className="list-group-item" key={category.id}>
                  <h5 className="mb-0" onClick={() => selectCategoryId(category.id)}>
                    {category.title} <img src="assets/icons/icon-angle.svg" alt="angle-right" />
                  </h5>
                  <Collapse isOpen={selectedCategoryId === category.id}>
                    <ul>
                      {category.subcategories.map(subcategory => {
                        return (
                          <li key={subcategory.id}>
                            <Link to={`/category/${subcategory.id}`}>{subcategory.title}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </Collapse>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-8 col-xl-9">
          <h3 className="h5 mt-4 mt-md-0 pt-1 mb-4">{selectedSubcategory.title}</h3>
          {products.map(product => {
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
  return {
    categories: state.categories,
    products: state.products.byCategory[props.match.params.category] || []
  };
}

const mapDispatchToProps = { fetchCategories, fetchProductsByCategory };


export default connect(mapStateToProps, mapDispatchToProps)(Category);
