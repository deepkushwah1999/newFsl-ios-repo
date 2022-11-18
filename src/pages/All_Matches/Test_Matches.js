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
  ActivityIndicator
} from 'react-native';

import colors from '../../config/colors';


const { width, height } = Dimensions.get('window');

class Test_Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {


      matchType: 'Test',
      matches: "Recent",

      count: 0,

    };
  }







  render() {
    let { users, theme, leng } = this.props;
    let { liveScore, getAllAdsItems, recentdata } = users;

    return (
      <SafeAreaView>
        <>
          <View style={{ backgroundColor: theme && theme.primary ? theme.primary : null, height: '100%' }}>
            <View style={{ height: '92.99%', backgroundColor: 'lightgray' }}>


              <View
                style={{
                  backgroundColor: theme && theme.secondary ? theme.secondary : null,
                  height: '100%'
                }}>

                {recentdata && recentdata.data ?



                  <ScrollView>
                    <>
                      {recentdata &&
                        recentdata.data &&
                        recentdata.data.length > 0 &&
                        recentdata.data.filter((elementTemp) => (elementTemp.match_type === "Test")).length > 0
                        ?
                        recentdata.data.filter((elementTemp) => (elementTemp.match_type === "Test")).map((element, index) => (
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
                                  elevation: 5,
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



                                  <View
                                    style={{
                                      backgroundColor: 'red',
                                      flexDirection: 'row',
                                      borderRadius: 6,
                                      alignItems: 'center',
                                      paddingVertical: 4,
                                      paddingHorizontal: 10,

                                    }}>
                                    <View
                                      style={{
                                        width: 6,
                                        height: 6,
                                        backgroundColor: 'white',
                                        borderRadius: 50,
                                        marginRight: 6,
                                      }}
                                    />
                                    <Text
                                      style={{
                                        color: '#fff',
                                        fontSize: 12,
                                        
                                      }}>
                                      {element.match_type}
                                    </Text>
                                  </View>







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
                        :
                        (
                          <>
                            <Image source={require('../../images/matches.png')} style={{ marginTop: 25, alignSelf: 'center', height: 180, width: 180, resizeMode: 'stretch' }} />
                            <Text style={{ color: 'darkred', textAlign: 'center', fontSize: 18 }}>{leng.theme == "en" ? "No Match away!" : " मैच नॉट अवे "}</Text>
                          </>

                        )

                      }

                    </>
                    <View style={{ marginTop: 120 }}>
                    </View>
                  </ScrollView>
                  :
                  <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color="red" />
                  </View>



                }
              </View>

              <View>

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
  return {
    loggingIn,
    users,
    dashboard,
    theme, leng
  };
}

export default connect(mapStateToProps)(Test_Matches);
