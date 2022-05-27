import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const OnlyPublicRoute = ({ user, ...rest }) => {
  if (user) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
};

const mStP = (state) => ({ user: state.auth.user });

export default connect(mStP)(OnlyPublicRoute);
