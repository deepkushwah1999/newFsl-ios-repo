import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { dashboardActions } from '../../_actions';


import {
  View, Text, Dimensions, Button, Share, Linking, Alert, OpenURLButton,
  TouchableOpacity, TextInput, Image
} from 'react-native';
const { height, width } = Dimensions.get('window')


class MensTestRank extends Component {
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
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
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
    let { dashboard } = this.props;
   
    return (
      <View style={{ backgroundColor: '#0D1425', flex: 1 }}>
        <View style={{ backgroundColor: '#0D1D2A', height: 60, justifyContent: 'center', }}>
          <Text style={{ color: "white", fontWeight: 'bold', fontSize: 20, alignSelf: 'center' }}>Ranking</Text>
        </View>
        <View style={{ margin: 10, paddingTop: 10 }}>
          {
            this.state.menRanking ?
              <>
                <TouchableOpacity onPress={() => this.setState({ menRanking: !this.state.menRanking })} style={{backgroundColor: '#0D1D2A', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginLeft: 10, paddingVertical: 5 }}>ICC Men’s Ranking</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', width: 16, height: 16, marginRight: 5 }} source={require("../../Statics/img/Home/arrowdown.png")} />
                </TouchableOpacity>
              </>
              :
              <>
                <TouchableOpacity onPress={() => this.setState({ menRanking: !this.state.menRanking })} style={{ backgroundColor: '#0D1D2A', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginLeft: 10, paddingVertical: 5 }}>ICC Men’s Ranking</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', width: 16, height: 16, marginRight: 5 }} source={require("../../Statics/img/Home/arrowdown.png")} />
                </TouchableOpacity>

                <View style={{ height: 1, width: '100%', backgroundColor: 'gray' }} />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('MenTeam')} style={{ backgroundColor: '#0D1425', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>Team</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', marginRight: 8 }} source={require("../../images/rightarrowwhite.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('MenBowler')} style={{ backgroundColor: '#0D1D2A', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>Bowler</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', marginRight: 8 }} source={require("../../images/rightarrowwhite.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('MenBatter')} style={{ backgroundColor: '#0D1425', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>Batter</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', marginRight: 8 }} source={require("../../images/rightarrowwhite.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('MenAllRounder')} style={{ backgroundColor: '#0D1D2A', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>AllRounder</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', marginRight: 8 }} source={require("../../images/rightarrowwhite.png")} />
                </TouchableOpacity>
              </>

          }

        </View>


        <View style={{ margin: 10, paddingTop: 10 }}>
          {
            this.state.woMenRanking ?
              <>
                <TouchableOpacity onPress={() => this.setState({ woMenRanking: !this.state.woMenRanking })} style={{ backgroundColor: '#0D1D2A', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginLeft: 10, paddingVertical: 5 }}>ICC Women’s Ranking</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', width: 16, height: 16, marginRight: 5 }} source={require("../../Statics/img/Home/arrowdown.png")} />
                </TouchableOpacity>
              </>
              :
              <>
                <TouchableOpacity onPress={() => this.setState({ woMenRanking: !this.state.woMenRanking })} style={{ backgroundColor: '#0D1D2A', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginLeft: 10, paddingVertical: 5 }}>ICC Women’s Ranking</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', width: 16, height: 16, marginRight: 5 }} source={require("../../Statics/img/Home/arrowdown.png")} />
                </TouchableOpacity>

                <View style={{ height: 1, width: '100%', backgroundColor: 'gray' }} />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('WoMenTeam')} style={{ backgroundColor: '#0D1425', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>Team</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', marginRight: 8 }} source={require("../../images/rightarrowwhite.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('WoMenBowler')} style={{ backgroundColor: '#0D1D2A', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>Bowler</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', marginRight: 8 }} source={require("../../images/rightarrowwhite.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('WoMenBatter')} style={{ backgroundColor: '#0D1425', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>Batter</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', marginRight: 8 }} source={require("../../images/rightarrowwhite.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('WoMenAllRounder')} style={{ backgroundColor: '#0D1D2A', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 5 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>AllRounder</Text>
                  </View>
                  <Image style={{ alignSelf: 'center', marginRight: 8 }} source={require("../../images/rightarrowwhite.png")} />
                </TouchableOpacity>
              </>

          }

        </View>

      </View>


    )
  }
}
function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard } = state;
  return {
    loggingIn,
    users,
    dashboard
  };
}
export default connect(mapStateToProps)(MensTestRank);
