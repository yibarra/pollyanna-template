import React from 'react';
import PropTypes from 'prop-types';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useSwipeable } from 'react-swipeable';

import Slider from '../Slider';
import GalleryItem from './GalleryItem';

import './gallery-min.scss';

// GalleryMin
const GalleryMin = ({ current, handlerMobile, items, last, setCurrent }) => {
  // callback set current
  const callback = (current) => {
    if (Number.isInteger(current) === false) return false;

    const item = items[current];

    if (item instanceof Object) {
      setCurrent(current);
    }
  };

  // handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handlerMobile('next'),
    onSwipedRight: () => handlerMobile('prev'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // render  
  return (
    <div className="gallery-min" {...handlers}>
      <ReactScrollWheelHandler
          upHandler={() => handlerMobile('prev')}
          downHandler={() => handlerMobile('next')}>
        {items &&
          <Slider current={current} callback={callback} type={4}>
            {items.map((item, index) => 
              <GalleryItem current={current} last={last} {...item} index={index} key={index} />)}
          </Slider>}
        </ReactScrollWheelHandler>
    </div>
  );
};

GalleryMin.propTypes = {
  current: PropTypes.number,
  items: PropTypes.array,
  handlerMobile: PropTypes.func.isRequired,
  last: PropTypes.number,
};

export default GalleryMin;