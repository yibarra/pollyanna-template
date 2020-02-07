import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from '../../Input';
import TextArea from '../../TextArea';

// Form Types
const FormTypes = props => {
  // props
  const { item, index } = props;

  // get type
  const getType = (item, index) => {
    if (item instanceof Object === false) return false;

    switch (item.type) {
      case 'textarea':
        return <TextArea {...item} key={index} />
      case 'email':
      case 'text':
      default:
        return <Input {...item} key={index} />
    }
  };

  // render
  return (
    <Fragment>
      {getType(item, index)}
    </Fragment>
  )
};

FormTypes.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default FormTypes;