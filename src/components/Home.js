import React from 'react';

import HomeMenu from './HomeMenu';
import HomeCarousel from './HomeCarousel';
import Recommendations from './Recommendations';

function Home() {
  return (
    <React.Fragment>
      <div className="backdrop"></div>
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row">
          <div className="col-lg-3">
            <HomeMenu />
          </div>
          <div className="col-lg-9">
            <HomeCarousel />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-9">
            <Recommendations />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home;
