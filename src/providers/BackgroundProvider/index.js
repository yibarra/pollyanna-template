import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import 'firebase/firestore';
import firebase from 'firebase/app';
import { FirestoreProvider, FirestoreCollection } from '@react-firebase/firestore';
import { config } from '../../config';

// main context
const BackgroundContext = createContext({
  items: [],
});

// Main provider
const BackgroundProvider = props => {
  // render
  return (
    <FirestoreProvider firebase={firebase} {...config}>
      <FirestoreCollection path="background/" orderByValue={"created_on"}>
        {({ value }) => {
          return <BackgroundContext.Provider
            value={{
              items: value,
            }}>
            {props.children}
          </BackgroundContext.Provider>;
        }}
      </FirestoreCollection>
    </FirestoreProvider>
  )
}

BackgroundProvider.propTypes = {
  any: PropTypes.any,
}

export { BackgroundProvider, BackgroundContext };
export default BackgroundProvider;