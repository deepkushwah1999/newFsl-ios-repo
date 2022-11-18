// import React, {Component} from 'react';
// // import moment from 'moment';
// // import Clipboard from '@react-native-community/clipboard';
// import {connect} from 'react-redux';
// // import { CONST } from '../../_config';
// // import { dashboardActions } from '../../_actions';
// // import { userActions } from '../../_actions';
// // import { alertActions } from '../../_actions';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   Linking,
//   SafeAreaView,
//   Dimensions,
//   RefreshControl,
// } from 'react-native';
// // import { scaleRatio } from '../../helpers/index';
// import colors from '../../config/colors';
// // import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// // import { StackNavigator } from 'react-navigation';
// import {userActions} from '../../_actions';
// import {Loader} from '../../components/Loader';

// // import {
// //   LineChart,
// //   BarChart,
// //   PieChart,
// //   ProgressChart,
// //   ContributionGraph
// // } from 'react-native-chart-kit'

// // import HomeMatch from './HomeMatch';
// // import Upcoming from './Upcoming';
// // import Finished from './Finished';
// // import Ashes from '../Ashes/Ashes';
// // import Soccer from './Live';
// // import Tennis from './Upcoming';
// // import Live from './Live';
// // const screenWidth = Dimensions.get("window").width;

// const {width, height} = Dimensions.get('window');

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // data: [],
//       sportName: 'CRICKET',
//       matchType: 'ALL',
//       sportId: '4',
//       count: 0,
//       sportStatus: 'LIVE',
//     };
//   }

//   getRandomInt = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

//   componentDidMount() {
//     let reqData = {
//       sportId: this.state.sportId,
//     };
//     this.props.dispatch(userActions.HomeList());
//     this.props.dispatch(userActions.getAllAds());
//     // const intervalId = setInterval(() => {

//     //   this.setState(prevState => {
//     //     let { users } = this.props;
//     //     let { liveScore, finishedMatchesScore, upcomingMatchesScore, getAllAdsItems } = users;
//     //     // console.log("getAllAdsItemsgetAllAdsItemsgetAllAdsItemsgetAllAdsItems 111", getAllAdsItems);
//     //     let min = 0;
//     //     let tempAds = this.getRandomInt(0, getAllAdsItems.length - 1)
//     //     return {
//     //       count: tempAds,
//     //     };
//     //   });
//     // }, 5000);
//     // this.setState({ intervalId })
//     // this.interval = setInterval(() => this.tick(), 2000);
//   }

//   tick = () => {
//     if (this.state.matchType == 'ALL') {
//       let reqData = {
//         sportId: this.state.sportId,
//       };
//       this.props.dispatch(userActions.Livescore(reqData));
//     }
//   };

//   cricket = data => {
//     let temp1 = {
//       sportId: '4',
//     };
//     this.props.dispatch(userActions.Livescore(temp1));
//     this.setState({sportName: data});
//   };

//   setGameType = (sportName, sportId) => {
//     let temp2 = {
//       sportId: sportId,
//     };
//     this.props.dispatch(userActions.Livescore(temp2));
//     this.setState({sportName: sportName, sportId: sportId, matchType: 'LIVE'});
//   };

//   setGameTypeStatus = matchType => {

//     this.setState({matchType: matchType});
//   };



//   componentWillUnmount() {
//     clearInterval(this.state.intervalId);
//     clearInterval(this.interval);
//   }
  

//   render() {
//     let {users} = this.props;
//     let {liveScore, getAllAdsItems, HomeListData} = users;

//     return (
//       <SafeAreaView>
//         <>
//           <View style={{backgroundColor: 'darkred', height: '100%'}}>
//             <View style={{height:'100%', backgroundColor: 'lightgray'}}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'center',
//                   height: 55,
//                   backgroundColor: 'darkred',
//                   paddingVertical: 15,
//                 }}>
//                 <Text
//                   style={{
//                     alignSelf: 'center',
//                     color: 'white',
//                     
//                     fontSize: 18,
//                     marginLeft: 10,
//                   }}>
//                   MATCHES
//                 </Text>
//               </View>

