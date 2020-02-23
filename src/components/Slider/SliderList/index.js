import React from 'react';
import PropTypes from 'prop-types';

import './slider-list.scss';

// Slider List
const SliderList = ({ children, current, last }) => {
  // items child
  const itemsChilds = React.Children.map(children, (child, index) => {
    return <li
      className="slider--item"
      data-active={current === index}
      data-last={last === index}
      key={index}>{child}</li>
  });

  // render
  return (
    <ul className="slider--container">{itemsChilds}</ul>
  );
};

SliderList.propTypes = {
  children: PropTypes.array,
  current: PropTypes.number.isRequired,
  last: PropTypes.number,
};

export default SliderList;