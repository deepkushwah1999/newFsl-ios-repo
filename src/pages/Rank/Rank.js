import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { dashboardActions } from '../../_actions';


import {
  View, Text, Dimensions, Button, Share, Linking, Alert, OpenURLButton,
  TouchableOpacity, TextInput, Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window')


class Rank extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      otp_code: '',
      showLogin: true,
      menRanking: false,
      woMenRanking: false,
      failureMSG: '',
      failureOTPMSG: '',
      formData: {
        "name": "",
        "mobile": "",
        "email": "",
        "message": ""
      }
    }
  }
  componentDidMount() {

  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://drive.google.com/file/d/1u9tNNSHVOe2rJSaho8mILyJmqh9z09g4/view?usp=sharing',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };


  static getDerivedStateFromProps(nextProps) {

    if (nextProps.dashboard.submitEnquirySuccess) {
      return {
        ...nextProps,
        formData: {
          "name": "",
          "mobile": "",
          "email": "",
          "message": ""
        }

      }
    }
    if (nextProps.dashboard.getEmployeeHappinessSuccess) {
      return {
        ...nextProps,
        trackMessage: 'You can see getEmployeeHappinessSuccess here!'

      }
    } else {
      return {
        ...nextProps
      }
    }

  }
  handleInput = (text, name) => {
    let { formData } = this.state;
    formData[name] = text;
    this.setState({ formData });
  }
  gotoIntroScreen = () => {
    this.props.navigation.navigate('Intro1')
  }

  handleLoginInput = (text) => {
    this.setState({ email: text })
  }

  submitContactDetails = () => {
    let { formData } = this.state
    this.props.dispatch(dashboardActions.saveEnqiry(formData, this.props));
  }

  onSubmitOTP = () => {
    const { users } = this.props;
    const { UserEmailToken } = users;
    if (this.state.otp !== 'NaN') {
      let data = {
        token: UserEmailToken,
        otp: this.state.otp
      }

      this.props.dispatch(userActions.validateOtp(data, this.props));
      this.props.navigation.navigate('Welcome')
    }
  }

  handleVerificationInput = (text) => {
    this.setState({ otp: text })
  }


  render() {


    let { formData } = this.state;
    let { dashboard,theme,leng } = this.props;

    return (
      <SafeAreaView>
        <View style={{ backgroundColor:theme&&theme.secondary?theme.secondary:null, height: '100%' }}>

          <View style={{ backgroundColor: theme&&theme.primary?theme.primary:null, height: 60, flexDirection:'row' }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
              <Image style={{ alignSelf: 'center', marginTop: 15,marginLeft:10 }} source={require("../../Statics/img/Home/back-arrow.png")} />
            </TouchableOpacity>
            <Text style={{ color: "white", fontSize: 18, alignSelf: 'center',marginLeft:100 }}>{leng.theme=="en"?"Ranking":"रैंकिंग "}</Text>
          </View>
          <ScrollView>
            <View style={{ margin: 10, paddingTop: 10, }}>
              {
                this.state.menRanking ?
                  <>
                    <TouchableOpacity onPress={() => this.setState({ menRanking: !this.state.menRanking })} style={{ backgroundColor:  theme&&theme.primary?theme.primary:null, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5, borderRadius: 15 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, marginLeft: 10, paddingVertical: 5 }}>ICC Men’s Ranking</Text>
                      </View>
                      <Image style={{ alignSelf: 'center', width: 16, height: 16, marginRight: 5 }} source={require("../../Statics/img/Home/arrowdown.png")} />
                    </TouchableOpacity>
                  </>
                  :

                  <View style={{borderRadius:15}}>
                    <>
                      <TouchableOpacity onPress={() => this.setState({ menRanking: !this.state.menRanking })} style={{ backgroundColor:  theme&&theme.primary?theme.primary:null, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5,borderTopLeftRadius:15,borderTopRightRadius:15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, marginLeft: 10, paddingVertical: 5 }}> 
                          {leng.theme=="en"?"ICC Mens's Ranking":"ICC मेन's रैंकिंग "}</Text>
                        </View>
                        <Image style={{ alignSelf: 'center', width: 16, height: 16, marginRight: 5 }} source={require("../../Statics/img/Home/arrowdown.png")} />
                      </TouchableOpacity>

                      <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('MenTeam')} style={{ backgroundColor: 'lightgray', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: 'Black', fontSize: 16, marginLeft: 10 }}>{leng.theme=="en"?"Team":"टीम "}</Text>
                        </View>
                        <Image style={{ alignSelf: 'center', marginRight: 8 ,height:22,width:22}} source={require("../../images/next.png")} />
                      </TouchableOpacity>
                      <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />


                      <TouchableOpacity onPress={() => this.props.navigation.navigate('MenBowler')} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: 'black', fontSize: 16, marginLeft: 10 }}>{leng.theme=="en"?"Bowler":"बॉलर "}</Text>
                        </View>
                        <Image style={{ alignSelf: 'center', marginRight: 8 ,height:22,width:22}} source={require("../../images/next.png")} />
                      </TouchableOpacity>
                      <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('MenBatter')} style={{ backgroundColor: 'lightgray', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: 'black', fontSize: 16, marginLeft: 10 }}>{leng.theme=="en"?"Batter":"बैटर  "}</Text>
                        </View>
                        <Image style={{ alignSelf: 'center', marginRight: 8 ,height:22,width:22}} source={require("../../images/next.png")} />
                      </TouchableOpacity>
                      <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />

                      <TouchableOpacity onPress={() => this.props.navigation.navigate('MenAllRounder')} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: 'black', fontSize: 16, marginLeft: 10 }}>{leng.theme=="en"?"AllRounder":"ऑलरॉउंडर "}</Text>
                        </View>
                        <Image style={{ alignSelf: 'center', marginRight: 8 ,height:22,width:22}} source={require("../../images/next.png")} />
                      </TouchableOpacity>
                      <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />

                    </>
                  </View>

              }

            </View>


            <View style={{ margin: 10, paddingTop: 10 ,marginBottom:50}}>
              {
                this.state.woMenRanking ?
                  <>
                    <TouchableOpacity onPress={() => this.setState({ woMenRanking: !this.state.woMenRanking })} style={{ backgroundColor: theme&&theme.primary?theme.primary:null, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5,borderRadius:15 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, marginLeft: 10, paddingVertical: 5 }}>ICC Women’s Ranking</Text>
                      </View>
                      <Image style={{ alignSelf: 'center', width: 16, height: 16, marginRight: 5 }} source={require("../../Statics/img/Home/arrowdown.png")} />
                    </TouchableOpacity>
                  </>
                  :
                  <View>
                  <>
                    <TouchableOpacity onPress={() => this.setState({ woMenRanking: !this.state.woMenRanking })} style={{ backgroundColor: theme&&theme.primary?theme.primary:null, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5,borderTopLeftRadius:15,borderTopRightRadius:15 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18, marginLeft: 10, paddingVertical: 5 }}> {leng.theme=="en"?"ICC Womens's Ranking":"ICC वूमेन's रैंकिंग "}</Text>
                      </View>
                      <Image style={{ alignSelf: 'center', width: 16, height: 16, marginRight: 5 }} source={require("../../Statics/img/Home/arrowdown.png")} />
                    </TouchableOpacity>

                    <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WoMenTeam')} style={{ backgroundColor: 'lightgray', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, marginLeft: 10 }}>{leng.theme=="en"?"Team":"टीम "}</Text>
                      </View>
                                              <Image style={{ alignSelf: 'center', marginRight: 8 ,height:22,width:22}} source={require("../../images/next.png")} />

                    </TouchableOpacity>
                    <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WoMenBowler')} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, marginLeft: 10 }}>{leng.theme=="en"?"Bowler":"बॉलर "}</Text>
                      </View>
                                              <Image style={{ alignSelf: 'center', marginRight: 8 ,height:22,width:22}} source={require("../../images/next.png")} />

                    </TouchableOpacity>
                    <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WoMenBatter')} style={{ backgroundColor: 'lightgray', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, marginLeft: 10 }}>{leng.theme=="en"?"Batter":"बैटर"}</Text>
                      </View>
                                              <Image style={{ alignSelf: 'center', marginRight: 8 ,height:22,width:22}} source={require("../../images/next.png")} />

                    </TouchableOpacity>
                    <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WoMenAllRounder')} style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, marginLeft: 10 }}>{leng.theme=="en"?"AllRounder":"ऑलरॉउंडर "}</Text>
                      </View>
                                              <Image style={{ alignSelf: 'center', marginRight: 8 ,height:22,width:22}} source={require("../../images/next.png")} />

                    </TouchableOpacity>
                    <View style={{ height: 1, width: '100%', backgroundColor: 'black' }} />

                  </>
                  </View>

              }

            </View>

          </ScrollView>

        </View>
      </SafeAreaView>

    )
  }
}
function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard,theme,leng } = state;
  return {
    loggingIn,
    users,
    dashboard,
    theme,leng
  };
}
export default connect(mapStateToProps)(Rank);
