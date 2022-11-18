import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
  GifImage
} from 'react-native';
import colors from '../../config/colors';
import { userActions } from '../../_actions';
import Tts from 'react-native-tts';
import RenderHtml from 'react-native-render-html';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('window');

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListenAudio: false,
      currentGameType: 'INFO',
      squadTeam: 'TEAMA',




      count: 0,
      cs: {},
      homeData: {},
      show: false,
    };

  }



  async componentDidMount() {
    let temp = {
      match_id: this.props.route.params.match_id,

    };

    this.props.dispatch(userActions.matchInfo(temp));

  }








  onClickButton(data) {

    this.setState({ currentGameType: data });

  }



  render() {
    let { users, theme, leng } = this.props;
    let {
      matchItems,
      odds,
      fancy,
      scoreCard,
      squad,
      matchInfo,
      fancyList,
      getAllAdsItems,
      HomeListData,
    } = users;

    const { show } = this.state;
    const containerStyle = {
      width: '70%',
      height: '50%',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'lightgray',
      position: 'absolute',
      top: 20,
      alignSelf: 'center',
    };

    return (
      // <SafeAreaView>
        <>
          <View
            style={{ height: '100%', width: '100%', backgroundColor: theme && theme.primary ? theme.primary : null }}>

            <ScrollView>
              {

                this.state.currentGameType == 'INFO' ? (
                  <>
                    {matchInfo ? (
                      <>
                        <View style={{ backgroundColor: theme && theme.secondary ? theme.secondary : null }}>
                          <View
                            style={{
                              marginHorizontal: 20,
                              marginTop: 20,
                              flexDirection: 'row',
                            }}>
                            <View style={{ width: '45%', flexDirection: 'row' }}>
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
                                  source={{ uri: matchInfo.team_a_img }}
                                />
                              </View>
                              <Text style={{ marginLeft: 10, marginTop: 25 }}>
                                {matchInfo.team_a_short}
                              </Text>
                            </View>
                            <View style={{ width: '10%' }}>
                              <Text style={{ marginTop: 15, fontSize: 25 }}>
                                ⇌
                              </Text>
                            </View>
                            <View
                              style={{
                                width: '45%',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                              }}>
                              <Text style={{ marginRight: 10, marginTop: 25 }}>
                                {matchInfo.team_b_short}
                              </Text>
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
                                  source={{ uri: matchInfo.team_b_img }}
                                />
                              </View>
                            </View>
                          </View>
                          <View
                            style={{
                              marginHorizontal: 10,
                              padding: 10,
                              backgroundColor: theme && theme.primary ? theme.primary : null,
                              borderRadius: 10,
                              marginTop: 15,
                              justifyContent: 'center',
                            }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}>
                              {leng.theme == "en" ? "Match Status" : "मैच स्टेटस "}
                            </Text>
                          </View>

                          <View
                            style={{
                              marginHorizontal: 10,
                              backgroundColor: theme && theme.thirdback ? theme.thirdback : null,
                              marginTop: 15,
                              borderRadius: 10,
                              borderWidth: 0.5
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                paddingVertical: 5,
                                marginHorizontal: 20,
                                marginTop: 10,
                              }}>
                              <Text style={{ fontWeight: '600' }}>{leng.theme == "en" ? "Score" : "स्कोर"}: </Text>
                              <Text style={{ marginLeft: 40, width: '80%' }}>
                                {matchInfo.series}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                paddingVertical: 5,
                                marginHorizontal: 20,
                              }}>
                              <Text> {leng.theme == "en" ? "Match " : "मैच  "}: </Text>
                              <Text
                                style={{ marginLeft: 40, width: '75%' }}
                                numberOfLines={5}>
                                {matchInfo.team_a} VS {matchInfo.team_b},{' '}
                                {matchInfo.matchs}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                paddingVertical: 5,
                                marginHorizontal: 20,
                              }}>
                              <Text> {leng.theme == "en" ? "Date" : "दिनांक"}: </Text>
                              <Text style={{ marginLeft: 50 }}>
                                {matchInfo.match_date}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                paddingVertical: 5,
                                marginHorizontal: 20,
                              }}>
                              <Text>{leng.theme == "en" ? "Time" : "समय"}: </Text>
                              <Text style={{ marginLeft: 50 }}>
                                {matchInfo.match_time}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                paddingVertical: 5,
                                marginHorizontal: 20,
                              }}>
                              <Text>{leng.theme == "en" ? "Venus" : "वीनस"}: </Text>
                              <Text
                                style={{ marginLeft: 40, width: '80%' }}
                                numberOfLines={3}>
                                {matchInfo.venue}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                paddingVertical: 5,
                                marginHorizontal: 20,
                                marginBottom: 15,
                              }}>
                              <Text>{leng.theme == "en" ? "Toss" : "टॉस "}: </Text>
                              <Text
                                style={{ marginLeft: 40, width: '80%' }}
                                numberOfLines={3}>
                                {matchInfo.toss}
                              </Text>
                            </View>
                          </View>

                          <View
                            style={{
                              marginHorizontal: 10,
                              borderRadius: 10,
                              backgroundColor: theme && theme.thirdback ? theme.thirdback : null,
                              marginTop: 20,
                              marginBottom: 50,
                              borderWidth: 0.5
                            }}>
                            <View
                              style={{
                                backgroundColor: theme && theme.primary ? theme.primary : null,
                                borderRadius: 10,
                              }}>
                              <Text
                                style={{
                                  marginLeft: 15,
                                  marginVertical: 10,
                                  color: 'white',
                                }}>
                                {leng.theme == "en" ? "Squads" : "स्क्वाड्स"}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10,
                                marginHorizontal: 15,
                              }}>
                              <Text>{matchInfo.team_a}</Text>
                              <Image
                                source={require('../../Statics/img/Home/right.png')}
                                style={{ height: 20, width: 20 }}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginVertical: 10,
                                marginHorizontal: 15,
                              }}>
                              <Text>{matchInfo.team_b}</Text>
                              <Image
                                source={require('../../Statics/img/Home/right.png')}
                                style={{ height: 20, width: 20 }}
                              />
                            </View>
                          </View>

                        </View>
                      </>
                    ) : null}
                  </>
                ) : null}

  {/* 
                  <Image
                    source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif' }}
                    style={{ width: 100, height: 100 }}
                  /> */}



            </ScrollView>
            <View style={{ marginTop: 20 }}>

            </View>

          </View>
        </>
      // </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard, theme, leng } = state;
  return {
    loggingIn,
    users,
    dashboard,
    theme,
    leng
  };
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
export default connect(mapStateToProps)(Info);
