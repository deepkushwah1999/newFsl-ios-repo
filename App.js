import React, {useState, useEffect} from 'react';
import {Root} from 'native-base';
import {store} from './src/_helpers/store';
import {Provider} from 'react-redux';
import Routes from './src/Routes/Routes';
import {Provider as PaperProvider,DarkTheme } from 'react-native-paper';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {requestUserPermission,notificationListner} from './src/Routes/notification'
import messaging from '@react-native-firebase/messaging';

 import PushNotification from "react-native-push-notification";


function App() {

  useEffect(() => {
   
    requestUserPermission()
    
    notificationListner()
  }, []);


  return (
    <PaperProvider theme={DarkTheme}>
      <Provider store={store}>
     
        <Root>
         
          <Routes />
        </Root>
       
      </Provider>
    </PaperProvider>
  );
}

export default App;
