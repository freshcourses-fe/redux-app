import React from 'react';
import { connect } from 'react-redux';
import CONSTANTS from '../../constants';
import translations from './translations.json';
import * as actionCreators from './../../actions';

const Header = (props) => {
  const { user, lang, changeLang } = props;

  const { greetingText, guestName, changeLangLabel } = translations[lang];

  const handleSelect = ({ target: { value } }) => changeLang(value);

  const options = Object.values(CONSTANTS.LANGUAGES).map((lang) => (
    <option key={lang} value={lang}>
      {translations[lang].optionText}
    </option>
  ));

  return (
    <header>
      <h1>My Site</h1>
      <h2>
        {greetingText} {user ? `${user.FirstName} ${user.lastName}` : guestName}
      </h2>

      <label>
        {changeLangLabel}:
        <select value={lang} onChange={handleSelect}>
          {options}
        </select>
      </label>
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
