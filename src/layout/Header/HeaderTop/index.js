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
const HeaderTop = () => {
  // return
  return (
    <div className="header--top">
      <LangSelect />
    </div>
  );
};

HeaderTop.propTypes = {
  active: PropTypes.bool,
  onActive: PropTypes.func.isRequired,
}

export default withRouter(HeaderTop);