import React, { Component, useEffect } from 'react';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import AsyncStorage from '@react-native-community/async-storage';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from 'react-native';
import All_Matches from '../All_Matches/All_Matches';
import { userActions, themeActions, matchesActions } from '../../_actions';
import T20Matches from '../All_Matches/T20Matches';
import ODI_Matches from '../All_Matches/ODI_Matches';
import Test_Matches from '../All_Matches/Test_Matches';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';






const { width, height } = Dimensions.get('window');

function Matches_Slide(props) {
  const [index, setIndex] = React.useState(0);
  const [coloetheme, setcoloetheme] = React.useState(true);
  const [active, setactive] = React.useState(true);
  const [colortheme, setcolortheme] = React.useState(false);


  const { theme, matches, leng } = props;

  const [routes] = React.useState([
    { key: 'first', title: leng.theme == "en" ? "All" : "ऑल" },
    { key: 'second', title: leng.theme == "en" ? "T20" : "टी-20" },
    { key: 'third', title: leng.theme == "en" ? "ODI" : "ओ-डी-ई" },
    { key: 'fouth', title: leng.theme == "en" ? "TEST" : "टेस्ट" },


  ]);




  const colortheamobj = (data) => {


    setactive(false);


    props.dispatch(matchesActions.setTheme({ matches: data, }));
    setcoloetheme(!coloetheme);

    setTimeout(() => {
      setactive(true);
    }, 2000);



  }



  console.log("matches:::::::::", matches.matches);



  return (
    <SafeAreaView>
      <View style={{ height: '100%', backgroundColor: theme && theme.primary ? theme.primary : null }}>

        <View style={{ padding: 0.5, backgroundColor: theme && theme.secondary ? theme.secondary : null }} />

        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: 'white', alignSelf: 'center', 
          // fontFamily: 'Poppins-Medium'
           }}>
            {leng.theme == "en" ? "MATCHES" : "मैचेस "}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

            <TouchableOpacity onPress={() => colortheamobj("Recent")} style={{ padding: 10, width: '30%', borderWidth: 0.5, borderRadius: 15, backgroundColor: matches && matches.matches == "Recent" ? "green" : null }} activeOpacity={0.5} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
              <View style={{}} ><Text style={{ color: 'white', textAlign: 'center' }}> {leng.theme == "en" ? "Recent" : "रीसेंट  "}</Text></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => colortheamobj("Upcoming")} style={{ padding: 10, width: '30%', borderWidth: 0.5, borderRadius: 15, backgroundColor: matches && matches.matches == "Upcoming" ? "green" : null }} activeOpacity={0.5} hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
              <View style={{}} ><Text style={{ color: 'white', textAlign: 'center' }}>{leng.theme == "en" ? "Upcoming" : "अपकमिंग "}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {active ?

          <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={false}>
            <View style={{ flex: 1, backgroundColor: theme && theme.primary ? theme.primary : null }}>


              <View style={{ height: height - 50 }}>
                <TabView
                  indicatorStyle={{ backgroundColor: 'white' }}
                  style={{ backgroundColor: 'white' }}
                  navigationState={{ index, routes }}
                  renderScene={SceneMap({
                    first: () => <All_Matches {...props} />,
                    second: () => <T20Matches {...props} />,
                    third: () => <ODI_Matches {...props} />,
                    fouth: () => <Test_Matches {...props} />,


                  })}
                  scrollEnable={false}
                  onIndexChange={setIndex}
                  initialLayout={{ width: Dimensions.get('window').width }}
                  renderTabBar={props => (
                    <TabBar
                      {...props}
                      style={{ backgroundColor: theme && theme.primary ? theme.primary : null }}
                      activeColor={'white'}
                      indicatorStyle={{ backgroundColor: 'white' }}
                      inactiveColor={'white'}
                    />
                  )}
                />
              </View>
            </View>
          </ScrollView>
          :
          <View
            style={{
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255,0.8)',
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
        }
      </View>






    </SafeAreaView>
  );
}

function mapStateToProps(state) {

  const { users, dashboard, theme, matches, leng } = state;
  return {
    theme,
    matches, leng
  };
}

export default connect(mapStateToProps)(Matches_Slide);



const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    padding: 6,
  },
  itemContainer: {
    marginRight: 16,
    marginLeft: 6,
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'white',
  },
});
