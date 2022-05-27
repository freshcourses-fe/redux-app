import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import translations from './translations.json';
import * as actionCreators from './../../redux/actions/';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';
const Header = (props) => {
  const { user, lang, theme, changeLang, changeTheme } = props;
  const { greetingText, guestName, changeLangLabel, signUp, signIn } =
    translations[lang];

  const changeThemeHandler = () =>
    changeTheme(
      theme === CONSTANTS.THEMES.white
        ? CONSTANTS.THEMES.black
        : CONSTANTS.THEMES.white
    );

  const handleSelect = ({ target: { value } }) => changeLang(value);

  const options = Object.values(CONSTANTS.LANGUAGES).map((lang) => (
    <option key={lang} value={lang}>
      {translations[lang].optionText}
    </option>
  ));

  const controlButtons = (
    <div className={classes.btnContainer}>
      {user ? (
        <button>Logout</button>
      ) : (
        <>
          <Link to="/signup">{signUp}</Link>
          <Link to="/login">{signIn}</Link>
        </>
      )}
    </div>
  );

  const styles = cx(classes.header, {
    [classes.white]: theme === CONSTANTS.THEMES.white,
    [classes.black]: theme === CONSTANTS.THEMES.black,
  });

  return (
    <header className={styles}>
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
        <button onClick={changeThemeHandler}>Сменить тему</button>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.lang.lang,
    theme: state.theme.theme,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (lang) => dispatch(actionCreators.changeLang(lang)),
    changeTheme: (theme) => dispatch(actionCreators.changeTheme(theme)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
