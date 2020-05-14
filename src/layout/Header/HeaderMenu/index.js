import React from 'react';
import PropTypes from 'prop-types';

import HeaderMenuItem from './HeaderMenuItem';

import './header-menu.scss';

// Header Menu
const HeaderMenu = ({ page, pages }) => {
  // render
  return (
    <div className="header--menu">
      <ul className="header--menu--list">
        {Array.isArray(pages) && pages.map((item, index) => 
          <HeaderMenuItem active={page === item} key={index} item={item} />)}
      </ul>
    </div>
  );
};

HeaderMenu.propTypes = {
  pages: PropTypes.array,
  page: PropTypes.object,
};

export default HeaderMenu;