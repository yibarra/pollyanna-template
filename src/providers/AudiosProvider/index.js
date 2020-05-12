import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import 'firebase/firestore';
import firebase from 'firebase/app';
import { FirestoreProvider, FirestoreCollection } from '@react-firebase/firestore';
import { config } from '../../config';

// main context
const AudiosContext = createContext({
  items: [],
});

// Main provider
const AudiosProvider = ({ children }) => {
  // render
  return (
    <FirestoreProvider firebase={firebase} {...config}>
      <FirestoreCollection path="audios/" orderByValue={"created_on"}>
        {({ value }) => <AudiosContext.Provider
            value={{
              items: value,
            }}>
            {children}
        </AudiosContext.Provider>}
      </FirestoreCollection>
    </FirestoreProvider>
  );
};

AudiosProvider.propTypes = {
  any: PropTypes.any,
};

export { AudiosProvider, AudiosContext };
export default AudiosProvider;