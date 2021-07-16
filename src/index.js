import React from 'react';
import Routes from './Routes/index';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './Redux/index';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import {LogBox} from 'react-native';
import NetInfo,{useNetInfo} from '@react-native-community/netinfo';
import {useEffect, useRef} from 'react';
LogBox.ignoreAllLogs(true);
const isAppStartDependsONNetwork = true;
export default function App() {
  const networkConnected = useRef(true);
  const netInfo = useNetInfo();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (networkConnected != state.isConnected)
        showMessage({
          message: state.isConnected ? 'Back Online' : 'You are offline',
          type: state.isConnected ? 'success' : 'warning',
        });
      networkConnected.current = state.isConnected;
    });
    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="bottom" icon="auto" />
    </Provider>
  );
}
