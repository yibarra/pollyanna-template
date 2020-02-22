import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Slider from '../Slider';
import WebdoorItem from './WebdoorItem';

import './webdoor.scss';

// Webdoor
const Webdoor = props => {

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
    <section className="webdoor">
      {props.items &&
        <Fragment>
          <Slider current={props.current} callback={callback} type={1} background={true}>
            {props.items.map((item, index) => <WebdoorItem {...item} key={index} />)}
          </Slider>
        </Fragment>}
    </section>
  );
};

Webdoor.propTypes = {
  any: PropTypes.any,
}

export default Webdoor;