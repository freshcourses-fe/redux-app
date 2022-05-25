import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = (props) => {
  return (
    <>
      <header>
        <Link to='/'><h1>My Site</h1></Link>
      </header>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
