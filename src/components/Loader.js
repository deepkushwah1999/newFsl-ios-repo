import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import RNRestart from 'react-native-restart';

export const Loader = () => {

  // RNRestart.Restart()
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(231, 231, 231,0.5)',
      }}>
        
      <ActivityIndicator color={'#b30000'} size={'small'} />
      <Text
        style={{
          color: '#b30000',
          
          fontSize: 13,
        }}>
        Loading....
      </Text>
      

    </View>
  );
};
