import React from 'react';
import PropTypes from 'prop-types';

import './gallery-item.scss';

// GalleryItem
const GalleryItem = props => {
  // render  
  return (
    <div className="gallery-item">
      <img src={props.src} alt={props.title} />
    </div>
  );
};

GalleryItem.propTypes = {
  any: PropTypes.any,
}

export default GalleryItem;