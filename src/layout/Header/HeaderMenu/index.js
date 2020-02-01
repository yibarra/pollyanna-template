import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './header-menu.scss';

// Header Menu
const HeaderMenu = props => {
  // render
  return (
    <div className="header--menu">
      <ul className="header--menu--list">
        {Array.isArray(props.pages) && props.pages.map((item, index) => 
          <li className="header--menu--item" key={index} style={{order: item.index}}>
            <NavLink className="link" exact={item.slug === '/'} activeClassName="active" to={item.slug}>{item.name}</NavLink>
          </li>)}
      </ul>
    </div>
  );
};

HeaderMenu.propTypes = {
  props: PropTypes.any,
};

export default HeaderMenu;