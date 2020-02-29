import React from 'react';
import PropTypes from 'prop-types';

import SliderItem from '../SliderItem';

import './slider-list.scss';

// Slider List
const SliderList = ({ children, current, last }) => {
  // render
  return (
    <ul className="slider--container">{React.Children.map(children, (child, index) =>
      <SliderItem
        active={current === index}
        last={last === index}
        key={index}>{child}</SliderItem>
    )}</ul>
  );
};

SliderList.propTypes = {
  children: PropTypes.array,
  current: PropTypes.number.isRequired,
  last: PropTypes.number,
};

export default SliderList;