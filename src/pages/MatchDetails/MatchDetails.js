import React, { Component, useState, useEffect } from 'react';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import { Modal, Portal } from 'react-native-paper';
import axios from 'axios';
import SocketIOClient from 'socket.io-client';
import { connect } from 'react-redux';



import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView, ActivityIndicator, Box, FlatList
} from 'react-native';
import PlayingXI from './PlayingXI';

import Info from './Info';
import Live from './Live';
import Fancy from './Fancy';
import ScoreCard from './ScoreCard';
// import { fetchSpots } from "../store/actions/spots";

// const ENDPOINT = "http://192.168.0.104:6020";


const { width, height } = Dimensions.get('window');

 function MatchDetails(props) {




  const [index, setIndex] = React.useState(0);
  const [Show, setShow] = React.useState(false);

  const {theme,leng}=props;
  const [routes] = React.useState([
    { key: 'first', title:  leng.theme=="en"?"Info":"इन्फो "  },
    { key: 'second', title: leng.theme=="en"?"Playing XI":"प्लेइंग XI" },
    { key: 'third', title: leng.theme=="en"?"Fancy":"फैंसी " },
    { key: 'fourth', title: leng.theme=="en"?"Live":"  लाइव  "  },
    { key: 'Fivth', title: leng.theme=="en"?"Score":"स्कोर" },
  ]);

  const [routesUpcomming] = React.useState([
    { key: 'first', title: leng.theme=="en"?"Info":"इन्फो " },
    { key: 'second', title: leng.theme=="en"?"Playing XI":"प्लेइंग XI" },
    { key: 'third', title: leng.theme=="en"?"Fancy":"फैंसी " }
    // { key: 'Fivth', title: 'Score' },
  ]);

  const [routesLive] = React.useState([
    { key: 'first', title: leng.theme=="en"?"Live":"  लाइव  " },
    { key: 'second', title: leng.theme=="en"?"Info":"इन्फो " },
    { key: 'third', title: leng.theme=="en"?"Score":"स्कोर" },
    { key: 'fourth', title: leng.theme=="en"?"Fancy":"फैंसी " },

  ]);



 
  const [routesFinished] = React.useState([
    { key: 'first', title: leng.theme=="en"?"Score":"स्कोर" },
    { key: 'second', title: leng.theme=="en"?"Info":"इन्फो " },
    { key: 'third', title: leng.theme=="en"?"Playing XI":"प्लेइंग XI" },
  ]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);






  useEffect(() => {
    // console.log('====================================');
    // console.log("useEffectuseEffectuseEffect ");
    // console.log('====================================');
    var config = {
      method: 'get',
      url: 'http://18.222.40.111/api/v1/homeList',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios(config)
      .then(function (response) {
        // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk ", JSON.stringify(response.data));
        setData(response.data.data)


      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  // console.log('====================================');
  // console.log("22222222222222222222222222",data);
  // console.log('====================================');


  return (



    <SafeAreaView>
      <View style={{ height: '100%', backgroundColor: theme&&theme.primary?theme.primary:null }}>
        {/* <Header {...props} /> */}

        <View style={{ padding: 0.5, backgroundColor: theme&&theme.secondary?theme.secondary:null }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
          <TouchableOpacity onPress={() => props.navigation.pop()} style={{ marginTop: 20, alignSelf: 'flex-start' }}>
            <Image
              style={{}}
              source={require('../../Statics/img/Home/back-arrow.png')}
            />
          </TouchableOpacity>


          <View style={{ marginTop: 20, alignSelf: 'center', flexDirection: 'row' }}>
            {props.route.params.team_a_short && props.route.params.team_b_short ? <Text style={{ fontSize: 16, color: 'white', 
            // fontFamily: 'Poppins-Medium' 
            }}>
              {props.route.params.team_a_short + "  VS  " + props.route.params.team_b_short}
            </Text> : <Text style={{ fontSize: 16, color: 'white',
            //  fontFamily: 'Poppins-Medium' 
             }}>
              Match
            </Text>}
            <TouchableOpacity
              onPress={() => setShow(true)}>
              {/* <AntDesign
                name={Show ? 'caretup' : 'caretdown'}
                size={15}
                color="white"
                style={{ marginLeft: 5 }}
              /> */}
            </TouchableOpacity>

            <>
              <Portal>
                <Modal
                  onDismiss={() => setShow(false)}
                  contentContainerStyle={{
                    width: '70%',
                    height: '50%',
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    position: 'absolute',
                    top: 20,
                    alignSelf: 'center',
                  }}
                  dismissable={true}
                  visible={Show}>

                  <View>
                  
                    <FlatList
                      data={data}
                      keyExtractor={({ id }, index) => id}
                      renderItem={({ item }) => (


                        <ScrollView>

                          <TouchableOpacity style={{}}  onPress={() => props.navigation.navigate("MatchDetails",{match_id: item.match_id, sportStatus: item.match_status,
                          team_a_short: item.team_a_short,
                          team_b_short: item.team_b_short
                        })
                      }>

                            <View
                              style={{
                                backgroundColor: 'white',
                                borderBottomWidth: 1,
                                borderBottomColor: 'lightgray',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  margin: 10,
                                }}>
                                <Text>
                                  {item.match_date},
                                  {item.match_time}
                                </Text>
                                <Text style={{ color: 'red' }}>{item.match_status}</Text>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  margin: 10,
                                }}>
                                <View style={{ flexDirection: 'row' }}>
                                  <Image
                                    style={{ height: 20, width: 20 }}
                                    source={{ uri: item.team_a_img }}
                                  />
                                  <Text style={{ marginLeft: 5 }}>
                                    {item.team_a_short}
                                  </Text>
                                </View>

                                <View>
                                  <Image
                                    style={{ height: 20, width: 20 }}
                                    source={require('../../images/arroW.png')}
                                  />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                  <Text style={{ marginRight: 5 }}>
                                    {item.team_b_short}
                                  </Text>
                                  <Image
                                    style={{ height: 20, width: 20 }}
                                    source={{ uri: item.team_b_img }}
                                  />
                                </View>
                              </View>
                            </View>
                          </TouchableOpacity>

                        </ScrollView>
                      )}
                    />
                  </View>


                </Modal>
              </Portal>
            </>
          </View>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', marginTop: 20 }}
          >
          <Text></Text>
          </TouchableOpacity>
        </View>
        {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={false}> */}
          {/* <View style={{   */}
        {/* //   backgroundColor: theme&&theme.primary?theme.primary:null */}
          {/* backgroundColor: "green" */}

           {/* }}> */}
            {/* <Text style={{marginHorizontal:20,color:'black'}}>Account Setting</Text> */}

            <View style={{ height: '95%' }}>
              {props.route.params.sportStatus === 'Upcoming' ?
                <TabView
                  indicatorStyle={{ backgroundColor: 'white' }}
                  style={{ backgroundColor: 'white' }}
                  navigationState={{ index, routes: routesUpcomming }}
                  renderScene={SceneMap({

                    first: () => <Info {...props} />,

                    second: () => <PlayingXI {...props} />,

                    third: () => <Fancy {...props} />,
                    


                  })}
                  scrollEnable={true}
                  onIndexChange={setIndex}
                  initialLayout={{ width: Dimensions.get('window').width }}
                  renderTabBar={props => (
                    <TabBar
                      {...props}
                      style={{ backgroundColor: theme&&theme.primary?theme.primary:null }}
                      activeColor={'white'}
                      indicatorStyle={{ backgroundColor: 'white' }}
                      inactiveColor={'white'}
                    />
                  )}
                /> : null}

              {
                props.route.params.sportStatus === 'Live' ?
                  <TabView
                    indicatorStyle={{ backgroundColor: 'white' }}
                    style={{ backgroundColor: 'white' }}
                    navigationState={{ index, routes: routesLive }}
                    renderScene={SceneMap({

                      first: () => <Live {...props} />,
                      second: () => <Info {...props} />,
                      third: () => <ScoreCard {...props} />,
                      fourth: () => <Fancy {...props} />

                      // Fivth: () => <Vedio {...props} />,


                    })}
                    scrollEnable={true}
                    onIndexChange={setIndex}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    renderTabBar={props => (
                      <TabBar
                        {...props}
                        style={{ backgroundColor:theme&&theme.primary?theme.primary:null }}
                        activeColor={'white'}
                        indicatorStyle={{ backgroundColor: 'white' }}
                        inactiveColor={'white'}
                      />
                    )}
                  /> : null}

              {
                props.route.params.sportStatus === 'Finished'||props.route.params.sportStatus === 'Recent' ?
                  <TabView
                    indicatorStyle={{ backgroundColor: 'white' }}
                    style={{ backgroundColor: 'white' }}
                    navigationState={{ index, routes: routesFinished }}
                    renderScene={SceneMap({

                      first: () => <ScoreCard {...props} />,
                      second: () => <Info {...props} />,
                      third: () => <PlayingXI {...props} />,
                  


                    })}
                    scrollEnable={true}
                    onIndexChange={setIndex}
                    initialLayout={{ width: Dimensions.get('window').width }}
                    renderTabBar={props => (
                      <TabBar
                        {...props}
                        style={{ backgroundColor:theme&&theme.primary?theme.primary:null }}
                        activeColor={'white'}
                        indicatorStyle={{ backgroundColor: 'white' }}
                        inactiveColor={'white'}
                      />
                    )}
                  /> : null}

            </View>





          {/* </View> */}
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );

}

const mapStateToProps=(state)=> {
  // const { loggingIn } = state.authentication;
  const { theme,leng } = state;
  return {
    // users,
    // dashboard,
    theme,
    leng
  };
}


export default connect(mapStateToProps)(MatchDetails)







