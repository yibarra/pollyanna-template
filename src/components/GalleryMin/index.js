import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../Slider';
import GalleryItem from './GalleryItem';

import './gallery-min.scss';

// GalleryMin
const GalleryMin = props => {
  // callback set current
  const callback = (current) => {
    if (Number.isInteger(current) === false) return false;

    const item = props.items[current];

    if (item instanceof Object) {
      props.setCurrent(current);
    }
  };

  // render  
  return (
    <div className="gallery-min">
      {props.items &&
        <Slider current={props.current} callback={callback} type={4}>
          {props.items.map((item, index) => <GalleryItem {...item} key={index} />)}
        </Slider>}
    </div>
  );
};

GalleryMin.propTypes = {
  any: PropTypes.any,
}

export default GalleryMin;