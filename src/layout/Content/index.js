import React from 'react';
import PropTypes from 'prop-types';

// Content
const Content = props => {

  console.log(props);

  // render
  return (
    <div>
      <p>content</p>
    </div>
  );
};

Content.propTypes = {
  any: PropTypes.any,
};

export default Content;
