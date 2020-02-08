import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Translation } from 'react-i18next';

import './lang-select.scss';

//Lang Select
const LangSelect = () => {
  // state
  const [ index, setIndex ] = useState(0);

  // get languages
  const getLanguages = i18n => {
    if (i18n instanceof Object === false || !i18n) return false;

    if (Array.isArray(i18n.languages)) {
      const orderLanguages = i18n.languages.sort();

      return orderLanguages.map((item, index) => {
        return <li className="lang-select--item" key={index}>
            <button className="lang" onClick={() => onSelect(i18n, item, index)}>{item}</button>
          </li>;
      });
    }

    return false;
  };

  // on select
  const onSelect = (i18n, item, index) => {
    if (i18n instanceof Object === false) return false;

    setIndex(index);
    i18n.changeLanguage(item);
  };

  // position
  const position = i18n => {
    const left = (index / i18n.languages.length) * 100;
    const width = parseInt(Math.floor(100 / i18n.languages.length));

    return { left: `${left}%`, width: `${width}%` };
  };

  // render
  return (
    <div className="lang-select">
      <span className="lang-select--icon">
        <i className="material-icons">language</i>
      </span>

      <Translation>
        {(t, { i18n }) => 
          <Fragment>
            <ul className="lang-select--list">{getLanguages(i18n)}</ul>
            <div className="lang-select--active" style={position(i18n)}></div>
          </Fragment>}
      </Translation>
    </div>
  );
};

LangSelect.propTypes = {
  any: PropTypes.any,
};

export default LangSelect;