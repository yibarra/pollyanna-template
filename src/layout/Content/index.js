import React, { useContext, Fragment, memo } from 'react';
import PropTypes from 'prop-types';

import { PageContext } from '../../providers/PageProvider';

import MiniPlayer from '../../components/MiniPlayer';

import Header from '../Header';
import Footer from '../Footer';

import Bio from '../../pages/Bio';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';

import './content.scss';

// Content
const Content = props => {
  // player && page
  const pageContext = useContext(PageContext);
  const { page, pages } = pageContext;

  // types
  const types = item => {
    if (item instanceof Object === false) return false;

    switch (item.type) {
      case 'bio':
        return <Bio {...props} loading={props.loading} page={item}  />;
      case 'contact':
        return <Contact {...props} loading={props.loading} page={item} />;
      case 'home':
      default:
        return <Home {...props} loading={true} page={item} />;
    }
  };

  console.log('content');

  // render
  return (
    <Fragment>
      <div className="content" data-loading={props.loading}>
        <Header location={props.location} />
        
        {pages && pages.map((item, index) =>
          <section className="page-current" data-active={page === item} key={index}>
            {types(item)}
          </section>)}
        <Footer />
      </div>

      <MiniPlayer />
    </Fragment>
  );
};

Content.propTypes = {
  location: PropTypes.object,
};

export default memo(Content);