//               <View
//                 style={{
//                   backgroundColor: 'darkred',
//                   height: 50,
//                   justifyContent: 'center',
//                 }}>
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     marginTop: 24,
//                     marginLeft: 10,
//                     marginRight: 10,
//                   }}>
//                   <TouchableOpacity
//                     style={{
//                       justifyContent: 'center',
//                       borderBottomColor:
//                         this.state.matchType == 'ALL' ? '#FFC700' : '',
//                       borderBottomWidth: this.state.matchType == 'ALL' ? 2 : 0,
//                     }}
//                     onPress={() => this.setGameTypeStatus('ALL')}>
//                     <Text
//                       style={{
//                         color:
//                           this.state.matchType == 'ALL' ? '#FFC700' : 'white',
//                         fontSize: 17,
//                         //fontFamily: 'Poppins-SemiBold',
//                         textAlign: 'center',
//                         alignSelf: 'center',
//                       }}>
//                       ALL
//                     </Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     style={{
//                       justifyContent: 'center',
//                       borderBottomColor:
//                         this.state.matchType == 'T20' ? '#FFC700' : 'white',
//                       borderBottomWidth: this.state.matchType == 'T20' ? 2 : 0,
//                     }}
//                     onPress={() => this.setGameTypeStatus('T20')}>
//                     <Text
//                       style={{
//                         color:
//                           this.state.matchType == 'T20' ? '#FFC700' : 'white',
//                         fontSize: 17,
//                         //fontFamily: 'Poppins-SemiBold',
//                         textAlign: 'center',
//                         alignSelf: 'center',
//                       }}>
//                       T-20
//                     </Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     style={{
//                       justifyContent: 'center',
//                       borderBottomColor:
//                         this.state.matchType == 'ODI' ? '#FFC700' : 'white',
//                       borderBottomWidth: this.state.matchType == 'ODI' ? 2 : 0,
//                     }}
//                     onPress={() => this.setGameTypeStatus('ODI')}>
//                     <Text
//                       style={{
//                         color:
//                           this.state.matchType == 'ODI' ? '#FFC700' : 'white',
//                         fontSize: 17,
//                         //fontFamily: 'Poppins-SemiBold',
//                         textAlign: 'center',
//                         alignSelf: 'center',
//                       }}>
//                       ODI
//                     </Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     style={{
//                       justifyContent: 'center',
//                       borderBottomColor:
//                         this.state.matchType == 'TEST' ? '#FFC700' : 'white',
//                       borderBottomWidth: this.state.matchType == 'TEST' ? 2 : 0,
//                     }}
//                     onPress={() => this.setGameTypeStatus('TEST')}>
//                     <Text
//                       style={{
//                         color:
//                           this.state.matchType == 'TEST' ? '#FFC700' : 'white',
//                         fontSize: 17,
//                         //fontFamily: 'Poppins-SemiBold',
//                         textAlign: 'center',
//                         alignSelf: 'center',
//                       }}>
//                       TEST
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>

