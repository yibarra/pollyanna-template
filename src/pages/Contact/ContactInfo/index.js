import React from 'react';
import PropType from 'prop-types';

import { useTranslation } from 'react-i18next';

// Contact Info
const ContactInfo = ({ contacts, credits }) => {
  // translate
  const { t } = useTranslation();

  // value element
  const valueElement = (icon, value, index) => {
    return <span className="value" key={index}><i className="material-icons">{icon}</i>{t(value)}</span>;
  };

  // render
  return (
    <div className="contact--info">
      <div className="contact--info--container">
        <h1 className="title-main">{t('contatos')}</h1>
        <ul className="contact--info--list">
          {contacts && contacts.map((item, index) => <li className="contact--info--item" key={index}>
            <p className="text">
              <span className="title">{item.label}</span>
              {item.type === 'email' &&
                valueElement(item.icon, item.value)}
                
              {item.type === 'phones' &&
                item.value.map((phone, pIndex) => valueElement(phone.icon, phone, pIndex))}
            </p>
          </li>)}
        </ul>
      </div>

      <div className="contact--info--container">
        <h1 className="title-main">{t('creditos')}</h1>
        <ul className="contact--info--list credits">
          {credits && credits.map((item, index) => <li className="contact--info--item" key={index}>
            <a className="text" href={item.url} rel="noopener noreferrer" target="_blank">
              <span className="title">{item.name}</span>
            </a>
          </li>)}
        </ul>
      </div>
    </div>);
};

ContactInfo.propTypes = {
  contact: PropType.array,
  credits: PropType.array,
};

export default ContactInfo;