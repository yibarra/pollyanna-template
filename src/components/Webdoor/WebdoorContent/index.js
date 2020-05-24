import React, { memo } from 'react';
import PropTypes from 'prop-types';

import BaseGallery from '../../Slider/BaseGallery';
import WebdoorItem from '../WebdoorItem';

import './webdoor-content.scss';

// carrousel tiem line content
const WebdoorContent = ({ items, current, setCurrent }) => {
  // render
  return (
    <div className="webdoor--content">
      <div className="webdoor--content--list">
        <BaseGallery current={current} setCurrent={setCurrent} length={items.length}>
          {items.map((item, index) => <WebdoorItem item={item} key={index} />)}
        </BaseGallery>
      </div>
    </div>
  );
};

WebdoorContent.propTypes = {
  items: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default memo(WebdoorContent);