//               {
//                 <View
//                   style={{
//                     backgroundColor: 'lightgray',
//                     flex: 1,
//                     paddingTop: 10,
//                     height: 10,
//                   }}>
//                   {users.loading ? (
//                     <Loader />
//                   ) : (
//                     <View>
//                       {this.state.matchType === 'ALL' ? (
//                         <ScrollView>
//                           {HomeListData &&
//                           HomeListData.data &&
//                           HomeListData.data.length > 0 ? (
//                             HomeListData.data.map((element, index) => (
//                               <>
//                                 <ScrollView>
//                                   <TouchableOpacity
//                                     onPress={() =>
//                                       this.props.navigation.navigate(
//                                         'MatchDetails',
//                                         {
//                                           match_id: element.match_id,
//                                           sportStatus: element.match_status,
//                                         },
//                                       )
//                                     }>
//                                     <View
//                                       style={{
//                                         alignSelf: 'center',
//                                         backgroundColor: 'white',
//                                         width: '95%',
//                                         marginBottom: 10,
//                                         borderRadius: 10,
//                                         shadowOffset: {width: 50, height: 50},
//                                         shadowColor: 'black',
//                                         shadowOpacity: 1,
//                                         elevation: 5,
//                                       }}>
//                                       <View
//                                         style={{
//                                           flexDirection: 'row',
//                                           justifyContent: 'space-between',
//                                           alignItems: 'center',
//                                           backgroundColor: 'white',
//                                           borderRadius: 10,
//                                           padding: 10,
//                                           borderBottomColor: '#e8e8e8',
//                                           borderBottomWidth: 1,
//                                         }}>
//                                         <View style={{width: '72%'}}>
//                                           <Text
//                                             style={{
//                                               color: 'darkred',
//                                               
//                                             }}>
//                                             {element.series}
//                                           </Text>
//                                           <View style={{}}>
//                                             <Text
//                                               style={{
//                                                 
//                                               }}>
//                                               {' '}
//                                               {element.match_date} {','}
//                                               {element.match_time}
//                                             </Text>
//                                           </View>
//                                         </View>
//                                         <View
//                                           style={{
//                                             backgroundColor: 'red',
//                                             flexDirection: 'row',
//                                             borderRadius: 6,
//                                             alignItems: 'center',
//                                             paddingVertical: 4,
//                                             paddingHorizontal: 10,
//                                             // width: '25%',
//                                           }}>
//                                           <View
//                                             style={{
//                                               width: 6,
//                                               height: 6,
//                                               backgroundColor: 'white',
//                                               borderRadius: 50,
//                                               marginRight: 6,
//                                             }}
//                                           />
//                                           <Text
//                                             style={{
//                                               color: '#fff',
//                                               fontSize: 12,
//                                               
//                                             }}>
//                                             {element.match_status}
//                                           </Text>
//                                         </View>
//                                       </View>
//                                       <View
//                                         style={{
//                                           padding: 14,
//                                           flexDirection: 'row',
//                                           alignItems: 'center',
//                                           justifyContent: 'space-between',
//                                         }}>
//                                         <View
//                                           style={{
//                                             flexDirection: 'row',
//                                             alignItems: 'center',
//                                           }}>
//                                           <View
//                                             style={{
//                                               backgroundColor: 'white',
//                                               borderRadius: 25,
//                                               elevation: 10,
//                                             }}>
//                                             <Image
//                                               source={{uri: element.team_a_img}}
//                                               style={{
//                                                 width: 50,
//                                                 height: 50,
//                                                 borderRadius: 25,
//                                                 backgroundColor: 'white',
//                                               }}
//                                             />
//                                           </View>
//                                           <View
//                                             style={{
//                                               paddingLeft: 10,
//                                               width: 60,
//                                             }}>
//                                             <Text
//                                               style={{
//                                                 fontSize: 12,
//                                                 color: 'darkred',
//                                                 //fontFamily: 'Poppins-SemiBold',
//                                               }}>
//                                               {element.team_a}
//                                             </Text>
//                                           </View>
//                                         </View>

//                                         <View style={{marginHorizontal: 10}}>
//                                           <Image
//                                             source={require('../../images/arroW.png')}
//                                             style={{
//                                               width: 20,
//                                               height: 20,
//                                             }}
//                                           />
//                                         </View>

//                                         <View
//                                           style={{
//                                             flexDirection: 'row',
//                                             alignItems: 'center',
//                                           }}>
//                                           <View
//                                             style={{
//                                               paddingRight: 10,
//                                               width: 60,
//                                             }}>
//                                             <Text
//                                               style={{
//                                                 fontSize: 12,
//                                                 color: 'darkred',
//                                                 //fontFamily: 'Poppins-SemiBold',
//                                               }}>
//                                               {element.team_b}
//                                             </Text>
//                                           </View>
//                                           <View
//                                             style={{
//                                               backgroundColor: 'red',
//                                               borderRadius: 25,
//                                               elevation: 10,
//                                             }}>
//                                             <Image
//                                               source={{uri: element.team_b_img}}
//                                               style={{
//                                                 width: 50,
//                                                 height: 50,
//                                                 borderRadius: 25,
//                                                 backgroundColor: 'white',
//                                               }}
//                                             />
//                                           </View>
//                                         </View>
//                                       </View>

