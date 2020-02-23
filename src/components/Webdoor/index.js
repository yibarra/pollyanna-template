import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Slider from '../Slider';
import WebdoorItem from './WebdoorItem';

import './webdoor.scss';

// Webdoor
const Webdoor = ({ items, current, setCurrent }) => {
  // callback set current
  const callback = (current) => {
    if (Number.isInteger(current) === false) return false;

    const item = items[current];

    if (item instanceof Object) {
      setCurrent(current);
    }
  };

  // render  
  return (
    <section className="webdoor">
      {items &&
        <Fragment>
          <Slider current={current} callback={callback} items={items} type={1} background={true}>
            {items.map((item, index) => <WebdoorItem {...item} key={index} />)}
          </Slider>
        </Fragment>}
    </section>
  );
};

Webdoor.propTypes = {
  current: PropTypes.number,
  items: PropTypes.array,
  setCurrent: PropTypes.func.isRequired,
}

export default Webdoor;