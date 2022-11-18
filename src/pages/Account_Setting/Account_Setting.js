import React, {Component} from 'react';
import { connect } from 'react-redux';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Vedio from '../Vedio/Vedio';
import News from '../News/News';

const {width, height} = Dimensions.get('window');

 function Account_Setting(props) {

  const {theme,leng}=props;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: leng.theme=="en"?"VIDEOS":"वीडियोस "},
    {key: 'second', title: leng.theme=="en"?"NEWS":"न्यूज़ "},
  ]);


  

  return (
    <SafeAreaView>
      <View style={{height: '100%', backgroundColor:theme&&theme.primary?theme.primary:null}}>
       

        <View style={{padding: 0.5, backgroundColor: 'gray'}} />

        <View style={{marginHorizontal: 20, marginTop: 20}}>
          <Text style={{fontSize: 16, color: 'white', alignSelf: 'center',
          // fontFamily: 'Poppins-Medium'
          }}>
          {leng.theme=="en"?"TRENDING ARTICLES":"ट्रेंडिंग आर्टिकल्स "}
          </Text>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}} scrollEnabled={false}>
          <View style={{flex: 1, backgroundColor: theme&&theme.secondary?theme.secondary:null}}>
            

            <View style={{ height: height - 50 }}>
              <TabView
                indicatorStyle={{ backgroundColor: 'white' }}
                style={{ backgroundColor: 'white' }}
                navigationState={{ index, routes }}
                renderScene={SceneMap({
                  first: () => <Vedio {...props} />,
                  second: () => <News {...props} />,
                  


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
      </View>
    </SafeAreaView>
  );
}

function mapStateToProps(state) {

   
    const { theme,leng } = state;
    return {
       theme,leng
    };
}

export default connect(mapStateToProps)(Account_Setting)
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
