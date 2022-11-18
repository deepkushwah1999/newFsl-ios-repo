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

class Fancy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isListenAudio: false,
      currentGameType: 'FANCY',

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
    };

   
  }




  async componentDidMount() {
    let temp = {
      match_id: this.props.route.params.match_id,

    };

    this.props.dispatch(userActions.getFancyAPI(temp));


  }




  render() {
    let { users, theme,leng } = this.props;
    let {

      fancyList,

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





              {this.state.currentGameType == 'FANCY' ? (
                <>
                  {fancyList && fancyList ? (
                    <>
                      <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <ScrollView>
                          {fancyList && fancyList.length > 0 ? (
                            <View>
                              <>
                                <View
                                  style={{
                                    width: '98%',
                                    backgroundColor: theme && theme.secondary ? theme.secondary : null,
                                    alignSelf: 'center',
                                    marginBottom: 10,
                                    marginTop: 15,
                                    borderRadius: 10,
                                  }}>
                                  <View
                                    style={{
                                      width: '100%',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      height: 50,
                                      backgroundColor: 'lightgray',
                                      paddingLeft: 10,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                    }}>
                                    <Text
                                      style={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        width: '70%',
                                        fontSize: 16,
                                      }}>
                                      Fancy
                                    </Text>
                                    <Text
                                      style={{
                                        color: 'black',
                                        width: '15%',
                                        fontWeight: 'bold',
                                        fontSize: 16,
                                      }}>
                                      No
                                    </Text>
                                    <Text
                                      style={{
                                        color: 'black',
                                        width: '15%',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                      }}>
                                      Yes
                                    </Text>
                                  </View>
                                  {fancyList.map((element, index) => (
                                    <>
                                      {
                                        <View
                                          style={{
                                            backgroundColor:
                                              index % 2 ? '#f3f4f6' : 'white',
                                          }}>
                                          <View
                                            style={{
                                              width: '100%',
                                              flexDirection: 'row',
                                              justifyContent: 'space-between',
                                              alignItems: 'center',
                                              paddingLeft: 10,
                                              paddingTop: 10,
                                            }}>
                                            <Text
                                              style={{
                                                color: 'black',
                                                width: '70%',
                                                fontSize: 13,
                                              }}>
                                              {element.fancy}
                                            </Text>
                                            <Text
                                              style={{
                                                color: 'black',
                                                width: '15%',
                                                fontSize: 13,
                                              }}>
                                              {element.lay_price
                                                ? element.lay_price
                                                : '-'}
                                            </Text>
                                            <Text
                                              style={{
                                                color: 'black',
                                                width: '15%',
                                                fontSize: 13,
                                              }}>
                                              {element.back_price
                                                ? element.back_price
                                                : '-'}
                                            </Text>
                                          </View>
                                          <View
                                            style={{
                                              width: '100%',
                                              flexDirection: 'row',
                                              justifyContent: 'space-between',
                                              alignItems: 'center',
                                              paddingLeft: 10,
                                              paddingBottom: 10,
                                              paddingTop: 4,
                                            }}>
                                            <Text
                                              style={{
                                                color: '#FFC700',
                                                width: '70%',
                                                fontSize: 13,
                                              }}>
                                              {element.created}
                                            </Text>
                                            <Text
                                              style={{
                                                color: '#FD0B0B',
                                                width: '15%',
                                                fontSize: 13,
                                              }}>
                                              {element.lay_size
                                                ? element.lay_size
                                                : '-'}
                                            </Text>
                                            <Text
                                              style={{
                                                color: '#14FF2C',
                                                width: '15%',
                                                fontSize: 13,
                                              }}>
                                              {element.back_size
                                                ? element.back_size
                                                : '-'}
                                            </Text>
                                          </View>
                                        </View>
                                      }
                                    </>
                                  ))}
                                </View>
                              </>
                            </View>
                          ) : (
                            <View
                              style={{
                                height: height - 150,
                                backgroundColor: theme && theme.secondary ? theme.secondary : null,
                              }}>
                              <Image source={require('../../images/matches.png')} style={{ marginTop: 25, alignSelf: 'center', height: 180, width: 180, resizeMode: 'stretch' }} />
                              <Text style={{ color: 'darkred', textAlign: 'center', fontSize: 18 }}>{leng.theme=="en"?"Match has't started yet!":"  मैच अभी शुरू नहीं हुआ है  "}</Text>
                            </View>
                          )}
                        </ScrollView>
                        <View style={{ marginTop: 30 }}>

                        </View>
                      </View>
                    </>
                  ) : null}
                </>
              ) : null}
            </ScrollView>



          </View>
        </>
      // </SafeAreaView> 
    
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard, theme,leng } = state;
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
export default connect(mapStateToProps)(Fancy);
