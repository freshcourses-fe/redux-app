import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
};

export default App;
