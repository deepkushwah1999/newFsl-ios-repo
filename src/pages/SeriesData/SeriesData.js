import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import {
  StyleSheet, View, Text, ScrollView,
  Image, Dimensions, TouchableOpacity, SafeAreaView,navigation
} from 'react-native';
import Fixture from '../SeriesData/Fixture';
import Point_Table from '../SeriesData/Point_Table';

const { width, height } = Dimensions.get('window');

 function SeriesData(props)
  {
    const  {theme,leng } = props;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title:  leng.theme=="en"?"Fixture":"फिक्सचर " },
    { key: 'second', title: leng.theme=="en"?"Point Table":"पॉइंट  टेबल " },


  ]);

 



  return (

    <SafeAreaView>
      <View style={{ height: '100%', backgroundColor: theme?theme.primary:null }}>

        <View style={{ padding: 0.5, backgroundColor:theme?theme.secondary:null }} />

        <View style={{  marginTop: 20,flexDirection:'row' }}>
          <TouchableOpacity onPress={() => props.navigation.goBack()} style={{marginLeft:10}}>
            <Image
              style={{ marginLeft: 10,marginRight:15 }}
              source={require('../../Statics/img/Home/back-arrow.png')}
            />
          </TouchableOpacity>

          <Text style={{ fontSize: 16, color: 'white', alignSelf: "center" }}>

            {props.route.params.series && props.route.params.series ? props.route.params.series : "Match List"}
          </Text>


        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={false}>
          <View style={{ flex: 1, backgroundColor:theme?theme.primary:null, }}>


            <View style={{}}>
              <TabView
                indicatorStyle={{ backgroundColor: 'white' }}
                style={{ backgroundColor: 'white', }}
                navigationState={{ index, routes }}
                renderScene={SceneMap({

                  first: () => <Fixture {...props} />,
                  second: () => <Point_Table {...props} />,

                })}
                scrollEnable={true}
                onIndexChange={setIndex}
                initialLayout={{ width: Dimensions.get('window').width }}
                renderTabBar={props =>
                  < TabBar {...props} style={{ backgroundColor: theme?theme.primary:null, }}
                    activeColor={"white"}
                    indicatorStyle={{ backgroundColor: 'white' }} inactiveColor={"white"} />}
              />
            </View>
          </View>
        </ScrollView >

      </View >
    </SafeAreaView>
  )
}



const mapStateToProps=(state)=> {
  const { users, dashboard,theme ,leng} = state;
  return {
   
    theme,leng
  };
}

export default connect(mapStateToProps) (SeriesData);




const styles = StyleSheet.create({
  screen: {

    backgroundColor: 'white',
    padding: 6

  },
  itemContainer: {

    marginRight: 16,
    marginLeft: 6
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'white',
  }
});

