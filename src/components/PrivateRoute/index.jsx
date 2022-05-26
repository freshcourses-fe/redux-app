import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ user, ...rest }) => {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

const mStP = (state) => ({ user: state.user.user });

export default connect(mStP)(PrivateRoute);
