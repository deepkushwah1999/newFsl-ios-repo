/*Example of RealM Database in React Native*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
// import { View } from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



// import Login from '../pages/Login/Login';
import All_Matches from '../pages/All_Matches/All_Matches';
import T20Matches from '../pages/All_Matches/T20Matches';
import ODI_Matches from '../pages/All_Matches/ODI_Matches';
import Test_Matches from '../pages/All_Matches/Test_Matches';
// import MatchDetailsModel from '../pages/MatchDetails/MatchDetailsModel';
// import MatchDetailsModel from '../pages/MatchDetails/MatchDetailsModel';

import Privacy from '../pages/Privacy/Privacy';



// import Forgot from '../pages/Forgot/Forgot';
import BottomTab from './BottomTab';
// import Sidebar from './Sidebar';
// import ReceiveCoin from '../pages/ReceiveCoin/ReceiveCoin';
// import SendCoin from '../pages/SendCoin/SendCoin';
// import AddressList from '../pages/AddressList/AddressList';

import {dashboardActions} from '../_actions';

import PINCode, {hasUserSetPinCode} from '@haskkor/react-native-pincode';
// import Support from '../pages/Support/Support';
// import Chat from '../pages/Chat/Chat';
// import TransactionHistory from '../pages/TransactionHistory/TransactionHistory';
import Home1 from '../pages/Home1/Home1';
import FireHome from '../pages/FireHome/FireHome';

// import Ashes from '../pages/Ashes/Ashes';
import MatchDetails from '../pages/MatchDetails/MatchDetails';
// import TeamA from '../pages/TeamA/TeamA';
// import TeamB from '../pages/TeamB/TeamB';
import Rank from '../pages/Rank/Rank';
import Ranking from '../pages/Rank/Ranking';
import SeriesData from '../pages/SeriesData/SeriesData';
// import Point_Table from '../pages/SeriesData/Point_Table';
// import Fixture from '../pages/SeriesData/Fixture';



// import xyz from '../pages/xyz';

// import IccMen from '../pages/IccMen/IccMen';
// import IccWomen from '../pages/IccWomen/IccWomen';
import NewsDetails from '../pages/NewsDetails/NewsDetails';
import Vedio from '../pages/Vedio/Vedio';
import Info from '../pages/MatchDetails/Info';
import PlayingXI from '../pages/MatchDetails/PlayingXI';

import Fancy from '../pages/MatchDetails/Fancy';
import Live from '../pages/MatchDetails/Live';
import ScoreCard from '../pages/MatchDetails/ScoreCard';



import Account_Setting from '../pages/Account_Setting/Account_Setting';
// import Play from '../pages/Vedio/Play';

// import Scorecard from '../pages/MatchDetails/Scorecard';
// import Commentry from '../pages/MatchDetails/Commentry';
// import Info from '../pages/MatchDetails/Info';
// import Live from '../pages/MatchDetails/Live';

import MenTeam from '../pages/MenTeam/MenTeam';
// import MensTestRank from '../pages/MensTestRank/MensTestRank';
import MenAllRounder from '../pages/MenAllRounder/MenAllRounder';
import MenBatter from '../pages/MenBatter/MenBatter';
import MenBowler from '../pages/MenBowler/MenBowler';

import WoMenTeam from '../pages/WoMenTeam/WoMenTeam';
import WoMenAllRounder from '../pages/WoMenAllRounder/WoMenAllRounder';
import WoMenBatter from '../pages/WoMenBatter/WoMenBatter';
import WoMenBowler from '../pages/WoMenBowler/WoMenBowler';

// import Scorefct from '../pages/Scorefct/Scorefct';
// import AudioPoc from '../pages/AudioPoc/AudioPoc';
// import VideoDetail from '../pages/Vedio/VideoDetail';
import TrendingSeries from '../pages/TrendingSeries/TrendingSeries';
import Term from '../pages/Privacy/Term';

const RouteStack = createStackNavigator();

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userData: '',
      isLoading: true,
      showPinLock: false,
      PINCodeStatus: 'enter',
    };
  }

  async componentDidMount() {
    this._showEnterPinLock();
    this.props.dispatch(dashboardActions.getClientProfile());

    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1000);
  }

  _showEnterPinLock = async () => {
    const hasPin = await hasUserSetPinCode();
    if (hasPin) {
      this.setState({PINCodeStatus: 'enter', showPinLock: true});
    } else {
    }
  };

  _finishProcess = async () => {
    const hasPin = await hasUserSetPinCode();
    if (hasPin) {
      this.setState({showPinLock: false});
    }
  };

  render() {
    return (
      <>
        {/* <Splash /> */}
        <SafeAreaProvider>
          <NavigationContainer>
            <RouteStack.Navigator headerMode="none" initialRouteName="Home">
              {/* <RouteStack.Screen name='SelectionScreen' component={initialSelectionscreen} /> */}
              <RouteStack.Screen name="BottomTab" component={BottomTab} />
              <RouteStack.Screen name="Home1" component={Home1} />
              {/* <RouteStack.Screen name="NEWDATA" component={NEWDATA} /> */}
              {/* <RouteStack.Screen name="MatchDetailsModel" component={MatchDetailsModel} /> */}

              <RouteStack.Screen name="FireHome" component={FireHome} />
              <RouteStack.Screen name="All_Matches" component={All_Matches} />
              <RouteStack.Screen name="T20Matches" component={T20Matches} />
              <RouteStack.Screen name="ODI_Matches" component={ODI_Matches} />
              <RouteStack.Screen name="Test_Matches" component={Test_Matches} />
              {/* <RouteStack.Screen name="Point_Table" component={Point_Table} /> */}
              {/* <RouteStack.Screen name="Fixture" component={Fixture} /> */}
              
              <RouteStack.Screen name="Info" component={Info} />
              <RouteStack.Screen name="PlayingXI" component={PlayingXI} />
              <RouteStack.Screen name="Fancy" component={Fancy} />
              <RouteStack.Screen name="Live" component={Live} />
              <RouteStack.Screen name="ScoreCard" component={ScoreCard} />

              {/* Privacy */}
              <RouteStack.Screen name="Privacy" component={Privacy} />

