import React from 'react';

import ListGroupMenu from './ListGroupMenu';
import HomeCarousel from './HomeCarousel';
import Recommendations from './Recommendations';

function Home() {
  return (
    <React.Fragment>
      <div className="backdrop"/>
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-3">
            <ListGroupMenu/>
          </div>
          <div className="col-lg-9">
            <HomeCarousel/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-9">
            <Recommendations/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;
