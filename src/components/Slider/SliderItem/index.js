import React from 'react';
import PropTypes from 'prop-types';

// Slider item
const SliderItem = ({ active, children, last }) => {
  // render
  return (
    <li
      className="slider--item"
      data-active={active}
      data-last={last}>
      {children}
    </li>
  );
};

SliderItem.propTypes = {
  active: PropTypes.bool,
  last: PropTypes.bool,
}

export default SliderItem;