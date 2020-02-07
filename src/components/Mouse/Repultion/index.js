import React from 'react';
import PropTypes from 'prop-types';

import RepultionItem from './RepultionItem';

import './repultion.scss';

// settings
const defaultSettings = {
  reverse: false,
  max: 35,
  perspective: 1000,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  scale: '1.1',
  speed: '1000',
  transition: true,
  axis: null,
  reset: true
};

// repulsion
const Repultion = props => {
  // items
  const items = React.Children.map(props.children, (child, index) => {
    return <RepultionItem defaultSettings={{ ...defaultSettings, ...props.items[index] }} key={index}>{child}</RepultionItem>
  });

  // render
  return (
    <div className="repultion">{items}</div>
  )
};

Repultion.propTypes = {
  any: PropTypes.any,
};

export default Repultion;