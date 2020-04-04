import React from 'react';
import PropTypes from 'prop-types';

import ContactInfo from './ContactInfo';
import Form from '../../components/Form';

import './contact.scss';

// contact
const Contact = ({ page: { form, contacts, credits }, loading }) => {
  // render
  return (
    <div className="contact" data-active={loading}>
      <div className="wrapper">
        <ContactInfo contacts={contacts} credits={credits} />

        <div className="contact--form">
          <Form form={form} />
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  page: PropTypes.object,
};

export default Contact;