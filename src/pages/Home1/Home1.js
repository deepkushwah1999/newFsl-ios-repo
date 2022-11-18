import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Linking,
  SafeAreaView,
  Dimensions,
  RefreshControl,
} from 'react-native';
import colors from '../../config/colors';
import { userActions, themeActions, languageActions } from '../../_actions';
import AsyncStorage from '@react-native-community/async-storage';
import { Loader } from '../../components/Loader';
import lighttheam from '../../TheameCOlor/lighttheam';
import darktheam from '../../TheameCOlor/darktheam';



const { width, height } = Dimensions.get('window');

class Home1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],

      count: 0,
      sportStatus: 'LIVE',
      matchType: 'Upcoming',
      theamcolor: false,
    };

    try {


      const value = AsyncStorage.getItem('TheamColor');
      if (value !== null) {
        this.setState({ theamcolor: JSON.parse(value) });
      }
    } catch (error) {
    }

  }



  async componentDidMount() {


    let reqData = {
      sportId: this.state.sportId,
    };


    this.props.dispatch(userActions.Livescore(reqData));
    this.props.dispatch(userActions.getAllAds());






  }


  render() {
    let { users, theme, leng } = this.props;
    let { theamcolor } = this.state;
    let { liveScore, getAllAdsItems, HomeListData, } = users;

    // console.log("data is live right now::::::::111112222222",liveScore);
    return (
      <>
        <SafeAreaView>
          <View style={{ backgroundColor: theme && theme.primary ? theme.primary : null, height: '100%' }}>
            <View style={{ height: '100%', backgroundColor: theme && theme.secondary ? theme.secondary : null }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  height: 55,
                  backgroundColor: theme && theme.primary ? theme.primary : null,
                  paddingVertical: 15,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'white',
                    
                    fontSize: 17,
                    marginLeft: 10,
                  }}>
                  {leng.theme == "en" ? "LIVE MATCHES" : "लाइव मैचेस"}
                </Text>
              </View>



              {users.loading ? (
                <Loader />
              ) : (
                <>
                  <View
                    style={{
                      backgroundColor: theme && theme.secondary ? theme.secondary : null,
                      flex: 1,
                      paddingTop: 10,
                      height: 10,
                    }}>
                    <View>
                      <ScrollView>
                        {liveScore &&
                          liveScore.data &&
                          liveScore.data.length > 0 ? (
                          liveScore.data.map((element, index) => (
                            <>
                              {this.state.sportStatus === 'LIVE' ? (
                                <ScrollView>
                                  <TouchableOpacity
                                    onPress={() =>
                                      this.props.navigation.navigate(
                                        'MatchDetails',
                                        {
                                          match_id: element.match_id,
                                          sportStatus: element.match_status,
                                          team_a_short: element.team_a_short,
                                          team_b_short: element.team_b_short
                                        },
                                      )
                                    }
                                    style={{
                                      width: '95%',
                                      borderRadius: 15,
                                      backgroundColor: 'white',
                                      alignSelf: 'center',
                                      margin: 10,
                                      shadowOpacity: 1,
                                      elevation: 10
                                    }}>
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                      }}>
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                          padding: 10,
                                        }}>
                                        <Text
                                          style={{
                                            width: '82%',
                                            color: '#85080c',
                                            //fontFamily: 'Poppins-SemiBold',
                                            fontSize: 14,
                                          }}
                                          numberOfLines={2}>
                                          {element.series}
                                        </Text>
                                        <View
                                          style={{
                                            borderWidth: 0.5,
                                            width: '18%',
                                            backgroundColor: 'red',
                                            borderRadius: 4,
                                            height: 23,
                                          }}>
                                          <Text
                                            style={{
                                              color: 'white',
                                              //fontFamily: 'Poppins-SemiBold',
                                              fontSize: 13,
                                              marginLeft: 5,
                                              marginTop: 1,
                                            }}>
                                            ・{'Live'}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>

                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        marginLeft: 10,
                                        marginTop: -15,
                                        marginBottom: 5,
                                      }}>
                                      <Text
                                        style={{
                                          color: 'black',
                                          
                                          fontSize: 12,
                                        }}>
                                        {element.match_time}
                                      </Text>
                                      <Text
                                        style={{
                                          color: 'black',
                                          marginLeft: 5,
                                          
                                          fontSize: 12,
                                        }}>
                                        {element.match_date}
                                      </Text>
                                    </View>
                                    <View
                                      style={{
                                        padding: 0.2,
                                        backgroundColor: 'lightgray',
                                      }}
                                    />

                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        marginHorizontal: 10,
                                        marginVertical: 5,
                                      }}>
                                      <View style={{ width: '45%' }}>
                                        <View style={{ flexDirection: 'row' }}>
                                          <View style={{}}>
                                            <View
                                              style={{
                                                backgroundColor: 'white',
                                                marginTop: 10,
                                                elevation: 20,
                                                borderRadius: 30,
                                              }}>
                                              <Image
                                                style={{
                                                  height: 60,
                                                  width: 60,
                                                  borderRadius: 30,
                                                  backgroundColor: 'white',
                                                  alignSelf: 'center',
                                                  resizeMode: 'cover',
                                                }}
                                                source={{
                                                  uri: element.team_a_img,
                                                }}
                                              />
                                            </View>

                                            <Text
                                              style={{
                                                color: '#85080c',
                                                //fontFamily: 'Poppins-SemiBold',
                                                alignSelf: 'center',
                                                padding: 5,
                                              }}>
                                              {element.team_a_short}{' '}
                                            </Text>
                                          </View>
                                          <View>
                                            {element.team_a_score &&
                                              Object.keys(element.team_a_score) &&
                                              Object.keys(element.team_a_score)
                                                .length > 0 ? (
                                              Object.keys(
                                                element.team_a_score,
                                              ).map(key => (
                                                <>
                                                  <Text
                                                    style={{
                                                      fontWeight: 'bold',
                                                      padding: 2,
                                                      fontSize: 14,
                                                      // fontFamily:
                                                      //   'Poppins-SemiBold',
                                                      color: '#85080c',
                                                      marginTop: 10,
                                                      marginLeft: 5,
                                                    }}>
                                                    {' '}
                                                    {element.team_a_score[key]
                                                      .score +
                                                      '-' +
                                                      element.team_a_score[key]
                                                        .wicket}{' '}
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      // fontFamily:
                                                      //   'Poppins-Medium',
                                                      alignContent: 'center',
                                                      fontSize: 12,
                                                      marginLeft: 5,
                                                    }}>
                                                    {' '}
                                                    {
                                                      element.team_a_score[key]
                                                        .over
                                                    }{' '}
                                                    Over
                                                  </Text>
                                                </>
                                              ))
                                            ) : (
                                              <Text
                                                style={{
                                                  color: 'white',
                                                  marginLeft: 15,
                                                  //fontFamily: 'Poppins-Bold',
                                                  alignContent: 'center',
                                                  padding: 5,
                                                }}>
                                                {'Yet to bat'}
                                              </Text>
                                            )}
                                          </View>
                                        </View>

                                      </View>

                                      <View
                                        style={{
                                          width: '10%',
                                          alignItems: 'center',
                                        }}>
                                        <Text
                                          style={{
                                            fontSize: 27,
                                            marginTop: 10,
                                            //fontFamily: 'Poppins-Bold',
                                          }}>
                                          ⇆
                                        </Text>
                                      </View>

                                      <View style={{ width: '45%' }}>
                                        <View
                                          style={{
                                            flexDirection: 'row',
                                            justifyContent: 'flex-end',
                                          }}>
                                          <View>
                                            {element.team_b_score &&
                                              Object.keys(element.team_b_score) &&
                                              Object.keys(element.team_b_score)
                                                .length > 0 ? (
                                              Object.keys(
                                                element.team_b_score,
                                              ).map(key => (
                                                <>
                                                  <Text
                                                    style={{
                                                      // fontFamily:
                                                      //   'Poppins-SemiBold',
                                                      fontSize: 14,
                                                      color: '#85080c',
                                                      marginTop: 10,
                                                      marginRight: 5,
                                                    }}>
                                                    {element.team_b_score[key]
                                                      .score +
                                                      '-' +
                                                      element.team_b_score[key]
                                                        .wicket}
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      // fontFamily:
                                                      //   'Poppins-Medium',
                                                      fontSize: 12,
                                                      marginRight: 5,
                                                    }}>
                                                    {
                                                      element.team_b_score[key]
                                                        .over
                                                    }{' '}
                                                    Over{' '}
                                                  </Text>
                                                </>
                                              ))
                                            ) : (
                                              <Text
                                                style={{
                                                  color: 'white',
                                                  //fontFamily: 'Poppins-Bold',
                                                  padding: 5,
                                                }}>
                                                {element.team_b}{' '}
                                              </Text>
                                            )}
                                          </View>
                                          <View style={{}}>
                                            <View
                                              style={{
                                                backgroundColor: 'white',
                                                elevation: 10,
                                                marginTop: 10,
                                                borderRadius: 30,
                                              }}>
                                              <Image
                                                style={{
                                                  height: 60,
                                                  width: 60,
                                                  borderRadius: 30,
                                                  backgroundColor: 'white',
                                                  resizeMode: 'cover',
                                                  alignSelf: 'center',
                                                }}
                                                source={{
                                                  uri: element.team_b_img,
                                                }}
                                              />
                                            </View>
                                            <Text
                                              style={{
                                                color: '#85080c',
                                                //fontFamily: 'Poppins-Bold',
                                                alignSelf: 'center',
                                                padding: 5,
                                              }}>
                                              {element.team_b_short}
                                            </Text>
                                          </View>
                                        </View>


                                      </View>
                                    </View>
                                    <View
                                      style={{
                                        padding: 0.2,
                                        backgroundColor: 'lightgray',
                                        marginBottom: 5,
                                      }}
                                    />

                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        marginBottom: 5,
                                      }}>
                                      <View style={{}}>
                                        <Text
                                          style={{
                                            color: 'white',
                                            //fontFamily: 'Poppins-SemiBold',
                                            alignSelf: 'center',
                                            backgroundColor: '#DF1414',
                                            paddingHorizontal: 8,
                                            paddingVertical: 2,
                                            borderRadius: 5,
                                          }}>
                                          {element.min_rate}
                                        </Text>
                                      </View>
                                      <View style={{ marginRight: 15 }}>
                                        <Text
                                          style={{
                                            color: 'white',
                                            marginLeft: 10,
                                            //fontFamily: 'Poppins-SemiBold',
                                            alignSelf: 'center',
                                            backgroundColor: 'green',
                                            // backgroundColor: '#0FEE25',
                                            paddingHorizontal: 8,
                                            paddingVertical: 2,
                                            borderRadius: 5,
                                          }}>
                                          {element.max_rate}
                                        </Text>
                                      </View>
                                    </View>
                                  </TouchableOpacity>
                                </ScrollView>
                              ) : null}


                            </>
                          ))
                        ) :

                          (
                            <>
                              <Image source={require('../../images/matches.png')} style={{ marginTop: 25, alignSelf: 'center', height: 180, width: 180, resizeMode: 'stretch' }} />
                              <Text style={{ color: 'darkred', textAlign: 'center', fontSize: 18 }}>{leng.theme == "en" ? "Matches Not Live Yet!" : "  मैच अभी शुरू नहीं हुआ है"}</Text>
                            </>
                          )
                        }
                      </ScrollView>
                    </View>
                  </View>
                </>
              )}


              <View style={{ width: '100%', alignSelf: 'center', marginBottom: 49 }}>
                {getAllAdsItems && getAllAdsItems.length > 0 ? (
                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(getAllAdsItems[this.state.count].url);
                    }}
                    style={{
                      alignSelf: 'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                      <Image
                        style={{
                          width: width - 8,
                          height: 70,
                          resizeMode: 'stretch',
                        }}
                        source={{
                          uri: getAllAdsItems[this.state.count].imageLinkUrl,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>


          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 6,
  },
  itemContainer: {
    marginRight: 16,
    marginLeft: 6,
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'lightblue',
  },
});

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard, theme, leng } = state;
  // const { user } = theme;

  return {
    loggingIn,
    users,
    dashboard,
    theme,
    leng
  };
}

export default connect(mapStateToProps)(Home1);
