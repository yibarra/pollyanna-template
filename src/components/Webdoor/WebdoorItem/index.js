import React from 'react';
import PropTypes from 'prop-types';

import './webdoor-item.scss';

/**
 * Webdoor Item
 *
 * @class WebdoorItem
 * @extends {Component}
 */
const WebdoorItem = (props) => {
  /**
   * render
   *
   * @returns
   * @memberof WebdoorItem
   */
  return (
    <div className="webdoor--item--content">
      <p className="description">{props.description}</p>
      <a className="link" href={props.linkUrl}>{props.linkText}</a>
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