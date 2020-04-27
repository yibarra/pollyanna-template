import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import './header-menu.scss';

// Header Menu
const HeaderMenu = ({ pages }) => {
  // translate
  const { t } = useTranslation();

  // render
  return (
    <div className="header--menu">
      <ul className="header--menu--list">
        {Array.isArray(pages) && pages.map((item, index) => 
          <li
            className="header--menu--item"
            key={index}
            style={{order: item.index}}>
            <NavLink
              activeClassName="active"
              className="link"
              exact={item.slug === '/'}
              to={`#${item.slug}`}>{t(item.name)}</NavLink>
          </li>)}
      </ul>
    </div>
  );
};

HeaderMenu.propTypes = {
  pages: PropTypes.array,
};

export default HeaderMenu;