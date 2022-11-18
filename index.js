/**
 * @format
 */
 import 'react-native-gesture-handler'
 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import { LogBox } from "react-native"
//  import messaging from '@react-native-firebase/messaging';

//  PushNotification.configure({

//     onNotification: function (notification) {
//         console.log("NOTIFICATION:", notification);
    
      
//       },
//       requestPermissions: Platform.OS === 'ios'

//  });

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background!', remoteMessage);
// });
 
 LogBox.ignoreAllLogs(true)
 AppRegistry.registerComponent(appName, () => App);
 