import React from 'react';
import PropTypes from 'prop-types';

import './form.scss';
import Input from '../Input';

const Form = props => {
  // props
  const { form } = props;

  const getComponent = form => {
    if (form instanceof Object === false) return false;

    const items = [];

    for (const key in form) {
      const item = form[key];

      if (item instanceof Object) {
        items.push(getType(item, key));
      }
    }

    return items;
  };

  const getType = (item, key) => {
    if (item instanceof Object === false) return false;

    switch (item.type) {
      case 'text':
      default:
        return <Input {...item} key={key} />
    }
  };

  // render
  return (
    <div className="form">
      {getComponent(form)}
    </div>
  );
};

Form.propTypes = {
  form: PropTypes.array,
};

export default Form;