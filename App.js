import React from 'react';
import {LogBox, YellowBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation';
import {getStore, getPersistor} from './src/redux';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StyledText} from './src/components/atoms';

/**
 * Total time spent on development - 6 H 
 * Total time spent on R&D - 2 H
 * 
 */

const App = () => {
  const store = getStore();
  const persistor = getPersistor();

  console.disableYellowBox = true;
  LogBox.ignoreAllLogs(true);
  YellowBox.ignoreWarnings(['']);
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const onBeforeLift = () => {
    //Do some stuff that when redux has initialized
  };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate
          loading={<StyledText>Loading...</StyledText>}
          persistor={persistor}
          onBeforeLift={onBeforeLift}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
