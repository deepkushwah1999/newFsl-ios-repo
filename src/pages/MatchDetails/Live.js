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
  ActivityIndicator
} from 'react-native';
import colors from '../../config/colors';
import { userActions } from '../../_actions';
import Tts from 'react-native-tts';
import RenderHtml from 'react-native-render-html';
import { SafeAreaView } from 'react-native-safe-area-context';

import SocketIOClient from 'socket.io-client';
import { color } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');

const ENDPOINT = "https://socket.fastline.one";

class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      isListenAudio: false,
      currentGameType: '',
      matchItems: "",
      squadTeam: 'TEAMA',
      voices: [],
      ttsStatus: 'initiliazing',
      selectedVoice: 'ur-pk-x-cfn-local',
      speechRate: 0.5,
      speechPitch: 1,
      count: 0,
      cs: {},
      homeData: {},
      show: false,
      iomatchtype: {},
    };




    Tts.addEventListener('tts-start', event =>
      this.setState({ ttsStatus: 'started' }),
    );
    Tts.addEventListener('tts-finish', event =>
      this.setState({ ttsStatus: 'finished' }),
    );
    Tts.addEventListener('tts-cancel', event =>
      this.setState({ ttsStatus: 'cancelled' }),
    );
    Tts.setDefaultRate(this.state.speechRate);
    Tts.setDefaultPitch(this.state.speechPitch);
    Tts.getInitStatus().then(this.initTts);
  }

  setModalVisible = visible => {
    this.setState({ show: visible });
  };


  async componentDidMount() {
    let temp = {
      match_id: this.props.route.params.match_id,

    };



    this.socket = SocketIOClient(ENDPOINT);


    this.socket.on(this.props.route.params.match_id, data => {
      // console.log("datadata 1588 :::::::::::::", data);
      let bucketObj = {
        getLiveScoreByMatchId: data.data.data
      }
      // console.log("Bucket Object:::::::::", bucketObj);
      this.props.dispatch(userActions.updateLiveScoreFromSocket(bucketObj));


    });




  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  onClickButton(data) {

    this.setState({ currentGameType: data });


  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.state.intervalId);
    this.socket.disconnect();
  }



  initTts = async () => {
    const voices = await Tts.voices();
    const availableVoices = voices
      .filter(v => !v.networkConnectionRequired && !v.notInstalled)
      .map(v => {
        return { id: v.id, name: v.name, language: v.language };
      });
    let selectedVoice = null;
    if (voices && voices.length > 0) {
      selectedVoice = 'ur-pk-x-cfn-local';
      try {
        await Tts.setDefaultLanguage(voices[5].language);
      } catch (err) {

      }
      await Tts.setDefaultVoice('ur-pk-x-cfn-local');
      this.setState({
        voices: availableVoices,
        selectedVoice,
        ttsStatus: 'initialized',
      });
    } else {
      this.setState({ ttsStatus: 'initialized' });
    }
  };

  isListenAudioHandle = () => {
    this.setState({ isListenAudio: !this.state.isListenAudio });

  };


  readText = async (matchItems) => {


    if (
      this.state.isListenAudio &&
      matchItems &&
      this.state.matchItems &&
      matchItems.first_circle !== this.state.matchItems.first_circle
    ) {

      switch (matchItems.first_circle) {

        case matchItems.first_circle:
          Tts.stop();
          Tts.speak(matchItems.first_circle);
          this.setState({ matchItems });
          break;

        case 'Ball':
          Tts.stop();
          Tts.speak('Ball Start Ball');
          this.setState({ matchItems });
          break;
        case 'Drink Break':
          Tts.stop();
          Tts.speak('Driks Break');
          this.setState({ matchItems });
          break;
        case 'Inning Break':
          Tts.stop();
          Tts.speak('Inning Break');
          this.setState({ matchItems });
          break;
        case 'Blower Stop':
          Tts.stop();
          Tts.speak('Blower Stop');
          this.setState({ matchItems });
          break;

        case 'Not Out':
          Tts.stop();
          Tts.speak('Not Out');
          this.setState({ matchItems });
          break;

        case 'No Ball':
          Tts.stop();
          Tts.speak('No Ball');
          this.setState({ matchItems });
          break;

        case 'Wide Ball':
          Tts.stop();
          Tts.speak('Wide Ball');
          this.setState({ matchItems });
          break;

        case 'Free Hit':
          Tts.stop();
          Tts.speak('Free Hit');
          this.setState({ matchItems });
          break;

        case 'Fast Bowler':
          Tts.stop();
          Tts.speak('Fast Bowler');
          this.setState({ matchItems });
          break;

        case 'Spinner Bowler':
          Tts.stop();
          Tts.speak('Spinner Bowler');
          this.setState({ matchItems });
          break;

        case '3rd Umpire':
          Tts.stop();
          Tts.speak('3rd Umpire');
          this.setState({ matchItems });
          break;

        case 'Confirming':
          Tts.stop();
          Tts.speak('Confirming');
          this.setState({ matchItems });

          break;
        case 'Wicket':
          Tts.stop();
          Tts.speak('oooho Wicket');
          this.setState({ matchItems });

          break;
        case '0':
          Tts.stop();
          Tts.speak('Dot Ball zero run');
          this.setState({ matchItems });

          break;
        case '1':
          Tts.stop();
          Tts.speak('Single Single 1 run');
          this.setState({ matchItems });

          break;
        case '2':
          Tts.stop();
          Tts.speak('Double Double two run');
          this.setState({ matchItems });

          break;
        case '4':
          Tts.stop();
          Tts.speak('Chauka Chauka Four run');
          this.setState({ matchItems });

          break;
        case '3':
          Tts.stop();
          Tts.speak('Triple Triple three  run');
          this.setState({ matchItems });

          break;

        case 'Four':
          Tts.stop();
          Tts.speak('Chauka Chauka four run');
          this.setState({ matchItems });

          break;

        case 'Six':
          Tts.stop();
          Tts.speak('Chhakka chhakka  Six Run');
          this.setState({ matchItems });

          break;

        default:
          Tts.stop();
          Tts.speak(matchItems.first_circle);
          this.setState({ matchItems });
          break;
      }
    }
    this.setState({ matchItems: matchItems });
  };
  readTextTemp = async () => {
    if (this.state.isListenAudio) {
      Tts.stop();
      Tts.speak('Default data');
    }
  };
  setGameType = async team => {
    this.setState({ squadTeam: team });
  };

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
      matchInfoIO,

    } = users;
    console.log(":::::::::::::::::::::::111111111111111", matchItems);

    let data = matchItems && matchItems.first_circle ? matchItems.first_circle : null
    console.log("match fiest circle", data);

    if (this.state.isListenAudio) {

      this.readText(matchItems);


    }

    return (
      // <SafeAreaView>


        <View
          style={{ height: '100%', width: '100%', backgroundColor: theme && theme.primary ? theme.primary : null }}>


          {matchItems ? (
            <ScrollView >
              {(this.state.currentGameType == '' &&
                this.props.route.params.sportStatus === 'Live') ||
                this.state.currentGameType == 'Live' ? (
                <>
                  <View
                    style={{
                      width: '95%',
                      borderRadius: 5,
                      backgroundColor: 'black',
                      alignSelf: 'center',
                      marginVertical: 15,
                      padding: 10,
                      alignContent: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                      }}>
                      {this.state.isListenAudio ? (
                        <TouchableOpacity
                          onPress={() => this.isListenAudioHandle()}
                          style={{
                          
                            backgroundColor: '#0D1425',
                            paddingLeft: 8,
                            padding: 1,

                          }}>
                          <Image
                            style={{
                              alignSelf: 'flex-end',
                              width: 20,
                              height: 20,
                              marginRight: 10,
                            }}
                            source={require('../../images/on.png')}
                          />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          onPress={() => this.isListenAudioHandle()}
                          style={{
                           
                            backgroundColor: '#0D1425',
                            paddingLeft: 8,
                            padding: 1,

                          }}>
                          <Image
                            style={{
                              alignSelf: 'flex-end',
                              width: 20,
                              height: 20,
                              marginRight: 10,
                            }}
                            source={require('../../images/off.png')}
                          />
                        </TouchableOpacity>
                      )}
                      <View style={{ flexDirection: 'row' }}>
                        <Image
                          source={require('../../Statics/img/Home/black-circle.png')}
                          style={{ height: 10, width: 10, marginTop: 5 }}
                        />
                        <Text style={{ color: 'white' }}>  {leng.theme == "en" ? "Live" : "लाइव "}</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                        paddingBottom: 10,
                        justifyContent: 'center',
                        height: 100,
                      }}>
                      <View
                        style={{

                          width: '50%',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          paddingRight: 10,
                          alignSelf: 'center',
                        }}>
                        <View
                          style={{ justifyContent: 'center', marginTop: -35 }}>
                      
                          <View style={{ justifyContent: 'center' }}>
                            {data == "0" ? 
                     <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>{matchItems.first_circle} Run</Text>
                              : null

                            } 
                            {data == "Catch Out" ?
                          
                               <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>{matchItems.first_circle} </Text>

                              : null

                            } 
                            {data == "Over" ?  
                               <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>{matchItems.first_circle}</Text>
                              : null

                            }
                             {data == "1" ?   
                                <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>{matchItems.first_circle} Run</Text>
                              : null

                            }
                             {data == "3" ?   
                               <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>{matchItems.first_circle} Run</Text>
                              : null

                            } 
                            {data == "Four" ?     <Image
                    source={require('../../images/four.gif')}
                    style={{ width: 100, height: 100 }}
                  /> 
                              : null

                            } 
                            {data == "Wicket" ?    <Image
                    source={require('../../images/wicket.gif')}
                    style={{ width: 100, height: 100 }}
                  />
                 
                              : null

                            } 
                            {data == "Six" ?    <Image
                    source={require('../../images/six.gif')}
                    style={{ width: 100, height: 100 }}
                  /> 
                              : null

                            }
                              {data == "Ball" ?
                              <View style={{flexDirection:'row',justifyContent:'center'}}>
                                 <Image
                    source={require('../../images/baal.gif')}
                    style={{ width: 100, height: 100 }}
                  /> 
                  <Text style={{color:'#fff' ,fontSize:18,marginTop:20}}>Ball</Text>
                              </View>
                             
                              : null}

                            

                        


                          </View>



                        
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        borderTopWidth: 1,
                        backgroundColor: 'white',
                        borderRadius: 5,
                        marginBottom: 3,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          borderRadius: 5,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            margin: 7,
                            fontWeight: '600',
                          }}>
                          {matchItems.team_a_short ? matchItems.team_a_short : null}{' '}
                          <Text
                            style={{
                              color: 'black',
                              marginRight: 1,
                              fontWeight: 'bold',
                              fontSize: 15,
                            }}>
                            {matchItems.team_a_scores}{' '}
                          </Text>
                        </Text>
                        <Text style={{ color: 'black', fontSize: 15 }}>
                          ({matchItems.team_a_over})
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        borderTopWidth: 1,
                        backgroundColor: 'white',
                        borderRadius: 5,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          borderRadius: 5,
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            margin: 7,
                            fontWeight: '600',
                          }}>
                          {matchItems.team_b_short}{' '}
                          <Text
                            style={{
                              color: 'black',
                              marginRight: 1,
                              fontWeight: 'bold',
                              fontSize: 15,
                            }}>
                            {matchItems.team_b_scores}{' '}
                          </Text>
                        </Text>
                        <Text style={{ color: 'black', fontSize: 15 }}>
                          ({matchItems.team_b_over})
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 8,
                      marginHorizontal: 10,
                      borderRadius: 5,
                      marginBottom: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 5,
                        borderBottomWidth: 0.5,
                        color: 'lightgray',
                       
                        paddingBottom: 10
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          marginRight: 1,
                          fontWeight: 'bold',
                        }}>
                       {leng.theme == "en" ? "Run Needed" : "रन चाहिए "} :{' '}
                        <Text
                          style={{
                            color: 'black',
                            marginRight: 1,
                            fontWeight: 'bold',
                          }}>
                          {matchItems && matchItems.run_need
                            ? matchItems.run_need
                            : '0'}
                        </Text>
                      </Text>


                      <Text
                        style={{
                          color: 'black',
                          marginRight: 1,
                          fontWeight: 'bold',
                        }}>
                      {leng.theme == "en" ? "Balls Rem" : "गेंद चाहिए "}:{' '}
                        <Text
                          style={{
                            color: 'black',
                            marginRight: 1,
                            fontWeight: 'bold',
                          }}>
                          {matchItems && matchItems.ball_rem
                            ? matchItems.ball_rem
                            : '0.0'}
                        </Text>
                      </Text>

                      
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 5,
                        marginTop: 10,

                      }}>
                      <Text
                        style={{
                          color: 'black',
                          marginRight: 1,
                          fontWeight: 'bold',
                        }}>
                        CRR :{' '}
                        <Text
                          style={{
                            color: 'black',
                            marginRight: 1,
                            fontWeight: 'bold',
                          }}>
                          {matchItems && matchItems.curr_rate
                            ? matchItems.curr_rate
                            : '0.0'}
                        </Text>
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          marginRight: 1,
                          fontWeight: 'bold',
                        }}>
                        RRR :{' '}
                        <Text
                          style={{
                            color: 'black',
                            marginRight: 1,
                            fontWeight: 'bold',
                          }}>
                          {matchItems && matchItems.rr_rate
                            ? matchItems.rr_rate
                            : '0.0'}
                        </Text>
                      </Text>


                      {
                        matchItems && matchItems.target ? <Text
                          style={{
                            color: 'black',
                            marginRight: 1,
                            fontWeight: 'bold',
                          }}>
                          Target :{' '}
                          <Text
                            style={{
                              color: 'black',
                              marginRight: 1,
                              fontWeight: 'bold',
                            }}>
                            {matchItems && matchItems.target
                              ? matchItems.target
                              : '0.0'}
                          </Text>
                        </Text> : <Text
                          style={{
                            color: 'black',
                            marginRight: 1,
                            fontSize: 10,
                          }}>
                          {matchItems && matchItems ? matchItems.toss : ''}
                        </Text>

                      }

                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      padding: 10,
                      margin: 10,
                      borderRadius: 5,
                    }}>
                    <Text style={{ color: 'black', width: '30%' }}>
                      Last 6 Balls :{' '}
                    </Text>
                    {matchItems.last36ball && matchItems.last36ball.length > 0
                      ? matchItems.last36ball.map(tempEle => (
                        <Text
                          style={
                            tempEle === 'W'
                              ? {
                                color: 'white',
                                height: 25,
                                width: 25,
                                borderRadius: 13,
                                paddingTop: 3,
                                backgroundColor: 'red',
                                alignSelf: 'center',
                                textAlign: 'center',
                              }
                              : tempEle === '4' || tempEle === '6'
                                ? {
                                  color: 'white',
                                  height: 25,
                                  width: 25,
                                  borderRadius: 13,
                                  paddingTop: 3,
                                  backgroundColor: 'green',
                                  alignSelf: 'center',
                                  textAlign: 'center',
                                }
                                : {
                                  color: 'white',
                                  height: 25,
                                  width: 25,
                                  borderRadius: 13,
                                  paddingTop: 3,
                                  backgroundColor: '#2BACBD',
                                  alignSelf: 'center',
                                  textAlign: 'center',
                                }
                          }>
                          {tempEle}
                        </Text>
                      ))
                      : null}
                  </View>

                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 10,
                      margin: 10,
                      borderRadius: 5,
                    }}>
                    <View style={{ alignItems: 'center' }}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          marginRight: 1,
                        }}>
                        {matchItems.fav_team}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 5,
                        }}>
                        <Text
                          style={{
                            borderRadius: 5,
                            color: 'white',
                            backgroundColor: '#C03E3E',
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            paddingHorizontal: 5,
                            paddingVertical: 2,
                            minWidth: 40,
                          }}>
                          {matchItems.min_rate ? matchItems.min_rate : '-'}
                        </Text>

                        <Text
                          style={{
                            paddingHorizontal: 5,
                            paddingVertical: 2,
                            marginLeft: 5,
                            borderRadius: 5,
                            color: 'white',
                            backgroundColor: '#1C5E0A',
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginRight: 10,
                            minWidth: 40,
                          }}>
                          {matchItems.max_rate ? matchItems.max_rate : '-'}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      backgroundColor: 'white',
                      padding: 10,
                      marginHorizontal: 10,
                      borderRadius: 5,
                      marginTop: 15,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          marginRight: 1,
                        }}>
                      {matchItems.s_ovr ? matchItems.s_ovr : null}   {leng.theme == "en" ? "Ov Runs" : "ओवर रन्स "}
                      </Text>


                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text
                          style={{
                            borderRadius: 5,
                            color: 'white',
                            backgroundColor: '#C03E3E',
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            paddingHorizontal: 5,
                            paddingVertical: 2,
                            minWidth: 40,
                          }}>
                          {matchItems.s_min ? matchItems.s_min : '-'}
                        </Text>

                        <Text
                          style={{
                            paddingHorizontal: 5,
                            paddingVertical: 2,
                            marginLeft: 5,
                            borderRadius: 5,
                            color: 'white',
                            backgroundColor: '#1C5E0A',
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            marginRight: 10,
                            minWidth: 40,
                          }}>
                          {matchItems.s_max ? matchItems.s_max : '-'}
                        </Text>
                      </View>



                    </View>

                    <View
                      style={{
                        borderTopWidth: 1,
                        borderTopColor: 'gray',
                        marginVertical: 7,
                      }}
                    />

                  </View>

                  {matchItems.lambi_ovr ?

                    <View
                      style={{
                        backgroundColor: 'white',
                        padding: 10,
                        marginHorizontal: 10,
                        borderRadius: 5,
                        marginTop: 15,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                            marginRight: 1,
                          }}>
                          {matchItems.lambi_ovr ? matchItems.lambi_ovr : "0"} {leng.theme == "en" ? "Ov Runs" : "ओवर रन्स "}
                        </Text>


                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text
                            style={{
                              borderRadius: 5,
                              color: 'white',
                              backgroundColor: '#C03E3E',
                              alignSelf: 'center',
                              textAlign: 'center',
                              fontSize: 15,
                              fontWeight: 'bold',
                              paddingHorizontal: 5,
                              paddingVertical: 2,
                              minWidth: 40,
                            }}>
                            {matchItems.lambi_min ? matchItems.lambi_min : '-'}
                          </Text>

                          <Text
                            style={{
                              paddingHorizontal: 5,
                              paddingVertical: 2,
                              marginLeft: 5,
                              borderRadius: 5,
                              color: 'white',
                              backgroundColor: '#1C5E0A',
                              alignSelf: 'center',
                              textAlign: 'center',
                              fontSize: 15,
                              fontWeight: 'bold',
                              marginRight: 10,
                              minWidth: 40,
                            }}>
                            {matchItems.lambi_max ? matchItems.lambi_max : '-'}
                          </Text>
                        </View>



                      </View>

                      <View
                        style={{
                          borderTopWidth: 1,
                          borderTopColor: 'gray',
                          marginVertical: 7,
                        }}
                      />

                    </View>
                    : null
                  }
                  {matchItems ? (
                    <>
                      <View
                        style={{
                          flex: 1,
                          margin: 10,
                          backgroundColor: 'white',
                          borderRadius: 5,
                        }}>
                        <ScrollView>
                          <View
                            style={{
                              width: '100%',
                              backgroundColor: 'white',
                              alignSelf: 'center',
                              borderRadius: 5,
                              borderBottomWidth: 1,
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                padding: 10,
                                marginVertical: 3,
                              }}>
                              <Text
                                style={{
                                  color: '#FFC700',
                                  fontWeight: 'bold',
                                  marginRight: 1,
                                  width: '30%',
                                  fontSize: 17,
                                }}>
                               {leng.theme == "en" ? "Batsman" : "बैट्समैन "} :
                              </Text>

                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  width: '70%',
                                }}>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    width: '12%',
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  R
                                </Text>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    width: '12%',
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  B
                                </Text>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    width: '12%',
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  4s
                                </Text>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    width: '12%',
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  6s
                                </Text>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    width: '22%',
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  SR
                                </Text>
                              </View>
                            </View>
                          </View>
                          {matchItems &&
                            matchItems.batsman &&
                            matchItems.batsman.length > 0 ? (
                            <>
                              {matchItems.batsman.map(element => (
                                <View
                                  style={{
                                    width: '100%',
                                    backgroundColor: 'white',
                                    alignSelf: 'center',
                                    borderBottomWidth: 1,
                                  }}>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      padding: 10,
                                      marginVertical: 3,
                                    }}>
                                    <Text
                                      style={{
                                        color: 'black',
                                        marginRight: 1,
                                        width: '33%',
                                        fontSize: 12,
                                      }}>
                                      {element.name}{element.name && element.name && element.name.includes("*") ? <Image
                                        style={{
                                          alignSelf: 'flex-end',
                                          width: 12,
                                          height: 12,
                                          
                                        }}
                                        source={require('../../images/cricket.png')}
                                      /> : null}
                                    </Text>

                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '70%',
                                      }}>
                                      <Text
                                        style={{
                                          color: 'black',
                                          width: '12%',
                                          alignSelf: 'center',
                                          fontSize: 13,
                                        }}>
                                        {element.run ? element.run : '-'}
                                      </Text>
                                      <Text
                                        style={{
                                          color: 'black',
                                          width: '12%',
                                          alignSelf: 'center',
                                          fontSize: 13,
                                        }}>
                                        {element.ball ? element.ball : '-'}
                                      </Text>
                                      <Text
                                        style={{
                                          color: 'black',
                                          width: '12%',
                                          alignSelf: 'center',
                                          fontSize: 13,
                                        }}>
                                        {element.fours ? element.fours : '-'}
                                      </Text>
                                      <Text
                                        style={{
                                          color: 'black',
                                          width: '12%',
                                          alignSelf: 'center',
                                          fontSize: 13,
                                        }}>
                                        {element.sixes ? element.sixes : '-'}
                                      </Text>
                                      <Text
                                        style={{
                                          color: 'black',
                                          width: '22%',
                                          alignSelf: 'center',
                                          fontSize: 13,
                                        }}>
                                        {element.strike_rate
                                          ? element.strike_rate
                                          : '-'}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              ))}
                            </>
                          ) : (
                           <>
                           </>
                          )}
                        </ScrollView>

                        {matchItems.partnership && (
                          <View
                            style={{
                              marginTop: 5,
                              marginBottom: 10,
                              marginHorizontal: 10,
                            }}>
                            <Text
                              style={{
                                color: 'black',
                                alignSelf: 'center',
                                fontSize: 14,
                              }}>
                              {leng.theme == "en" ? "Partnership" : "साझेदारी"} :{' '}
                              {matchItems.partnership &&
                                matchItems.partnership.run
                                ? matchItems.partnership.run
                                : '0'}
                              (
                              {matchItems.partnership &&
                                matchItems.partnership
                                ? matchItems.partnership.ball
                                : '0'}
                              )
                            </Text>

                            <Text
                              style={{
                                color: 'black',
                                marginLeft: 5,
                                alignSelf: 'center',
                                fontSize: 13,
                              }}>
                              {leng.theme == "en" ? "last Wkt" : "विकेट "} :{' '}
                              {matchItems.lastwicket.player &&
                                matchItems.lastwicket.player
                                ? matchItems.lastwicket.player + ' '
                                : '-'}
                              {matchItems.lastwicket && matchItems.lastwicket
                                ? matchItems.lastwicket.run
                                : ''}
                              (
                              {matchItems.lastwicket &&
                                matchItems.lastwicket.ball
                                ? matchItems.lastwicket.ball
                                : ''}
                              )
                            </Text>
                          </View>
                        )}
                      </View>

                      <View
                        style={{
                          flex: 1,
                          marginTop: 10,
                          borderRadius: 5,
                          backgroundColor: 'white',
                          marginHorizontal: 10,
                        }}>
                        <ScrollView>
                          <View
                            style={{
                              width: '95%',
                              backgroundColor: 'white',
                              alignSelf: 'center',
                              paddingRight: 20,
                              borderBottomWidth: 1,
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                padding: 10,
                                marginVertical: 3,
                              }}>
                              <Text
                                style={{
                                  color: '#FFC700',
                                  fontWeight: 'bold',
                                  marginRight: 20,
                                  width: '38%',
                                  fontSize: 17,
                                }}>
                                {leng.theme == "en" ? "Bowler" : "बॉलर  "} :
                              </Text>

                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  width: '64%',
                                }}>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    marginLeft: 1,
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  O
                                </Text>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    marginLeft: 7,
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  M
                                </Text>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    marginLeft: 8,
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  R
                                </Text>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    marginLeft: 7,
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  W
                                </Text>
                                <Text
                                  style={{
                                    color: '#FFC700',
                                    fontWeight: 'bold',
                                    marginLeft: 6,
                                    alignSelf: 'center',
                                    fontSize: 17,
                                  }}>
                                  Eco.
                                </Text>
                              </View>
                            </View>
                          </View>
                          {matchItems && matchItems.bolwer ? (
                            <>
                              {
                                <View
                                  style={{
                                    width: '95%',
                                    backgroundColor: 'white',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    padding: 10,
                                    marginHorizontal: 10,
                                  }}>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      marginVertical: 5,
                                    }}>
                                    <Text
                                      style={{
                                        color: 'black',
                                        marginRight: 20,
                                        fontSize: 13,
                                        fontWeight: 'bold',
                                        width: '34%',
                                      }}>
                                      {matchItems.bolwer.name}
                                    </Text>
                                    <View
                                      style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '60%',
                                      }}>
                                      <Text
                                        style={{
                                          color: 'black',
                                          alignSelf: 'center',
                                        }}>
                                        {matchItems.bolwer.over
                                          ? matchItems.bolwer.over
                                          : '-'}
                                      </Text>
                                      <Text
                                        style={{
                                          color: 'black',
                                          alignSelf: 'center',
                                        }}>
                                        {matchItems.bolwer.maiden
                                          ? matchItems.bolwer.maiden
                                          : '-'}
                                      </Text>
                                      <Text
                                        style={{
                                          color: 'black',
                                          alignSelf: 'center',
                                        }}>
                                        {matchItems.bolwer.run
                                          ? matchItems.bolwer.run
                                          : '-'}
                                      </Text>
                                      <Text
                                        style={{
                                          color: 'black',
                                          alignSelf: 'center',
                                        }}>
                                        {matchItems.bolwer.wicket
                                          ? matchItems.bolwer.wicket
                                          : '-'}
                                      </Text>
                                      <Text
                                        style={{
                                          color: 'black',
                                          alignSelf: 'center',
                                        }}>
                                        {matchItems.bolwer.economy
                                          ? matchItems.bolwer.economy
                                          : '-'}
                                      </Text>
                                    </View>
                                  </View>
                                </View>


                              }
                            </>
                          ) : (
                            <Text style={{ color: 'black' }}>{leng.theme=="en"?"Score Board not available for this match":"  मैच अभी शुरू नहीं हुआ है  "} </Text>
                            
                           
                          )}
                        </ScrollView>
                      </View>

                      <View
                        style={{
                          flex: 1,
                          backgroundColor: 'white',
                          marginHorizontal: 10,
                          borderRadius: 10,
                          marginTop: 20,
                        }}>
                        <ScrollView>
                          <Text
                            style={{
                              color: 'black',
                              marginLeft: 10,
                              alignSelf: 'center',
                              fontWeight: 'bold',
                              fontSize: 20,
                              marginVertical: 5,
                            }}>
                            {'Session'}
                          </Text>
                          <View
                            style={{
                              width: '93%',
                              borderRadius: 10,
                              marginBottom: 10,
                              margin: 15,
                              borderColor: 'gray',
                              elevation: 10,
                              marginTop: -1,
                            }}>
                            <RenderHtml
                              contentWidth={100}
                              source={{ html: matchItems.session }}
                              tagsStyles={{
                                body: {
                                  borderRadius: 10,
                                  padding: 5,
                                  backgroundColor: 'white',
                                  color: 'black',
                                  textAlign: 'center',
                                },
                              }}
                            />
                          </View>
                        </ScrollView>
                        <View style={{ marginTop: 100, color: 'lightgray' }}>

                        </View>
                      </View>
                    </>
                  ) : null
                  }
                </>
              ) : null
              }

            </ScrollView>
          ) :

            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator size="large" color="white" />
            </View>

          }
          <View style={{ marginTop: 20 }}>

</View>


        </View>


      // {/* </SafeAreaView> */}
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
export default connect(mapStateToProps)(Live);
