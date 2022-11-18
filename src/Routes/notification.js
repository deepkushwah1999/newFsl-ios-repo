import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFcmToken()
    }
}


const getFcmToken = async () => {

    let fcmToken = await AsyncStorage.getItem('fcmToken')
    console.log(fcmToken, "the old Token;")
    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken();
            if (fcmToken) {
                console.log('====================================');
                console.log(fcmToken, "the new token generated");
                console.log('====================================');
                await AsyncStorage.setItem('fcmToken', fcmToken)

                var data = JSON.stringify({
                    "deviceToken": fcmToken
                });

                var config = {
                    method: 'post',
                    url: 'https://dev.fastline.one/api/v1/saveNotificationToken',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                await axios(config)
                    .then(function (response) {
                        console.log("Device TOken Stored In a database", JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });




            }
        } catch (error) {
            console.log('====================================');
            console.log(error, "error Araised in fcm token");
            console.log('====================================');
        }

    }
}





export const notificationListner = async () => {

    messaging().onNotificationOpenedApp(async remoteMessage => {
        console.log('Notifiacation caused app to open from background State:', remoteMessage.notification);
    });



    messaging().onMessage(async remoteMessage => {
        console.log("recievied in foregruound", remoteMessage.notification);
        //   PushNotification.localNotification({
        //       channelId:'fsl',
        //       title:remoteMessage.notification.title,
        //       message: remoteMessage.notification.body

        //   })



    });



    messaging()
        .getInitialNotification()
        .then(async remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );

            }
        });



}




// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-async-storage/async-storage'


// export async function requestUserPermission() {
//     console.log("i am in fcm token;;;;;;;;;;;;;");
//   const authStatus = await messaging().requestPermission();
//   console.log("sssssssssssssssssss",authStatus);
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     getFcmToken()
//   }
// }



// const getFcmToken = async () => {

//     let fcmToken = await AsyncStorage.getItem('fcmToken')
//     console.log(fcmToken, "the old Token;")
//     if (!fcmToken) {
//         try {
//             const fcmToken = await messaging().getToken();
//             if (fcmToken) {
//                 console.log('====================================');
//                 console.log(fcmToken, "the new token generated");
//                 console.log('====================================');
//                 await AsyncStorage.setItem('fcmToken', fcmToken)

//             }
//         } catch (error) {
//             console.log('====================================');
//             console.log(error, "error Araised in fcm token");
//             console.log('====================================');
//         }

//     }
// }


// export const notificationListner = async () => {

//   messaging().onNotificationOpenedApp(async remoteMessage => {
//       console.log('Notifiacation caused app to open from background State:', remoteMessage.notification);
//   })

//   messaging().onMessage(async remoteMessage => {
//       console.log("recievied in foregruound", remoteMessage.notification);
//       PushNotification.localNotification({
//           channelId:'fsl',
//           title:remoteMessage.notification.title,
//           message: remoteMessage.notification.body

//       })


  
//   })

//   messaging()
//       .getInitialNotification()
//       .then(async remoteMessage => {
//           if (remoteMessage) {
//               console.log(
//                   'Notification caused app to open from quit state:',
//                   remoteMessage.notification,
//               );

//           }
//       });



// }