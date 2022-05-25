import React from 'react';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import translations from './translations.json';
import * as actionCreators from './../../actions';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
const Header = (props) => {
  const { user, lang, changeLang } = props;

  const { greetingText, guestName, changeLangLabel, signUp, signIn } =
    translations[lang];

  const handleSelect = ({ target: { value } }) => changeLang(value);

  const options = Object.values(CONSTANTS.LANGUAGES).map((lang) => (
    <option key={lang} value={lang}>
      {translations[lang].optionText}
    </option>
  ));

  const controlButtons = (
    <div className={styles.btnContainer}>
      {user ? (
        <button>Logout</button>
      ) : (
        <>
          <Link to="/signup">{signUp}</Link>
          <Link to="/signin">{signIn}</Link>
        </>
      )}
    </div>
  );

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>My Site</h1>
      </Link>
      <h2>
        {greetingText} {user ? `${user.firstName} ${user.lastName}` : guestName}
      </h2>

      <div>
        <label>
          {changeLangLabel}:
          <select value={lang} onChange={handleSelect}>
            {options}
          </select>
        </label>
        {controlButtons}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.lang.lang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (lang) => dispatch(actionCreators.changeLang(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
