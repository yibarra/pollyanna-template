import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import ContactInfo from './ContactInfo';
import Form from '../../components/Form';

import './contact.scss';

// contact
const Contact = ({ page: { form, contacts, credits } }) => {
  // translate
  const { t } = useTranslation();

  // render
  return (
    <div className="contact">
      <div className="wrapper">
        <ContactInfo contacts={contacts} credits={credits} />

        <div className="contact--form">
          <h1 className="title-main">{t('message')}</h1>
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