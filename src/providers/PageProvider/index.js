import React, { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// page context
const PageContext = createContext({
  page: {},
  setPage: () => {},
});

// Page provider
const PageProvider = props => {
  // location
  const location = props.location;
  // pages
  const pages = props.pages;

  // page
  const [ page, setPage ] = useState({});

  // set theme
  const setCurrentPage = useCallback(location => {
    if (Array.isArray(pages)) {
      for (let element of pages) {
        if (location === '' || location === '/') {
          setPage(element);
        } else {
          if (element.slug === `/${location}`) {
            setPage(element);
          }
        }
      }
    }
  }, [ pages, setPage ]);

  // Handle Location Change
  const handleLocationChange = useCallback(routeLocation => {
    if (routeLocation instanceof Object) {
      const location = routeLocation.pathname.substring(1).split('/')[0];

      return setCurrentPage(location);
    }

    return setCurrentPage('/');
  }, [ setCurrentPage ]);

  // use effect
  useEffect(() => {
    handleLocationChange(location);
  }, [ handleLocationChange, location ]);

  // render
  return (
    <PageContext.Provider value={
      { page: page, setPage: setPage, }
    }>{props.children}</PageContext.Provider>
  );
};

PageProvider.propTypes = {
  location: PropTypes.object,
};

export { PageProvider, PageContext };
export default PageProvider;