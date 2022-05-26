import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = (props) => {
  return (
    <>
      <Header />
      <main>Main page of site</main>
      <Link to="/profile" >PROFILE</Link>
    </>
  );
};

export default Home;
