import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { MouseContext } from '../../providers/MouseProvider';

import Slider from '../Slider';
import Repultion from '../Mouse/Repultion';
import WebdoorItem from './WebdoorItem';

import './webdoor.scss';

// Webdoor
const Webdoor = props => {
  // context mouse
  const mouseContext = useContext(MouseContext);

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
        <Slider current={props.current} callback={callback} type={1}>
          {props.items.map((item, index) => <WebdoorItem {...item} key={index} />)}
        </Slider>}

      <div className="webdoor--image">
        <Repultion mouse={mouseContext.mouse} cushion={0.1} strength={700} length={0.1}>
          <img className="image" src={`${process.env.PUBLIC_URL}/images/polly.png`} alt={'Pollyanna Ferrari'} />
        </Repultion>
        <Repultion mouse={mouseContext.mouse} cushion={0.1} strength={1500} length={0.1}>
          <img className="image" src={`${process.env.PUBLIC_URL}/images/path-1.png`} alt={'Pollyanna Ferrari'} />
        </Repultion>
        <Repultion mouse={mouseContext.mouse} cushion={0.1} strength={1750} length={0.1}>
          <img className="image" src={`${process.env.PUBLIC_URL}/images/path-2.png`} alt={'Pollyanna Ferrari'} />
        </Repultion>
      </div>
    </section>
  );
};

Webdoor.propTypes = {
  any: PropTypes.any,
}

export default Webdoor;