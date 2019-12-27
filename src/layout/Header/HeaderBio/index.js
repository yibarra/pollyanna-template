import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Slider from '../../../components/Slider';

import './header-bio.scss';

// Header bio
const HeaderBio = () => {
  const items = [
    { img: process.env.PUBLIC_URL + '/images/bio-webdoor-1.png', title: 'about me' },
    { img: process.env.PUBLIC_URL + '/images/bio-webdoor-2.png', title: 'about me' },
    { img: 'https://placeimg.com/640/480/arch', title: 'about me' },
    { img: 'https://placeimg.com/640/480/sepia', title: 'about me' },
  ];

  // current
  const [ current, setCurrent ] = useState(0);

  const onSetCurrent = index => {
    if (isNaN(index) || Number.isInteger(index) === false) return false;

    setCurrent(index);
  };

  // render
  return (
    <div className="header--bio">
      <div className="header--bio--content">
        <div className="header--bio--content--images">
          <Slider current={current} callback={onSetCurrent} type={2}>
            {items.map((item, index) => <div data-active={index === current} key={index} className="image">
              <img src={item.img} alt={item.title} /></div>)}
          </Slider>
        </div>

        <div className="header--bio--content--info">
          <h1 className="title">Bio</h1>
          <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
          <a href="/" className="link">ver mais</a>
        </div>
      </div>
    </div>
  );
};

HeaderBio.propTypes = {
  any: PropTypes.any,
};

export default HeaderBio;