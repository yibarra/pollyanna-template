import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import HeaderMenu from './HeaderMenu';
import HeaderTop from './HeaderTop';

import './header.scss';

// Header
const Header = ({ page, pages }) => {
  // active
  const [ active, setActive ] = useState(false);

  // on open menu
  const onToggleActive = () => {
    setActive(!active);
  };

  // render
  return (
    <header className="header" data-active={active}>
      <HeaderTop active={active} onActive={onToggleActive} />
      <HeaderMenu active={active} page={page} pages={pages} />
    </header>
  );
};

Headers.propTypes = {
  any: PropTypes.any,
};

export default memo(Header);