import React from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import Chat from './Chat/Chat';

function Application({token, children}) {
  return (
    <React.Fragment>
      <Header />
      <main role="main">
        {!!token && (
          <div className="d-none d-lg-block">
            <Chat isFixed isCollapsed />
          </div>
        )}
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return { token: state.auth.token };
}

export default connect(mapStateToProps)(Application);
