import React, { createContext, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// page context
const PageContext = createContext({
  page: {},
  pages: {},
  setPage: () => {},
});

// Page provider
const PageProvider = ({ children, location, pages }) => {
  // page
  const [ page, setPage ] = useState({});

  // set theme
  const setCurrentPage = useCallback(location => {
    if (pages instanceof Object) {
      const currentPage = pages.filter((item) => location === item.slug)[0];
      setPage(currentPage);
    }
  }, [ pages, setPage ]);

  // Handle Location Change
  const handleLocationChange = useCallback(routeLocation => {
    if (routeLocation instanceof Object) {
      const { pathname } = routeLocation;

      return setCurrentPage(pathname);
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
      { page, pages, setPage }
    }>{children}</PageContext.Provider>
  );
};

PageProvider.propTypes = {
  location: PropTypes.object,
};

export { PageProvider, PageContext };
export default PageProvider;