{/* Term */}
<RouteStack.Screen name="Term" component={Term} />




              <RouteStack.Screen
                name="TrendingSeries"
                component={TrendingSeries}
              />

              <RouteStack.Screen name="Vedio" component={Vedio} />
              <RouteStack.Screen name="SeriesData" component={SeriesData} />

              {/* <RouteStack.Screen
                name="TransactionHistory"
                component={TransactionHistory}
              /> */}
              {/* <RouteStack.Screen name="Ashes" component={Ashes} /> */}
              {/* <RouteStack.Screen name="TeamA" component={TeamA} />
              <RouteStack.Screen name="TeamB" component={TeamB} /> */}
              <RouteStack.Screen name="Rank" component={Rank} />

              <RouteStack.Screen
                name="Account_Setting"
                component={Account_Setting}
              />

              {/* <RouteStack.Screen name="Fantasy" component={Fantasy} /> */}
              {/* <RouteStack.Screen name="Live" component={Live} /> */}
              <RouteStack.Screen name="MatchDetails" component={MatchDetails} />
              {/* <RouteStack.Screen name="Commentry" component={Commentry} /> */}
              {/* <RouteStack.Screen name="Info" component={Info} /> */}
              {/* <RouteStack.Screen name="Scorecard" component={Scorecard} /> */}
              {/* <RouteStack.Screen name="VideoDetail" component={VideoDetail} /> */}

              <RouteStack.Screen name="MenTeam" component={MenTeam} />
              <RouteStack.Screen
                name="MenAllRounder"
                component={MenAllRounder}
              />
              <RouteStack.Screen name="MenBatter" component={MenBatter} />
              <RouteStack.Screen name="MenBowler" component={MenBowler} />
              {/* <RouteStack.Screen name="AudioPoc" component={AudioPoc} /> */}

              <RouteStack.Screen name="WoMenTeam" component={WoMenTeam} />
              <RouteStack.Screen
                name="WoMenAllRounder"
                component={WoMenAllRounder}
              />
              <RouteStack.Screen name="WoMenBatter" component={WoMenBatter} />
              <RouteStack.Screen name="WoMenBowler" component={WoMenBowler} />

              {/* <RouteStack.Screen name="Scorefct" component={Scorefct} /> */}
              {/* <RouteStack.Screen name="Play" component={Play} /> */}

              <RouteStack.Screen name="Ranking" component={Ranking} />
              {/* <RouteStack.Screen name="xyz" component={xyz} /> */}

              {/* <RouteStack.Screen name="IccMen" component={IccMen} /> */}
              {/* <RouteStack.Screen name="IccWomen" component={IccWomen} /> */}
              {/* <RouteStack.Screen name="MensTestRank" component={MensTestRank} /> */}
              <RouteStack.Screen name="NewsDetails" component={NewsDetails} />

              {/* <RouteStack.Screen name="Chat" component={Chat} /> */}
              {/* <RouteStack.Screen name="SendCoin" component={SendCoin} /> */}
              {/* <RouteStack.Screen name="ReceiveCoin" component={ReceiveCoin} /> */}
              {/* <RouteStack.Screen name="AddressList" component={AddressList} /> */}

              {/* <RouteStack.Screen name="Login" component={Login} />
              <RouteStack.Screen name="Register" component={Register} />
              <RouteStack.Screen name="Forgot" component={Forgot} /> */}
            </RouteStack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </>
    );
  }
}

function mapStateToProps(state) {
  const {loggingIn} = state.authentication;
  const {users, dashboard} = state;
  return {
    loggingIn,
    users,
    dashboard,
  };
}
export default connect(mapStateToProps)(Routes);