//                                       <View
//                                         style={{
//                                           padding: 10,
//                                           borderTopWidth: 1,
//                                           borderColor: '#e8e8e8',
//                                           flexDirection: 'row',
//                                           justifyContent: 'space-between',
//                                         }}>
//                                         <Text
//                                           style={{
//                                             fontSize: 12,
//                                             color: '#E48400',
//                                             
//                                           }}>
//                                           Venue - {element.venue}
//                                         </Text>
//                                       </View>
//                                     </View>
//                                   </TouchableOpacity>
//                                 </ScrollView>
//                               </>
//                             ))
//                           ) : (
//                             <Text
//                               style={{
//                                 fontSize: 12,
//                                 color: 'darkred',
//                                 alignSelf: 'center',
//                               }}>
//                               No Record Found.
//                             </Text>
//                           )}
//                         </ScrollView>
//                       ) : (
//                         <ScrollView>
//                           {HomeListData &&
//                           HomeListData.data &&
//                           HomeListData.data.length > 0 ? (
//                             HomeListData.data
//                               .filter(
//                                 element =>
//                                   element.match_type === this.state.matchType,
//                               )
//                               .map((element, index) => (
//                                 <>
//                                   <ScrollView>
//                                     <TouchableOpacity
//                                       onPress={() =>
//                                         this.props.navigation.navigate(
//                                           'MatchDetails',
//                                           {
//                                             match_id: element.match_id,
//                                             sportStatus: element.match_status,
//                                           },
//                                         )
//                                       }>
//                                       <View
//                                         style={{
//                                           alignSelf: 'center',
//                                           backgroundColor: 'white',
//                                           width: '95%',
//                                           marginBottom: 10,
//                                           borderRadius: 10,
//                                           shadowOffset: {width: 50, height: 50},
//                                           shadowColor: 'black',
//                                           shadowOpacity: 1,
//                                           elevation: 5,
//                                         }}>
//                                         <View
//                                           style={{
//                                             flexDirection: 'row',
//                                             justifyContent: 'space-between',
//                                             alignItems: 'center',
//                                             backgroundColor: 'white',
//                                             borderRadius: 10,
//                                             padding: 10,
//                                             borderBottomColor: '#e8e8e8',
//                                             borderBottomWidth: 1,
//                                           }}>
//                                           <View style={{width: '72%'}}>
//                                             <Text
//                                               style={{
//                                                 color: 'darkred',
//                                                 
//                                               }}>
//                                               {element.series}
//                                             </Text>
//                                             <View style={{}}>
//                                               <Text
//                                                 style={{
//                                                   
//                                                 }}>
//                                                 {' '}
//                                                 {element.match_date} {','}
//                                                 {element.match_time}
//                                               </Text>
//                                             </View>
//                                           </View>
//                                           <View
//                                             style={{
//                                               backgroundColor: 'red',
//                                               flexDirection: 'row',
//                                               borderRadius: 6,
//                                               alignItems: 'center',
//                                               paddingVertical: 4,
//                                               paddingHorizontal: 10,
//                                             }}>
//                                             <View
//                                               style={{
//                                                 width: 6,
//                                                 height: 6,
//                                                 backgroundColor: 'white',
//                                                 borderRadius: 50,
//                                                 marginRight: 6,
//                                               }}
//                                             />
//                                             <Text
//                                               style={{
//                                                 color: '#fff',
//                                                 fontSize: 12,
//                                                 
//                                               }}>
//                                               {element.match_status}
//                                             </Text>
//                                           </View>
//                                         </View>
//                                         <View
//                                           style={{
//                                             padding: 14,
//                                             flexDirection: 'row',
//                                             alignItems: 'center',
//                                             justifyContent: 'space-between',
//                                           }}>
//                                           <View
//                                             style={{
//                                               flexDirection: 'row',
//                                               alignItems: 'center',
//                                             }}>
//                                             <View
//                                               style={{
//                                                 backgroundColor: 'white',
//                                                 borderRadius: 25,
//                                                 elevation: 10,
//                                               }}>
//                                               <Image
//                                                 source={{
//                                                   uri: element.team_a_img,
//                                                 }}
//                                                 style={{
//                                                   width: 50,
//                                                   height: 50,
//                                                   borderRadius: 25,
//                                                   backgroundColor: 'white',
//                                                 }}
//                                               />
//                                             </View>
//                                             <View
//                                               style={{
//                                                 paddingLeft: 10,
//                                                 width: 60,
//                                               }}>
//                                               <Text
//                                                 style={{
//                                                   fontSize: 12,
//                                                   color: 'darkred',
//                                                   fontFamily:
//                                                     'Poppins-SemiBold',
//                                                 }}>
//                                                 {element.team_a}
//                                               </Text>
//                                             </View>
//                                           </View>

