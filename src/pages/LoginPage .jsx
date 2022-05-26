import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';


const LoginPage  = (props) => {
  return (
    <>
      <header>
        <Link to='/'><h1>My Site</h1></Link>
      </header>
      <LoginForm />
    </>
  );
};

export default LoginPage ;
