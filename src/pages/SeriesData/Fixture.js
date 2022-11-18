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
import { userActions } from '../../_actions';



const { width, height } = Dimensions.get('window');

class Fixture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      sportName: 'CRICKET',
      matchType: 'ALL',
      sportId: '4',
      count: 0,
      sportStatus: 'LIVE',
    };
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  componentDidMount() {
    let temp = {
      series_id: this.props.route.params.series_id,
    };
    this.props.dispatch(userActions.SeriesListDATA(temp));
    this.props.dispatch(userActions.pointsTableDATA(temp));
  }


  cricket = data => {
    let temp1 = {
      sportId: '4',
    };
    this.props.dispatch(userActions.Livescore(temp1));
    this.setState({ sportName: data });
  };

  setGameType = (sportName, sportId) => {
    let temp2 = {
      sportId: sportId,
    };
    this.props.dispatch(userActions.Livescore(temp2));
    this.setState({
      sportName: sportName,
      sportId: sportId,
      sportStatus: 'LIVE',
    });
  };

  setGameTypeStatus = matchType => {

    this.setState({ matchType: matchType });
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    clearInterval(this.interval);
  }

  render() {
    let { users, theme } = this.props;
    let {
      getAllAdsItems,
      SeriesListData,
      pointsTableData,
    } = users;

    return (
      <SafeAreaView>


        <View style={{ backgroundColor: theme && theme.primary ? theme.primary : null, height: '100%' }}>
          <View style={{ height: height - 120, backgroundColor: theme && theme.secondary ? theme.secondary : null }}>

            {this.state.matchType == 'ALL' ? (
              <ScrollView>
                {SeriesListData && SeriesListData.data.length > 0 ? (
                  SeriesListData.data.map((element, index) => (
                    <View>

                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('MatchDetails', {
                            match_id: element.match_id,
                            sportStatus: 'Upcoming',
                            team_a_short: element.team_a_short,
                            team_b_short: element.team_b_short

                          })
                        }>
                        <View
                          style={{
                            alignSelf: 'center',
                            backgroundColor: 'white',
                            width: '95%',
                            marginVertical: 10,
                            borderRadius: 10,
                            // shadowOffset: { width: 50, height: 50 },
                            // shadowColor: 'black',
                            shadowOpacity: 1,
                            elevation: 5,
                            alignSelf: 'center',
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              backgroundColor: 'white',
                              borderRadius: 10,
                            }}>

                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: 10,
                              borderBottomColor: '#e8e8e8',
                              borderBottomWidth: 1,
                            }}>
                            <View style={{}}>

                              <Text style={{ marginLeft: 5 }}>
                                {element.match_date} {`,`}
                                {element.match_time}
                              </Text>


                              <Text
                                style={{
                                  fontSize: 12,
                                  marginLeft: 5,
                                  color: '#E48400',
                                }}>
                                {element.matchs}{' '}
                              </Text>
                            </View>

                            <View
                              style={{
                                backgroundColor: 'green',
                                flexDirection: 'row',
                                borderRadius: 4,
                                alignItems: 'center',
                                paddingVertical: 4,
                                paddingHorizontal: 6,
                              }}>
                              <Text
                                style={{
                                  color: '#fff',
                                  fontSize: 10,
                                  
                                }}>
                                Upcoming
                              </Text>
                            </View>
                          </View>

                          <View
                            style={{
                              paddingHorizontal: 10,
                              paddingVertical: 16,
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
                                  }}></Image>
                              </View>
                              <View style={{ paddingLeft: 10, width: 60 }}>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: 'darkred',
                                    fontWeight: 'bold',
                                  }}>
                                  {element.team_a}
                                </Text>
                              </View>
                            </View>

                            <View style={{ marginHorizontal: 10 }}>
                              <Image
                                source={require('../../images/arroW.png')}
                                style={{ width: 20, height: 20 }}></Image>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              <View style={{ paddingRight: 10, width: 60 }}>
                                <Text
                                  style={{
                                    fontSize: 12,
                                    color: 'darkred',
                                    fontWeight: 'bold',
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
                                  }}></Image>
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
                            <Text style={{ fontSize: 12, color: '#E48400' }}>
                              Venue- {element.venue}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>

                    </View>
                  ))
                ) : (
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'darkred',
                      alignSelf: 'center',
                    }}>
                    No Recored Found.
                  </Text>
                )}
              </ScrollView>
            ) : null}

            <View
              style={{ width: '100%', alignSelf: 'center', marginBottom: 70 }}>
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
                        width: width - 10,
                        height: 80,
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
  const { users, dashboard, theme } = state;
  return {
    loggingIn,
    users,
    dashboard,
    theme
  };
}

export default connect(mapStateToProps)(Fixture);
