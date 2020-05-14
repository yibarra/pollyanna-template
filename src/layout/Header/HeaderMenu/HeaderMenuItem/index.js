import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import './header-menu-item.scss';

// header menu item
const HeaderMenuItem = ({ item: { name, index, slug }, active }) => {
  // translate
  const { t } = useTranslation();

  // home
  const typeElement = useCallback((slug, name) => {
    switch (slug) {
      case '/':
        return <span className="material-icons">home</span>;
      default:
        return t(name);
    }
  }, [ t ]);

  // render
  return (
    <li
      className="header--menu--item"
      data-active={active}
      style={{order: index}}>
      <Link
        className="link"
        to={`#${slug}`}>{typeElement(slug, name)}</Link>
    </li>
  );
};

HeaderMenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  active: PropTypes.bool,
};

export default memo(HeaderMenuItem);