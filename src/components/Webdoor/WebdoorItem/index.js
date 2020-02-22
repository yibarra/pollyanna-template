import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './webdoor-item.scss';

/**
 * Webdoor Item
 *
 * @class WebdoorItem
 * @extends {Component}
 */
const WebdoorItem = (props) => {
  // translate
  const { t } = useTranslation();
  
  /**
   * render
   *
   * @returns
   * @memberof WebdoorItem
   */
  return (
    <div className="webdoor--item--content">
      <p className="title">{t(props.name)}</p>
      <p className="description">{t(props.description)}</p>

      <NavLink className="btn-more r" to={props.linkUrl}>{t(props.linkText)}</NavLink>
    </div>
  );
};

WebdoorItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
}

export default WebdoorItem;