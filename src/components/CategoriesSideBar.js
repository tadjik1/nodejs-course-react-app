import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Collapse} from "reactstrap";

export default function CategoriesSideBar({category, categories}) {
  const [selectedCategoryId, selectCategoryId] = useState(category);

  return (
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
  );
}
