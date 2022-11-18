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

class PlayingXI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isListenAudio: false,
      currentGameType: 'SQUADS',
      // currentGameType: this.props.route.params.sportStatus === "LIVE" ? "LIVE" : "",
      squadTeam: 'TEAMA',
      // voices: [],
      // ttsStatus: 'initiliazing',
      // selectedVoice: 'ur-pk-x-cfn-local',
      // speechRate: 0.5,
      // speechPitch: 1,
      // count: 0,
      // cs: {},
      // homeData: {},
      show: false,
    };

    // Tts.addEventListener('tts-start', event =>
    //   this.setState({ttsStatus: 'started'}),
    // );
    // Tts.addEventListener('tts-finish', event =>
    //   this.setState({ttsStatus: 'finished'}),
    // );
    // Tts.addEventListener('tts-cancel', event =>
    //   this.setState({ttsStatus: 'cancelled'}),
    // );
    // Tts.setDefaultRate(this.state.speechRate);
    // Tts.setDefaultPitch(this.state.speechPitch);
    // Tts.getInitStatus().then(this.initTts);
  }

  // setModalVisible = visible => {
  //   this.setState({show: visible});
  // };


  async componentDidMount() {
    let temp = {
      match_id: this.props.route.params.match_id,
      // match_id: 1245
    };
    // this.props.dispatch(userActions.HomeList());
    // this.props.dispatch(userActions.getLiveScoreByMatchId(temp));
    // this.props.dispatch(userActions.matchInfo(temp));
    this.props.dispatch(userActions.squadByMatchId(temp));
    // this.interval = setInterval(() => this.tick(), 1000);

    // const intervalId = setInterval(() => {
    //   this.setState(prevState => {
    //     let {users} = this.props;
    //     let {
    //       liveScore,
    //       finishedMatchesScore,
    //       upcomingMatchesScore,
    //       getAllAdsItems,
    //     } = users;
    //     // console.log("getAllAdsItemsgetAllAdsItemsgetAllAdsItemsgetAllAdsItems 111", getAllAdsItems);
    //     let min = 0;
    //     // let tempAds = this.getRandomInt(0, getAllAdsItems.length - 1)
    //     // return {
    //     //   count: tempAds,
    //     // };
    //   });
    // }, 5000);

    // this.setState({ intervalId })
  }

  // getRandomInt = (min, max) => {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };
  // tick = () => {
  //   // this.readText()
  //   let temp = {
  //     match_id: this.props.route.params.match_id,
  //   };
  // console.log("tick_________match_id", temp);
  // if (
  //   this.props.route.params.sportStatus === 'LIVE' ||
  //   this.state.currentGameType == 'LIVE' ||
  //   this.props.route.params.sportStatus === 'LIVE' ||
  //   this.state.currentGameType == ''
  // ) {
  //   this.props.dispatch(userActions.getLiveScoreByMatchId(temp));
  //   let {users} = this.props;
  //   let {matchItems} = users;
  //   if (matchItems) {
  //     this.readText(matchItems);
  //   }
  // }
  // if (this.state.currentGameType == 'SCORECARD') {
  //   this.props.dispatch(userActions.getScoreAPI(temp));
  //   // let { users } = this.props;
  //   // let { matchItems } = users;
  //   // if (matchItems) {
  //   //   this.readText(matchItems)
  //   // }
  // }
  //   if (this.state.currentGameType == 'FANCY') {
  //     this.props.dispatch(userActions.getFancyAPI(temp));
  //     // let { users } = this.props;
  //     // let { matchItems } = users;
  //     // if (matchItems) {
  //     //   this.readText(matchItems)
  //     // }
  //   }
  // };

  // onClickButton(data) {
  //   // console.log("datadatadata ", data);
  //   this.setState({currentGameType:'SQUADS'});
  //   // let temp = {
  //   //   match_id: this.props.route.params.match_id
  //   // }
  //   // this.props.dispatch(userActions.getLiveScoreByMatchId(temp));
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.state.intervalId);
  }

  // initTts = async () => {
  //   const voices = await Tts.voices();
  //   const availableVoices = voices
  //     .filter(v => !v.networkConnectionRequired && !v.notInstalled)
  //     .map(v => {
  //       return {id: v.id, name: v.name, language: v.language};
  //     });
  //   let selectedVoice = null;
  //   if (voices && voices.length > 0) {
  //     selectedVoice = 'ur-pk-x-cfn-local';
  //     try {
  //       await Tts.setDefaultLanguage(voices[5].language);
  //     } catch (err) {
  //       // My Samsung S9 has always this error: "Language is not supported"
  //       //console.log(`setDefaultLanguage error `, err);
  //     }
  //     await Tts.setDefaultVoice('ur-pk-x-cfn-local');
  //     this.setState({
  //       voices: availableVoices,
  //       selectedVoice,
  //       ttsStatus: 'initialized',
  //     });
  //   } else {
  //     this.setState({ttsStatus: 'initialized'});
  //   }
  // };

  // isListenAudioHandle = () => {
  //   this.setState({isListenAudio: !this.state.isListenAudio});
  // };
  // readText = async matchItems => {
  //   // console.log(matchItems);
  //   // console.log("stat ::: ", matchItems.first_circle);
  //   if (
  //     this.state.isListenAudio &&
  //     matchItems &&
  //     this.state.matchItems &&
  //     matchItems.first_circle !== this.state.matchItems.first_circle
  //   ) {
  //     switch (matchItems.first_circle) {
  //       case 'Ball':
  //         Tts.stop();
  //         Tts.speak('Ball Start Ball');
  //         this.setState({matchItems});
  //         break;
  //       case 'Drink Break':
  //         Tts.stop();
  //         Tts.speak('Driks Break');
  //         this.setState({matchItems});
  //         break;
  //       case 'Inning Break':
  //         Tts.stop();
  //         Tts.speak('Inning Break');
  //         this.setState({matchItems});
  //         break;
  //       case 'Blower Stop':
  //         Tts.stop();
  //         Tts.speak('Blower Stop');
  //         this.setState({matchItems});
  //         break;

  //       case 'Not Out':
  //         Tts.stop();
  //         Tts.speak('Not Out');
  //         this.setState({matchItems});
  //         break;

  //       case 'No Ball':
  //         Tts.stop();
  //         Tts.speak('No Ball');
  //         this.setState({matchItems});
  //         break;

  //       case 'Wide Ball':
  //         Tts.stop();
  //         Tts.speak('Wide Ball');
  //         this.setState({matchItems});
  //         break;

  //       case 'Free Hit':
  //         Tts.stop();
  //         Tts.speak('Free Hit');
  //         this.setState({matchItems});
  //         break;

  //       case 'Fast Bowler':
  //         Tts.stop();
  //         Tts.speak('Fast Bowler');
  //         this.setState({matchItems});
  //         break;

  //       case 'Spinner Bowler':
  //         Tts.stop();
  //         Tts.speak('Spinner Bowler');
  //         this.setState({matchItems});
  //         break;

  //       case '3rd Umpire':
  //         Tts.stop();
  //         Tts.speak('3rd Umpire');
  //         this.setState({matchItems});
  //         break;

  //       case 'Confirming':
  //         Tts.stop();
  //         Tts.speak('Confirming');
  //         this.setState({matchItems});

  //         break;
  //       case 'Wicket':
  //         Tts.stop();
  //         Tts.speak('oooho Wicket');
  //         this.setState({matchItems});

  //         break;
  //       case '0':
  //         Tts.stop();
  //         Tts.speak('Dot Ball zero run');
  //         this.setState({matchItems});

  //         break;
  //       case '1':
  //         Tts.stop();
  //         Tts.speak('Single Single 1 run');
  //         this.setState({matchItems});

  //         break;
  //       case '2':
  //         Tts.stop();
  //         Tts.speak('Double Double two run');
  //         this.setState({matchItems});

  //         break;
  //       case '4':
  //         Tts.stop();
  //         Tts.speak('Chauka Chauka Four run');
  //         this.setState({matchItems});

  //         break;
  //       case '3':
  //         Tts.stop();
  //         Tts.speak('Triple Triple three  run');
  //         this.setState({matchItems});

  //         break;

  //       case 'Four':
  //         Tts.stop();
  //         Tts.speak('Chauka Chauka four run');
  //         this.setState({matchItems});

  //         break;

  //       case 'Six':
  //         Tts.stop();
  //         Tts.speak('Chhakka chhakka  Six Run');
  //         this.setState({matchItems});

  //         break;

  //       default:
  //         Tts.stop();
  //         Tts.speak(matchItems.first_circle);
  //         this.setState({matchItems});
  //         break;
  //     }
  //   }
  //   this.setState({matchItems});
  // };
  // readTextTemp = async () => {
  //   if (this.state.isListenAudio) {
  //     Tts.stop();
  //     Tts.speak('Default data');
  //   }
  // };
  setGameType = async team => {
    this.setState({ squadTeam: team });
  };

  render() {
    let { users, theme ,leng} = this.props;
    let {
      // matchItems,
      // odds,
      // fancy,
      // scoreCard,
      squad,
      // matchInfo,
      // fancyList,
      // getAllAdsItems,
      // HomeListData,

    } = users;

    // console.log("scorecarddata:::::::::::::::",scoreCard);
    //console.log("scorecarddata:::::::::::::::", matchInfo);

    // console.log("render____this.state.currentGameType:::::::222222222222222222222222222222:", this.state.currentGameType);

    console.log("iam in playing XI [page]111111111111111111111111111111111111111111111111111", squad);

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
        {/* <View
            style={{flex:1,  backgroundColor: theme&&theme.primary?theme.primary:null}}>
         

              <ScrollView>
              
                {this.state.currentGameType == 'SQUADS' ? (
                  <>
                    {squad && squad ? (
                      <View style={{backgroundColor: theme&&theme.secondary?theme.secondary:null, }}>
                        <>

                        { squad && squad.team_a||squad && squad.team_b ?
                          <View
                            style={{
                              flexDirection: 'row',
                              marginHorizontal: 15,
                              height: 40,
                              // marginHorizontal: 25,
                              backgroundColor:theme&&theme.thirdback?theme.thirdback:null,
                              marginVertical: 10,
                              borderRadius: 20,
                              justifyContent: 'space-between',
                              borderWidth:0.5
                            }}>
                            <TouchableOpacity
                              style={
                                this.state.squadTeam == 'TEAMA'
                                  ? {
                                      width: '50%',
                                      borderRadius: 25,
                                      backgroundColor: theme&&theme.primary?theme.primary:null,
                                      justifyContent: 'center',
                                    }
                                  : {
                                      width: '50%',
                                      borderRadius: 25,
                                      justifyContent: 'center',
                                    }
                              }
                              onPress={() => this.setGameType('TEAMA')}>
                              <Text
                                style={
                                  this.state.squadTeam == 'TEAMA'
                                    ? {
                                        color: 'white',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                      }
                                    : {
                                        color: 'black',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                      }
                                }>
                                {squad && squad.team_a && squad.team_a.name
                                  ? squad.team_a.name
                                  : '-'}
                              </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={
                                this.state.squadTeam == 'TEAMB'
                                  ? {
                                      width: '50%',
                                      borderRadius: 25,
                                      backgroundColor: theme&&theme.primary?theme.primary:null,
                                      justifyContent: 'center',
                                    }
                                  : {
                                      width: '50%',
                                      borderRadius: 25,
                                      justifyContent: 'center',
                                    }
                              }
                              onPress={() => this.setGameType('TEAMB')}>
                              <Text
                                style={
                                  this.state.squadTeam == 'TEAMB'
                                    ? {
                                        color: 'white',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                      }
                                    : {
                                        color: 'black',
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                      }
                                }>
                                {squad && squad.team_b && squad.team_b.name
                                  ? squad.team_b.name
                                  : '-'}
                              </Text>
                            </TouchableOpacity>
                          </View>
                          :null
                         } 
                          <View style={{}}>
                            <ScrollView>
                              {
                                <>
                                  <View style={{height:'100%'}}>
                                    <ScrollView>
                                      <View
                                        style={{
                                          backgroundColor: 'white',
                                          alignSelf: 'center',
                                          marginBottom: 10,
                                          height:'100%'
                                        }}>
                                        {squad &&
                                        squad[
                                          this.state.squadTeam === 'TEAMA'
                                            ? 'team_a'
                                            : 'team_b'
                                        ] &&
                                        squad[
                                          this.state.squadTeam === 'TEAMA'
                                            ? 'team_a'
                                            : 'team_b'
                                        ]['player'] &&
                                        squad[
                                          this.state.squadTeam === 'TEAMA'
                                            ? 'team_a'
                                            : 'team_b'
                                        ]['player'].length > 0 ? 
                                        (
                                          squad[
                                            this.state.squadTeam === 'TEAMA'
                                              ? 'team_a'
                                              : 'team_b'
                                          ]['player'].map((element, index) => (
                                            <View
                                              style={{
                                                backgroundColor:
                                                  index % 2
                                                    ? 'white'
                                                    : theme&&theme.thirdback?theme.thirdback:null,
                                                width: '100%',
                                                flexDirection: 'row',
                                              }}>
                                              <View
                                                style={{
                                                  width: '35%',
                                                  borderWidth: 0.1,
                                                  borderTopRightRadius: 5,
                                                  borderBottomRightRadius: 5,
                                                  borderColor: 'gray',
                                                  alignContent: 'center',
                                                  alignItems: 'center',
                                                }}>
                                                <Image
                                                  style={{
                                                    height: 80,
                                                    width: 80,
                                                    // borderRadius: 3,
                                                    backgroundColor: 'white',
                                                    margin: 8,
                                                    borderRadius: 40,
                                                  }}
                                                  source={{
                                                    uri: element['image'],
                                                  }}
                                                />
                                              </View>
                                              <View
                                                style={{
                                                  width: '60%',
                                                  marginLeft: 15,
                                                  justifyContent: 'center',
                                                }}>
                                                <Text
                                                  style={{
                                                    color: 'black',
                                                    fontSize: 15,
                                                    fontWeight: 'bold',
                                                  }}>
                                                  {element.name}
                                                </Text>
                                                <Text
                                                  style={{
                                                    color: 'darkred',
                                                    fontSize: 14,
                                                    paddingTop: 5,
                                                  }}>
                                                  {element.play_role
                                                    ? element.play_role
                                                    : '-'}
                                                </Text>
                                              </View>
                                            </View>
                                          ))
                                        ) : 
                                        (
<>
                                          <View style={{}}>
                                          <Image source={require('../../images/matches.png')} style={{ marginTop: 25, alignSelf: 'center', height: 180, width: 180, resizeMode: 'stretch' }} />
                                          <Text style={{ color: 'darkred', textAlign: 'center', fontSize: 18 }}>Data not found</Text>
                                        </View>
                                        </>
                                        )}
                                      </View>
                                    </ScrollView>
                                  </View>
                                </>
                              }
                            </ScrollView>
                          </View>
                        </>
                      </View>
                    ) :
                    
                    null
                    }
                  </>
                ) : null}

               
              </ScrollView>
           

          </View> */}



        <View
          style={{ flex: 1, backgroundColor: theme && theme.primary ? theme.primary : null }}>
          {this.state.currentGameType == 'SQUADS' ? (
            <>
              {squad && squad ? (
                <View style={{ backgroundColor: theme && theme.secondary ? theme.secondary : null, }}>
                  <>

                    {squad && squad.team_a || squad && squad.team_b ?
                      <View
                        style={{
                          flexDirection: 'row',
                          marginHorizontal: 15,
                          height: 40,
                          // marginHorizontal: 25,
                          backgroundColor: theme && theme.thirdback ? theme.thirdback : null,
                          marginVertical: 10,
                          borderRadius: 20,
                          justifyContent: 'space-between',
                          borderWidth: 0.5
                        }}>
                        <TouchableOpacity
                          style={
                            this.state.squadTeam == 'TEAMA'
                              ? {
                                width: '50%',
                                borderRadius: 25,
                                backgroundColor: theme && theme.primary ? theme.primary : null,
                                justifyContent: 'center',
                              }
                              : {
                                width: '50%',
                                borderRadius: 25,
                                justifyContent: 'center',
                              }
                          }
                          onPress={() => this.setGameType('TEAMA')}>
                          <Text
                            style={
                              this.state.squadTeam == 'TEAMA'
                                ? {
                                  color: 'white',
                                  fontSize: 14,
                                  fontWeight: 'bold',
                                  textAlign: 'center',
                                }
                                : {
                                  color: 'black',
                                  fontSize: 14,
                                  fontWeight: 'bold',
                                  textAlign: 'center',
                                }
                            }>
                            {squad && squad.team_a && squad.team_a.name
                              ? squad.team_a.name
                              : '-'}
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={
                            this.state.squadTeam == 'TEAMB'
                              ? {
                                width: '50%',
                                borderRadius: 25,
                                backgroundColor: theme && theme.primary ? theme.primary : null,
                                justifyContent: 'center',
                              }
                              : {
                                width: '50%',
                                borderRadius: 25,
                                justifyContent: 'center',
                              }
                          }
                          onPress={() => this.setGameType('TEAMB')}>
                          <Text
                            style={
                              this.state.squadTeam == 'TEAMB'
                                ? {
                                  color: 'white',
                                  fontSize: 14,
                                  fontWeight: 'bold',
                                  textAlign: 'center',
                                }
                                : {
                                  color: 'black',
                                  fontSize: 14,
                                  fontWeight: 'bold',
                                  textAlign: 'center',
                                }
                            }>
                            {squad && squad.team_b && squad.team_b.name
                              ? squad.team_b.name
                              : '-'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                      : null
                    }
                    <View style={{}}>

                      {
                        <>
                          <View style={{ height: '100%' }}>
                            <ScrollView>
                              <View
                                style={{
                                  // backgroundColor: 'white',
                                  alignSelf: 'center',
                                  marginBottom: 10,
                                  height: '100%'
                                }}>
                                {squad &&
                                  squad[
                                  this.state.squadTeam === 'TEAMA'
                                    ? 'team_a'
                                    : 'team_b'
                                  ] &&
                                  squad[
                                  this.state.squadTeam === 'TEAMA'
                                    ? 'team_a'
                                    : 'team_b'
                                  ]['player'] &&
                                  squad[
                                    this.state.squadTeam === 'TEAMA'
                                      ? 'team_a'
                                      : 'team_b'
                                  ]['player'].length > 0 ?
                                  (
                                    squad[
                                      this.state.squadTeam === 'TEAMA'
                                        ? 'team_a'
                                        : 'team_b'
                                    ]['player'].map((element, index) => (
                                      <View
                                        style={{
                                          backgroundColor:
                                            index % 2
                                              ? 'white'
                                              : theme && theme.thirdback ? theme.thirdback : null,
                                          width: '100%',
                                          flexDirection: 'row',
                                        }}>
                                        <View
                                          style={{
                                            width: '35%',
                                            borderWidth: 0.1,
                                            borderTopRightRadius: 5,
                                            borderBottomRightRadius: 5,
                                            borderColor: 'gray',
                                            alignContent: 'center',
                                            alignItems: 'center',
                                          }}>
                                          <Image
                                            style={{
                                              height: 80,
                                              width: 80,
                                              // borderRadius: 3,
                                              backgroundColor: 'white',
                                              margin: 8,
                                              borderRadius: 40,
                                            }}
                                            source={{
                                              uri: element['image'],
                                            }}
                                          />
                                        </View>
                                        <View
                                          style={{
                                            width: '60%',
                                            marginLeft: 15,
                                            justifyContent: 'center',
                                          }}>
                                          <Text
                                            style={{
                                              color: 'black',
                                              fontSize: 15,
                                              fontWeight: 'bold',
                                            }}>
                                            {element.name}
                                          </Text>
                                          <Text
                                            style={{
                                              color: 'darkred',
                                              fontSize: 14,
                                              paddingTop: 5,
                                            }}>
                                            {element.play_role
                                              ? element.play_role
                                              : '-'}
                                          </Text>
                                        </View>
                                      </View>
                                    ))
                                  ) :
                                  (
                                    <>
                                      <View style={{ flex: 1, }}>
                                        <Image source={require('../../images/matches.png')} style={{ marginTop: 25, alignSelf: 'center', height: 180, width: 180, resizeMode: 'stretch' }} />
                                        <Text style={{ color: 'darkred', textAlign: 'center', fontSize: 18 }}>{leng.theme == "en" ? "Match has't started yet!" : "  मैच अभी शुरू नहीं हुआ है  "}</Text>
                                      </View>
                                    </>
                                  )}
                              </View>
                            </ScrollView>
                          </View>
                        </>
                      }

                    </View>
                  </>
                </View>
              ) :

                null
              }
            </>
          ) : null}


        </View>

      </>
      // </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard, theme ,leng} = state;
  return {
    loggingIn,
    users,
    dashboard,
    theme,leng
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
export default connect(mapStateToProps)(PlayingXI);
