import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from "react-router";

import LangSelect from '../../../components/LangSelect';

import './header-top.scss';

/**
 * Header Top
 * 
 * @param {*} props 
 */
const HeaderTop = ({ active, onActive }) => {
  // return
  return (
    <div className="header--top">
      <button className="header--top--btn" onClick={() => onActive(active)} data-active={active}>
        <i className="material-icons play">menu</i>
        <i className="material-icons">close</i>
      </button>

      <LangSelect />
    </div>
  );
};

HeaderTop.propTypes = {
  active: PropTypes.bool,
  onActive: PropTypes.func.isRequired,
}

export default withRouter(HeaderTop);