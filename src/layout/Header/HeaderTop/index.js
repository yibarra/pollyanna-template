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
const HeaderTop = props => {
  // split path
  const splitPath = () => {
    const url = props.location.pathname.substring(1);
    
    if (url !== '') {
      const items = url.split('/');

      return items.map((item, index) => {
        return <p className="link" data-last={index === (items.length - 1) && index > 0} key={index}>
          <i className="material-icons">arrow_forward_ios</i>
          <span>{item}</span>
        </p>;
      });
    } else {
      return <p className="link">
          <i className="material-icons">arrow_forward_ios</i>
          <span>Home</span>
        </p>;
    }
  };

  // return
  return (
    <div className="header--top">
      <div className="header--top--info">
        <button className="btn-open" onClick={() => props.onActive()}>
          <i className="material-icons">{props.active === false ? 'menu' : 'close'}</i>
        </button>

        <div className="header--top--current">{splitPath()}</div>
      </div>

      <LangSelect />
    </div>
  );
};

HeaderTop.propTypes = {
  active: PropTypes.bool,
  onActive: PropTypes.func.isRequired,
}

export default withRouter(HeaderTop);