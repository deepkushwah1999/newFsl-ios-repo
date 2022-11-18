import React, { Component } from 'react';
import { connect } from 'react-redux';

import {

  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,

  Linking,
  SafeAreaView,
  Dimensions,
  ActivityIndicator

} from 'react-native';
import { userActions, } from '../../_actions';


const { width, height } = Dimensions.get('window');

class All_Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {


      matchType: 'ALL',
      matches: "Recent",
      count: 0,

    };
  }

  componentDidMount() {


    let { matches } = this.props;

    if (matches.matches == "Recent") {
      this.props.dispatch(userActions.finishedMatches());

    }

    if (matches.matches == "Upcoming") {
      this.props.dispatch(userActions.upcomingMatches());

    }



    this.props.dispatch(userActions.getAllAds());





  }



  render() {
    let { users, theme, matches, leng } = this.props;
    let { getAllAdsItems, recentdata } = users;
    console.log("datatata::::::dsfsdfsdfsdfsd:::", matches);

    return (
      <SafeAreaView>
        <>
          <View style={{ backgroundColor: theme && theme.primary ? theme.primary : null, height: '100%' }}>
            <View style={{ height: '92.99%', backgroundColor: 'lightgray' }}>


              <View
                style={{
                  backgroundColor: theme && theme.secondary ? theme.secondary : null,
                  height: '97%'
                }}>

                {recentdata && recentdata.data ?

                  <ScrollView>
                    <>
                      {recentdata &&
                        recentdata.data &&
                        recentdata.data.length > 0
                        ?


                        recentdata.data.map((element, index) => (
                          <>

                            <TouchableOpacity
                              onPress={() =>
                                this.props.navigation.navigate(
                                  'MatchDetails',
                                  {
                                    match_id: element.match_id,
                                    sportStatus: this.state.matches,
                                    team_a_short: element.team_a_short,
                                    team_b_short: element.team_b_short
                                  },
                                )
                              }>
                              <View
                                style={{
                                  alignSelf: 'center',
                                  backgroundColor: 'white',
                                  width: '95%',
                                  marginTop: 20,
                                  borderRadius: 10,
                                  // shadowOffset: { width: 50, height: 50 },
                                  // shadowColor: 'black',
                                  shadowOpacity: 1,
                                  elevation: 2,
                                }}>
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    borderRadius: 10,
                                    padding: 10,
                                    borderBottomColor: '#e8e8e8',
                                    borderBottomWidth: 1,
                                  }}>
                                  <View style={{ width: '72%' }}>
                                    <Text
                                      style={{
                                        color: 'darkred',
                                        
                                      }}>
                                      {element.series}
                                    </Text>
                                    <View style={{}}>
                                      <Text
                                        style={{
                                          
                                        }}>
                                        {' '}
                                        {element.match_date} {','}
                                        {element.match_time}
                                      </Text>
                                    </View>
                                  </View>

                                  {
                                    element.match_type === "T20" ?
                                      (
                                        <View
                                          style={{
                                            backgroundColor: 'red',
                                            flexDirection: 'row',
                                            borderRadius: 6,
                                            alignItems: 'center',
                                            paddingVertical: 4,
                                            paddingHorizontal: 10,

                                          }}>

                                          <Text
                                            style={{
                                              color: '#fff',
                                              fontSize: 12,
                                              
                                            }}>
                                            {element.match_type}
                                          </Text>
                                        </View>
                                      ) :
                                      (
                                        <View
                                          style={{
                                            backgroundColor: 'green',
                                            flexDirection: 'row',
                                            borderRadius: 6,
                                            alignItems: 'center',
                                            paddingVertical: 4,
                                            paddingHorizontal: 10,

                                          }}>

                                          <Text
                                            style={{
                                              color: '#fff',
                                              fontSize: 12,
                                              
                                            }}>
                                            {element.match_type}
                                          </Text>
                                        </View>
                                      )
                                  }




                                </View>
                                <View
                                  style={{
                                    padding: 14,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  }}>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                    }}>
                                    <View
                                      style={{
                                        backgroundColor: 'white',
                                        borderRadius: 25,
                                        elevation: 10,
                                      }}>
                                      <Image
                                        source={{ uri: element.team_a_img }}
                                        style={{
                                          width: 50,
                                          height: 50,
                                          borderRadius: 25,
                                          backgroundColor: 'white',
                                        }}
                                      />
                                    </View>
                                    <View
                                      style={{
                                        paddingLeft: 10,
                                        width: 60,
                                      }}>
                                      <Text
                                        style={{
                                          fontSize: 12,
                                          color: 'darkred',
                                          //fontFamily: 'Poppins-SemiBold',
                                        }}>
                                        {element.team_a}
                                      </Text>
                                    </View>
                                  </View>

                                  <View style={{ marginHorizontal: 10 }}>
                                    <Image
                                      source={require('../../images/arroW.png')}
                                      style={{
                                        width: 20,
                                        height: 20,
                                      }}
                                    />
                                  </View>

                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                    }}>
                                    <View
                                      style={{
                                        paddingRight: 10,
                                        width: 60,
                                      }}>
                                      <Text
                                        style={{
                                          fontSize: 12,
                                          color: 'darkred',
                                          //fontFamily: 'Poppins-SemiBold',
                                        }}>
                                        {element.team_b}
                                      </Text>
                                    </View>
                                    <View
                                      style={{
                                        backgroundColor: 'red',
                                        borderRadius: 25,
                                        elevation: 10,
                                      }}>
                                      <Image
                                        source={{ uri: element.team_b_img }}
                                        style={{
                                          width: 50,
                                          height: 50,
                                          borderRadius: 25,
                                          backgroundColor: 'white',
                                        }}
                                      />
                                    </View>
                                  </View>
                                </View>

                                <View
                                  style={{
                                    padding: 10,
                                    borderTopWidth: 1,
                                    borderColor: '#e8e8e8',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: 12,
                                      color: '#E48400',
                                      
                                    }}>
                                    Venue - {element.venue}
                                  </Text>
                                </View>
                              </View>
                            </TouchableOpacity>

                          </>



                        ))
                        : null



                      }

                    </>

                    <View style={{ marginTop: 90 }}>
                    </View>

                  </ScrollView>
                  :
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="red" />
                  </View>

                }
              </View>



            </View>

            <View
              style={{ width: '100%', alignSelf: 'center', marginTop: -190 }}>
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
                  <View style={{ alignItems: 'center' }}>
                    <Image
                      style={{
                        width: width - 10,
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
        </>
      </SafeAreaView>
    );
  }
}


function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard, theme, matches, leng } = state;
  return {
    loggingIn,
    users,
    dashboard,
    theme,
    matches,
    leng

  };
}

export default connect(mapStateToProps)(All_Matches);
