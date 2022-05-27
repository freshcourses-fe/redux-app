import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
  const user = useSelector((state) => state.auth.user);
  
  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
