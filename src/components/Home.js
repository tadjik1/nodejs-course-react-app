import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Chat from './Chat';

function Home({ token, ...rest }) {
  return (
    <h1>Home</h1>
  )
}

function mapStateToProps(state) {
  return { token: state.token };
}

export default connect(mapStateToProps)(Home);
