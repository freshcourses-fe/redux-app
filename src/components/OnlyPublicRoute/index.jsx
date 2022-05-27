import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OnlyPublicRoute = (props) => {
  const user = useSelector((state) => state.auth.user);

  if (user) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};

export default OnlyPublicRoute;
