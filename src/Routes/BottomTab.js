import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Alert } from 'react-native';
import { useState, useEffect } from 'react'
// import Home from '../pages/Home/Home';
import Home1 from '../pages/Home1/Home1';
import AsyncStorage from '@react-native-community/async-storage';

import PINCode, {
  resetPinCodeInternalStates,
  deleteUserPinCode,
} from '@haskkor/react-native-pincode';
import Account_Setting from '../pages/Account_Setting/Account_Setting';
import ContactUs from '../pages/ContactUs/ContactUs';

import FireHome from '../pages/FireHome/FireHome';
import Matches_Slide from '../pages/Matches_Slide/Matches_Slide';

import { userActions, themeActions, languageActions } from '../_actions';
import { connect } from 'react-redux';
import {

  Text,

} from 'react-native';
import { View } from 'native-base';


const Tab = createBottomTabNavigator();

const BottomTab = (props) => {

  const { theme, leng } = props;




  return (
    <>


      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size, border }) => {
            let iconLink;
            let Label;

            if (route.name === 'Videos' || route.name === 'वीडिओ') {
              Label = 'Videos';
              iconLink = focused
                ? require('../Statics/img/Home/7.png')
                : require('../Statics/img/Home/7.png');
            } else if (route.name === 'Ashes') {
              Label = 'Ashes';
              iconLink = focused
                ? require('../Statics/img/Home/3.png')
                : require('../Statics/img/Home/3.png');
            } else if (route.name === 'Home' || route.name === 'होम') {
              Label = 'Home';
              iconLink = focused
                ? require('../Statics/img/Home/2.png')
                : require('../Statics/img/Home/2.png');
            } else if (route.name === 'Live' || route.name === 'लाइव') {
              Label = 'Live';
              iconLink = focused
                ? require('../Statics/img/Home/5.png')
                : require('../Statics/img/Home/5.png');
            } else if (route.name === 'Matches' || route.name === 'मैचेस') {
              Label = 'Matches';
              iconLink = focused
                ? require('../Statics/img/Home/6.png')
                : require('../Statics/img/Home/6.png');
            } else if (route.name === 'Setting' || route.name === 'सेटिंग') {
              Label = 'Setting';
              iconLink = focused
                ? require('../Statics/img/Home/8.png')
                : require('../Statics/img/Home/8.png');
            }





            // You can return any component that you like here!
            return (
              <>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    margin: 2,
                  }}
                  source={iconLink}
                />
              </>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'yellow',
          inactiveTintColor: 'white',
          keyboardHidesTabBar: true,

          style: {
            position: 'absolute',
            backgroundColor: theme && theme.primary ? theme.primary : null,

          },
        }}
        initialRouteName="Home">
        <Tab.Screen name={leng.theme == "en" ? "Home" : "होम"} component={FireHome} initialRouteName={'FireHome'}
        />


        <Tab.Screen name={leng.theme == "en" ? "Live" : "लाइव"} component={Home1} />
        <Tab.Screen name={leng.theme == "en" ? "Matches" : "मैचेस"} component={Matches_Slide} />


        <Tab.Screen name={leng.theme == "en" ? "Videos" : "वीडिओ"} component={Account_Setting} />
        <Tab.Screen name={leng.theme == "en" ? "Setting" : "सेटिंग"} component={ContactUs} />
      </Tab.Navigator>
    </>
  );
};


const mapStateToProps = (state) => {

  const { users, dashboard, theme, leng } = state;
  return {
    users,
    dashboard,
    theme, leng
  };
}

export default connect(mapStateToProps)(BottomTab);
