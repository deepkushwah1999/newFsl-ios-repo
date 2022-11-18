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
} from 'react-native';
import colors from '../../config/colors';
import { userActions } from '../../_actions';
import Tts from 'react-native-tts';
import RenderHtml from 'react-native-render-html';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal, Portal } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, height } = Dimensions.get('window');


const ENDPOINT = "https://socket.fastline.one";

class ScoreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListenAudio: false,
      currentGameType: 'SCORECARD',
      // currentGameType: this.props.route.params.sportStatus === "LIVE" ? "LIVE" : "",
      squadTeam: 'TEAMA',
      voices: [],
      ttsStatus: 'initiliazing',
      selectedVoice: 'ur-pk-x-cfn-local',
      speechRate: 0.5,
      speechPitch: 1,
      teamAScore: false,
      teamBScore: false,
      count: 0,
      cs: {},
      homeData: {},
      show: false,
    };


  }

  async componentDidMount() {
    let temp = {
      match_id: this.props.route.params.match_id,
      // match_id: 1245
    };
    this.props.dispatch(userActions.getScoreAPI(temp));

    this.props.dispatch(userActions.matchInfo(temp));



  }


  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.state.intervalId);
  }


  render() {
    let { users, theme, leng } = this.props;
    let {

      scoreCard,
      matchInfo

    } = users;



    // console.log("scorecarddatdsjshdsdsud23222222222222222222222222222", scoreCard);
    // console.log("matchInfomatchInfomatchInfomatchInfomatchInfo", matchInfo);

    const { show, teamAScore, teamBScore } = this.state;


    return (
      // <SafeAreaView>
        <ScrollView>
          <View style={{ height: '100%', width: '100%', backgroundColor: theme && theme.primary ? theme.primary : null }}>

            <ScrollView>


              {this.state.currentGameType == 'SCORECARD' ? (
                <>
                  {scoreCard && scoreCard.scorecard ? (
                    <View style={{ backgroundColor: theme && theme.secondary ? theme.secondary : null }}>
                      <>
                        {/* 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888 */}


                        <View
                          style={{
                            width: '95%',
                            borderRadius: 10,
                            backgroundColor: theme && theme.secondary ? theme.secondary : null,
                            alignSelf: 'center',
                            marginTop: 10,
                            padding: 10,
                            alignContent: 'center',
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                              alignItems: 'center',
                              marginTop: 10,
                              paddingBottom: 10,
                              paddingLeft: 10,
                            }}>
                            <View
                              style={{
                                // justifyContent: 'center',
                                width: '45%',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                              }}>
                              <View
                                style={{
                                  justifyContent: 'center',
                                  flexDirection: 'row',
                                }}>
                                <Image
                                  style={{
                                    height: 60,
                                    width: 60,
                                    borderRadius: 30,
                                    backgroundColor: 'white',
                                    alignSelf: 'center',
                                    // elevation: 10,
                                    borderWidth: 1,
                                    borderColor: 'lightgray',
                                  }}
                                  source={{ uri: matchInfo && matchInfo.team_a_img ? matchInfo.team_a_img : null }}
                                />
                                <Text
                                  style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    alignContent: 'center',
                                    textAlign: 'center',
                                    marginTop: 20,
                                    marginLeft: 10,
                                  }}>
                                  {matchInfo && matchInfo.team_a_short ? matchInfo.team_a_short : null}
                                </Text>
                              </View>

                              <View style={{ justifyContent: 'center', marginTop: -35 }}>
                        
                              </View>
                            </View>

                            <View
                              style={{
                                width: '20%',
                                marginBottom: 10,
                                marginTop: 10,
                                marginHorizontal: 20,
                                justifyContent: 'center',
                                alignSelf: 'center',
                              }}>
                              <Text
                                style={{
                                  marginVertical: 5,
                                  alignSelf: 'center',
                                  height: 20,
                                  width: 20,
                                  borderRadius: 15,
                                  textAlign: 'center',
                                  fontSize: 15,
                                  paddingTop: 3,
                                }}>
                                vs
                              </Text>
                            </View>

                            <View
                              style={{
                                justifyContent: 'center',
                                width: '45%',
                                paddingRight: 10,
                              }}>
                              <View
                                style={{
                                  justifyContent: 'center',
                                  flexDirection: 'row',
                                }}>
                                <Text
                                  style={{
                                    color: 'black',
                                    fontWeight: 'bold',
                                    
                                    alignContent: 'center',
                                    textAlign: 'center',
                                    marginTop: 20,
                                    marginRight: 10,
                                  }}>
                                  {matchInfo && matchInfo.team_b_short ? matchInfo.team_b_short : null}

                                </Text>
                                <Image
                                  style={{
                                    height: 60,
                                    width: 60,
                                    borderRadius: 30,
                                    backgroundColor: 'white',
                                    alignSelf: 'center',
                                    // elevation: 10,
                                    borderWidth: 1,
                                    borderColor: 'lightgray',
                                  }}
                                  source={{ uri: matchInfo && matchInfo.team_b_img ? matchInfo.team_b_img : null }}
                                />
                              </View>

                              <View style={{ justifyContent: 'center', marginTop: -35 }}>
                       

                                <View style={{ justifyContent: 'center' }}>
                                  <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold', alignSelf: 'center' }}>
                                    {scoreCard && scoreCard[2] && scoreCard[2].team && scoreCard[2].team.score ? scoreCard[2].team.score : null} </Text>
                                  <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>
                                    {scoreCard && scoreCard[2] && scoreCard[2].team && scoreCard[2].team.over ? scoreCard[2].team.over : null}</Text>
                                </View>

                              </View>
                            </View>
                          </View>
                        </View>

                        {scoreCard && scoreCard.scorecard && scoreCard.scorecard[1] ?
                          <>

                            {teamAScore ?
                              <TouchableOpacity
                                style={{
                                  marginHorizontal: 10,
                                  marginVertical: 10,
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  backgroundColor: theme && theme.primary ? theme.primary : null,
                                  padding: 10,
                                  borderRadius: 10,
                                }} onPress={() => this.setState({ teamAScore: false })}>
                                <Text style={{ color: 'white' }}>
                                  {scoreCard.scorecard && scoreCard.scorecard[1] && scoreCard.scorecard[1].team && scoreCard.scorecard[1].team.short_name ? scoreCard.scorecard[1].team.short_name : null}

                                </Text>
                                <Text style={{ color: 'white' }}>
                                  {scoreCard.scorecard && scoreCard.scorecard[1] && scoreCard.scorecard[1].team && scoreCard.scorecard[1].team.score ? scoreCard.scorecard[1].team.score : null}
                                  ({scoreCard.scorecard && scoreCard.scorecard[1] && scoreCard.scorecard[1].team && scoreCard.scorecard[1].team.over ? scoreCard.scorecard[1].team.over : null})
                                </Text>
                              </TouchableOpacity>
                              :
                              <>
                                <TouchableOpacity
                                  style={{
                                    marginHorizontal: 10,
                                    marginVertical: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: theme && theme.primary ? theme.primary : null,
                                    padding: 10,
                                    borderRadius: 10,
                                  }} onPress={() => this.setState({ teamAScore: true })}>
                                  <Text style={{ color: 'white' }}>
                                    {scoreCard.scorecard && scoreCard.scorecard[1] && scoreCard.scorecard[1].team && scoreCard.scorecard[1].team.short_name ? scoreCard.scorecard[1].team.short_name : null}

                                  </Text>
                                  <Text style={{ color: 'white' }}>
                                    {scoreCard.scorecard && scoreCard.scorecard[1] && scoreCard.scorecard[1].team && scoreCard.scorecard[1].team.score ? scoreCard.scorecard[1].team.score : null}
                                    ({scoreCard.scorecard && scoreCard.scorecard[1] && scoreCard.scorecard[1].team && scoreCard.scorecard[1].team.over ? scoreCard.scorecard[1].team.over : null})
                                  </Text>
                                </TouchableOpacity>

                                <View
                                  style={{
                                    backgroundColor: theme && theme.secondary ? theme.secondary : null,
                                    margin: 10,
                                    borderRadius: 5,
                                  }}>

                                  {/* batsman */}
                                  <View
                                    style={{
                                      width: '95%',
                                      borderRadius: 10,
                                      backgroundColor: theme && theme.thirdback ? theme.thirdback : null,
                                      alignSelf: 'center',
                                      marginBottom: 10,
                                    }}>

                                    <TouchableOpacity
                                      style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 10,
                                        backgroundColor: '#d4d4d8',
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                      }}>
                                      <Text
                                        style={{
                                          color: 'black',
                                          fontWeight: 'bold',
                                          marginRight: 20,
                                          width: '33%',
                                        }}>
                                        Player :
                                      </Text>
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                          alignSelf: 'center',
                                          width: '60%',
                                        }}>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: '25%',
                                            alignSelf: 'center',
                                          }}>
                                          R(B)
                                        </Text>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: '15%',
                                            alignSelf: 'center',
                                          }}>
                                          4s
                                        </Text>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: '15%',
                                            alignSelf: 'center',
                                          }}>
                                          6s
                                        </Text>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: '20%',
                                            alignSelf: 'center',
                                          }}>
                                          SR
                                        </Text>
                                      </View>
                                    </TouchableOpacity>

                                    {
                                      scoreCard && scoreCard.scorecard && scoreCard.scorecard[1] && scoreCard.scorecard[1].batsman && scoreCard.scorecard[1].batsman.length > 0 ?

                                        scoreCard.scorecard[1].batsman.map((element, index) => (

                                          <>
                                            {/* render data */}

                                            <View
                                              style={{
                                                flexDirection: 'row',
                                                justifyContent:
                                                  'space-between',
                                                padding: 10,
                                                borderBottomWidth: 1,
                                                borderColor: 'black',
                                              }}>
                                              <Text
                                                style={{
                                                  color: 'black',
                                                  marginRight: 20,
                                                  fontSize: 13,
                                                  fontWeight: 'bold',
                                                  width: '33%',
                                                }}>
                                                {element.name}
                                              </Text>
                                              <View
                                                style={{
                                                  flexDirection: 'row',
                                                  justifyContent:
                                                    'space-between',
                                                  width: '60%',
                                                }}>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    width: '25%',
                                                    alignSelf: 'center',
                                                    fontSize: 13,
                                                  }}>
                                                  {element.run
                                                    ? element.run
                                                    : '0'}{' '}
                                                  (
                                                  {element.ball
                                                    ? element.ball
                                                    : '0'}
                                                  )
                                                </Text>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    width: '15%',
                                                    alignSelf: 'center',
                                                    fontSize: 13,
                                                  }}>
                                                  {element.fours
                                                    ? element.fours
                                                    : '0'}
                                                </Text>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    width: '15%',
                                                    alignSelf: 'center',
                                                    fontSize: 13,
                                                  }}>
                                                  {element.sixes
                                                    ? element.sixes
                                                    : '0'}
                                                </Text>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    width: '20%',
                                                    alignSelf: 'center',
                                                    fontSize: 13,
                                                  }}>
                                                  {element.strike_rate
                                                    ? element.strike_rate
                                                    : '0'}
                                                </Text>
                                              </View>
                                            </View>
                                          </>


                                        )) : <Text>Nothing</Text>

                                    }

                                  </View>


                                  {/* bowlers */}
                                  <View
                                    style={{
                                      width: '95%',
                                      borderRadius: 10,
                                      backgroundColor: theme && theme.thirdback ? theme.thirdback : null,
                                      alignSelf: 'center',
                                      marginBottom: 10,
                                      marginTop: 10,
                                    }}>
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 10,
                                        backgroundColor: '#d4d4d8',
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                      }}>
                                      <Text
                                        style={{
                                          color: 'black',
                                          fontWeight: 'bold',
                                          marginRight: 20,
                                          width: '30%',
                                        }}>
                                        Bowler :
                                      </Text>
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                          alignSelf: 'center',
                                          width: '65%',
                                        }}>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: 35,
                                            alignSelf: 'center',
                                          }}>
                                          O
                                        </Text>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: 35,
                                            alignSelf: 'center',
                                          }}>
                                          M
                                        </Text>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: 30,
                                            alignSelf: 'center',
                                          }}>
                                          R
                                        </Text>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: 30,
                                            alignSelf: 'center',
                                          }}>
                                          W
                                        </Text>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            width: 35,
                                            alignSelf: 'center',
                                          }}>
                                          Eco.
                                        </Text>
                                      </View>




                                    </View>



                                    {
                                      scoreCard && scoreCard.scorecard && scoreCard.scorecard[1] && scoreCard.scorecard[1].bolwer && scoreCard.scorecard[1].bolwer.length > 0 ?

                                        scoreCard.scorecard[1].bolwer.map((element, index) => (

                                          <>
                                            {/* render data */}
                                            <View
                                              style={{
                                                flexDirection: 'row',
                                                justifyContent:
                                                  'space-between',
                                                padding: 10,
                                                borderBottomWidth: 1,
                                                borderColor: 'black',
                                              }}>
                                              <Text
                                                style={{
                                                  color: 'black',
                                                  marginRight: 20,
                                                  fontSize: 13,
                                                  fontWeight: 'bold',
                                                  width: '30%',
                                                }}>
                                                {element.name}
                                              </Text>
                                              <View
                                                style={{
                                                  flexDirection: 'row',
                                                  justifyContent:
                                                    'space-between',
                                                  width: '65%',
                                                }}>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    width: 35,
                                                    alignSelf: 'center',
                                                    fontSize: 13,
                                                  }}>
                                                  {element.over
                                                    ? element.over
                                                    : '0'}
                                                </Text>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    width: 35,
                                                    alignSelf: 'center',
                                                    fontSize: 13,
                                                  }}>
                                                  {element.maiden
                                                    ? element.maiden
                                                    : '0'}
                                                </Text>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    width: 35,
                                                    alignSelf: 'center',
                                                    fontSize: 13,
                                                  }}>
                                                  {element.run
                                                    ? element.run
                                                    : '0'}
                                                </Text>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    width: 35,
                                                    alignSelf: 'center',
                                                    fontSize: 13,
                                                  }}>
                                                  {element.wicket
                                                    ? element.wicket
                                                    : '0'}
                                                </Text>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    width: 35,
                                                    alignSelf: 'center',
                                                    fontSize: 13,
                                                  }}>
                                                  {element.economy
                                                    ? element.economy
                                                    : '0'}
                                                </Text>
                                              </View>
                                            </View>
                                          </>


                                        )) : <Text>Nothing</Text>

                                    }







                                  </View>



                                </View>
                              </>


                            }
                          </>
                          : null
                        }



                        {scoreCard && scoreCard.scorecard && scoreCard.scorecard[2] ?


                          <>



                            {
                              teamBScore ?
                                <TouchableOpacity
                                  style={{
                                    marginHorizontal: 10,
                                    marginVertical: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    backgroundColor: theme && theme.primary ? theme.primary : null,
                                    padding: 10,
                                    borderRadius: 10,
                                  }} onPress={() => this.setState({ teamBScore: false })}>
                                  <Text style={{ color: 'white' }}>
                                    {scoreCard.scorecard && scoreCard.scorecard[2] && scoreCard.scorecard[2].team && scoreCard.scorecard[2].team.short_name ? scoreCard.scorecard[2].team.short_name : null}

                                  </Text>
                                  <Text style={{ color: 'white' }}>
                                    {scoreCard.scorecard && scoreCard.scorecard[2] && scoreCard.scorecard[2].team && scoreCard.scorecard[2].team.score ? scoreCard.scorecard[2].team.score : null}
                                    ({scoreCard.scorecard && scoreCard.scorecard[2] && scoreCard.scorecard[2].team && scoreCard.scorecard[2].team.over ? scoreCard.scorecard[2].team.over : null})
                                  </Text>
                                </TouchableOpacity>
                                :
                                <>
                                  <TouchableOpacity
                                    style={{
                                      marginHorizontal: 10,
                                      marginVertical: 10,
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      backgroundColor: theme && theme.primary ? theme.primary : null,
                                      padding: 10,
                                      borderRadius: 10,
                                    }} onPress={() => this.setState({ teamBScore: true })}>
                                    <Text style={{ color: 'white' }}>
                                      {scoreCard.scorecard && scoreCard.scorecard[2] && scoreCard.scorecard[2].team && scoreCard.scorecard[2].team.short_name ? scoreCard.scorecard[2].team.short_name : null}

                                    </Text>
                                    <Text style={{ color: 'white' }}>
                                      {scoreCard.scorecard && scoreCard.scorecard[2] && scoreCard.scorecard[2].team && scoreCard.scorecard[2].team.score ? scoreCard.scorecard[2].team.score : null}
                                      ({scoreCard.scorecard && scoreCard.scorecard[2] && scoreCard.scorecard[2].team && scoreCard.scorecard[2].team.over ? scoreCard.scorecard[2].team.over : null})
                                    </Text>
                                  </TouchableOpacity>

                                  <View
                                    style={{
                                      backgroundColor: theme && theme.secondary ? theme.secondary : null,
                                      margin: 10,
                                      borderRadius: 5,
                                    }}>

                                    {/* batsman */}
                                    <View
                                      style={{
                                        width: '95%',
                                        borderRadius: 10,
                                        backgroundColor: theme && theme.thirdback ? theme.thirdback : null,
                                        alignSelf: 'center',
                                        marginBottom: 10,
                                      }}>

                                      <TouchableOpacity
                                        style={{
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                          padding: 10,
                                          backgroundColor: '#d4d4d8',
                                          borderTopLeftRadius: 10,
                                          borderTopRightRadius: 10,
                                        }}>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            marginRight: 20,
                                            width: '33%',
                                          }}>
                                          Player :
                                        </Text>
                                        <View
                                          style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignSelf: 'center',
                                            width: '60%',
                                          }}>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontWeight: 'bold',
                                              width: '25%',
                                              alignSelf: 'center',
                                            }}>
                                            R(B)
                                          </Text>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontWeight: 'bold',
                                              width: '15%',
                                              alignSelf: 'center',
                                            }}>
                                            4s
                                          </Text>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontWeight: 'bold',
                                              width: '15%',
                                              alignSelf: 'center',
                                            }}>
                                            6s
                                          </Text>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontWeight: 'bold',
                                              width: '20%',
                                              alignSelf: 'center',
                                            }}>
                                            SR
                                          </Text>
                                        </View>
                                      </TouchableOpacity>

                                      {
                                        scoreCard && scoreCard.scorecard && scoreCard.scorecard[2] && scoreCard.scorecard[2].batsman && scoreCard.scorecard[2].batsman.length > 0 ?

                                          scoreCard.scorecard[2].batsman.map((element, index) => (

                                            <>
                                              {/* render data */}

                                              <View
                                                style={{
                                                  flexDirection: 'row',
                                                  justifyContent:
                                                    'space-between',
                                                  padding: 10,
                                                  borderBottomWidth: 1,
                                                  borderColor: 'black',
                                                }}>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    marginRight: 20,
                                                    fontSize: 13,
                                                    fontWeight: 'bold',
                                                    width: '33%',
                                                  }}>
                                                  {element.name}
                                                </Text>
                                                <View
                                                  style={{
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                      'space-between',
                                                    width: '60%',
                                                  }}>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      width: '25%',
                                                      alignSelf: 'center',
                                                      fontSize: 13,
                                                    }}>
                                                    {element.run
                                                      ? element.run
                                                      : '0'}{' '}
                                                    (
                                                    {element.ball
                                                      ? element.ball
                                                      : '0'}
                                                    )
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      width: '15%',
                                                      alignSelf: 'center',
                                                      fontSize: 13,
                                                    }}>
                                                    {element.fours
                                                      ? element.fours
                                                      : '0'}
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      width: '15%',
                                                      alignSelf: 'center',
                                                      fontSize: 13,
                                                    }}>
                                                    {element.sixes
                                                      ? element.sixes
                                                      : '0'}
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      width: '20%',
                                                      alignSelf: 'center',
                                                      fontSize: 13,
                                                    }}>
                                                    {element.strike_rate
                                                      ? element.strike_rate
                                                      : '0'}
                                                  </Text>
                                                </View>
                                              </View>
                                            </>


                                          )) : <Text>Nothing</Text>

                                      }

                                    </View>


                                    {/* bowlers */}
                                    <View
                                      style={{
                                        width: '95%',
                                        borderRadius: 10,
                                        backgroundColor: theme && theme.thirdback ? theme.thirdback : null,
                                        alignSelf: 'center',
                                        marginBottom: 10,
                                        marginTop: 10,
                                      }}>
                                      <View
                                        style={{
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                          padding: 10,
                                          backgroundColor: '#d4d4d8',
                                          borderTopLeftRadius: 10,
                                          borderTopRightRadius: 10,
                                        }}>
                                        <Text
                                          style={{
                                            color: 'black',
                                            fontWeight: 'bold',
                                            marginRight: 20,
                                            width: '30%',
                                          }}>
                                          Bowler :
                                        </Text>
                                        <View
                                          style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignSelf: 'center',
                                            width: '65%',
                                          }}>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontWeight: 'bold',
                                              width: 35,
                                              alignSelf: 'center',
                                            }}>
                                            O
                                          </Text>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontWeight: 'bold',
                                              width: 35,
                                              alignSelf: 'center',
                                            }}>
                                            M
                                          </Text>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontWeight: 'bold',
                                              width: 30,
                                              alignSelf: 'center',
                                            }}>
                                            R
                                          </Text>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontWeight: 'bold',
                                              width: 30,
                                              alignSelf: 'center',
                                            }}>
                                            W
                                          </Text>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontWeight: 'bold',
                                              width: 35,
                                              alignSelf: 'center',
                                            }}>
                                            Eco.
                                          </Text>
                                        </View>




                                      </View>



                                      {
                                        scoreCard && scoreCard.scorecard && scoreCard.scorecard[2] && scoreCard.scorecard[2].bolwer && scoreCard.scorecard[2].bolwer.length > 0 ?

                                          scoreCard.scorecard[2].bolwer.map((element, index) => (

                                            <>
                                              {/* render data */}
                                              <View
                                                style={{
                                                  flexDirection: 'row',
                                                  justifyContent:
                                                    'space-between',
                                                  padding: 10,
                                                  borderBottomWidth: 1,
                                                  borderColor: 'black',
                                                }}>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    marginRight: 20,
                                                    fontSize: 13,
                                                    fontWeight: 'bold',
                                                    width: '30%',
                                                  }}>
                                                  {element.name}
                                                </Text>
                                                <View
                                                  style={{
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                      'space-between',
                                                    width: '65%',
                                                  }}>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      width: 35,
                                                      alignSelf: 'center',
                                                      fontSize: 13,
                                                    }}>
                                                    {element.over
                                                      ? element.over
                                                      : '0'}
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      width: 35,
                                                      alignSelf: 'center',
                                                      fontSize: 13,
                                                    }}>
                                                    {element.maiden
                                                      ? element.maiden
                                                      : '0'}
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      width: 35,
                                                      alignSelf: 'center',
                                                      fontSize: 13,
                                                    }}>
                                                    {element.run
                                                      ? element.run
                                                      : '0'}
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      width: 35,
                                                      alignSelf: 'center',
                                                      fontSize: 13,
                                                    }}>
                                                    {element.wicket
                                                      ? element.wicket
                                                      : '0'}
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: 'black',
                                                      width: 35,
                                                      alignSelf: 'center',
                                                      fontSize: 13,
                                                    }}>
                                                    {element.economy
                                                      ? element.economy
                                                      : '0'}
                                                  </Text>
                                                </View>
                                              </View>
                                            </>


                                          )) : <Text>Nothing</Text>

                                      }







                                    </View>



                                  </View>


                                </>
                            }




                          </>
                          : null
                        }



                        <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
                          {scoreCard && scoreCard.result ? scoreCard.result : null}
                        </Text>






                      </>
                    </View>
                  ) : (
                    <>
                      <View style={{ flex: 1, backgroundColor: '#fff' }}>
                        <Image source={require('../../images/matches.png')} style={{ marginTop: 25, alignSelf: 'center', height: 180, width: 180, resizeMode: 'stretch' }} />
                       
                        <Text style={{ color: 'darkred', textAlign: 'center', fontSize: 18 }}>  {leng.theme == "en" ? "Match has't started yet!" :"  मैच अभी शुरू नहीं हुआ है  "} </Text>
                      </View>


                    </>
                  )}
                </>
              ) : null}

            </ScrollView>

          </View>
        </ScrollView >
      // </SafeAreaView >
   
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
    theme, leng
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
export default connect(mapStateToProps)(ScoreCard);
