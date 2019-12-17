import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MainContext } from '../../providers/MainProvider';

import HeaderTop from './HeaderTop';
import HeaderMenu from './HeaderMenu';

import './header.scss';

// Header
const Header = props => {
  // active
  const [ active, setActive ] = useState(false);

  // main context
  const mainContext = useContext(MainContext);
  // pages
  const pages = mainContext.pages;
  // location
  const location = props.location;

  // on open menu
  const onToggleActive = () => {
    setActive(!active);
  };

  // use effect
  useEffect(() => {
    if (location) {
      setActive(false);
    }
  }, [ location ]);

  // render
  return (
    <header className="header" data-active={active}>
      <HeaderTop active={active} onActive={onToggleActive} />

      <HeaderMenu pages={pages} />
    </header>
  );
};

Headers.propTypes = {
  any: PropTypes.any,
};

export default Header;