//                                           <View style={{marginHorizontal: 10}}>
//                                             <Image
//                                               source={require('../../images/arroW.png')}
//                                               style={{
//                                                 width: 20,
//                                                 height: 20,
//                                               }}
//                                             />
//                                           </View>

//                                           <View
//                                             style={{
//                                               flexDirection: 'row',
//                                               alignItems: 'center',
//                                             }}>
//                                             <View
//                                               style={{
//                                                 paddingRight: 10,
//                                                 width: 60,
//                                               }}>
//                                               <Text
//                                                 style={{
//                                                   fontSize: 12,
//                                                   color: 'darkred',
//                                                   fontFamily:
//                                                     'Poppins-SemiBold',
//                                                 }}>
//                                                 {element.team_b}
//                                               </Text>
//                                             </View>
//                                             <View
//                                               style={{
//                                                 backgroundColor: 'red',
//                                                 borderRadius: 25,
//                                                 elevation: 10,
//                                               }}>
//                                               <Image
//                                                 source={{
//                                                   uri: element.team_b_img,
//                                                 }}
//                                                 style={{
//                                                   width: 50,
//                                                   height: 50,
//                                                   borderRadius: 25,
//                                                   backgroundColor: 'white',
//                                                 }}
//                                               />
//                                             </View>
//                                           </View>
//                                         </View>

//                                         <View
//                                           style={{
//                                             padding: 10,
//                                             borderTopWidth: 1,
//                                             borderColor: '#e8e8e8',
//                                             flexDirection: 'row',
//                                             justifyContent: 'space-between',
//                                           }}>
//                                           <Text
//                                             style={{
//                                               fontSize: 12,
//                                               color: '#E48400',
//                                               
//                                             }}>
//                                             Venue - {element.venue}
//                                           </Text>
//                                         </View>
//                                       </View>
//                                     </TouchableOpacity>
//                                   </ScrollView>
//                                 </>
//                               ))
//                           ) : (
//                             <Text
//                               style={{
//                                 fontSize: 12,
//                                 color: 'darkred',
//                                 alignSelf: 'center',
//                               }}>
//                               No Recored Found.
//                             </Text>
//                           )}
//                         </ScrollView>
//                       )}
//                     </View>
//                   )}
//                 </View>
//               }
//             </View>

//             <View
//               style={{width: '100%', alignSelf: 'center', marginBottom: 50}}>
//               {getAllAdsItems && getAllAdsItems.length > 0 ? (
//                 <TouchableOpacity
//                   onPress={() => {
//                     Linking.openURL(getAllAdsItems[this.state.count].url);
//                   }}
//                   style={{
//                     alignSelf: 'center',
//                     justifyContent: 'center',
//                     alignContent: 'center',
//                     alignItems: 'center',
//                   }}>
//                   <View style={{alignItems: 'center'}}>
//                     <Image
//                       style={{
//                         width: width,
//                         height: 60,
//                         resizeMode: 'cover',
//                       }}
//                       source={{
//                         uri: getAllAdsItems[this.state.count].imageLinkUrl,
//                       }}
//                     />
//                   </View>
//                 </TouchableOpacity>
//               ) : null}
//             </View>
//           </View>
//         </>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   screen: {
//     backgroundColor: colors.light,
//     padding: 6,
//   },
//   itemContainer: {
//     marginRight: 16,
//     marginLeft: 6,
//   },
//   item: {
//     flex: 1,
//     margin: 3,
//     backgroundColor: 'lightblue',
//   },
// });

// function mapStateToProps(state) {
//   const {loggingIn} = state.authentication;
//   const {users, dashboard} = state;
//   return {
//     loggingIn,
//     users,
//     dashboard,
//   };
// }

// export default connect(mapStateToProps)(Home);
