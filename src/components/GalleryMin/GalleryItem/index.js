import React from 'react';
import PropTypes from 'prop-types';

import './gallery-item.scss';

// GalleryItem
const GalleryItem = ({ url, author }) => {
  // render  
  return (
    <div className="gallery-item">
      <img src={url} alt={author} />
    </div>
  );
};

GalleryItem.propTypes = {
  any: PropTypes.any,
}

export default GalleryItem;