import React from 'react';
import PropTypes from 'prop-types';

import Form from '../../components/Form';

import './contact.scss';

// contact
const Contact = props => {
  // props
  const { page: { form } } = props;

  // render
  return (
    <div className="contact">
      <Form form={form} />
    </div>
  );
};

Contact.propTypes = {
  page: PropTypes.object,
};

export default Contact;