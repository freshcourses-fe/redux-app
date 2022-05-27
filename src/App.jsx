import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OnlyPublicRoute from './components/OnlyPublicRoute';
import PrivateRoute from './components/PrivateRoute';
import UserList from './components/UserList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage ';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import Counter from './components/Counter';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <OnlyPublicRoute exact path="/login" component={LoginPage} />
          <OnlyPublicRoute exact path="/signup" component={SignUpPage} />
          <PrivateRoute path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
      <Counter />

      <UserList />
    </>
  );
};

export default App;
