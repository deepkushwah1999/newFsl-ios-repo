import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import {
  View, Text, ScrollView,
  Image, TouchableOpacity
} from 'react-native';

class MenBatter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      offset: 0,
      size: 10,
      page: 1,
      keyWord: '',
      currentGameType: "ODI",
      CurrentMatchType:"Team"

    }
  }

  componentDidMount() {

    let temp = {
      "type": "4",
      // "gameType": "ODI",
      // "rankType": "BATTER"
    }
    this.props.dispatch(userActions.getRank(temp));
  }


  // componentDidMount() {


  //   const { navigation } = this.props;
  //   navigation.addListener('willFocus', async () => {
  //     console.log("willFocus runs") // calling it here to make sure it is logged at every time screen is focused after initial start
  //   });

  // }



  ODI = () => {

    let temp = {
      "type": "4",
      // "gameType": "ODI",
      // "rankType": "BATTER"
    }
    this.props.dispatch(userActions.getRank(temp));
    this.setState({ currentGameType: "ODI" })
  }

  T20 = () => {

    let temp = {
      "type": "7",
      // "gameType": "T20",
      // "rankType": "BATTER"
    }
    this.props.dispatch(userActions.getRank(temp));
    this.setState({ currentGameType: "T20" })
  }

  TEST = () => {

    let temp = {
      "type": "1",
      // "gameType": "TEST",
      // "rankType": "BATTER"
    }
    this.props.dispatch(userActions.getRank(temp));
    this.setState({ currentGameType: "TEST" })
  }


  Batter = () => {

    let temp = {
      "type": "4",
      // "gameType": "ODI",
      // "rankType": "BATTER"
    }
    this.props.dispatch(userActions.getRank(temp));
    this.setState({ CurrentMatchType: "Batter" })
  }

  Bowler = () => {

    let temp = {
      "type": "7",
      // "gameType": "T20",
      // "rankType": "BATTER"
    }
    this.props.dispatch(userActions.getRank(temp));
    this.setState({ CurrentMatchType: "Bowler" })
  }

  AllRounder = () => {

    let temp = {
      "type": "1",
      // "gameType": "TEST",
      // "rankType": "BATTER"
    }
    this.props.dispatch(userActions.getRank(temp));
    this.setState({ CurrentMatchType: "AllRounder" })
  }

  Team = () => {

    let temp = {
      "type": "1",
      // "gameType": "TEST",
      // "rankType": "BATTER"
    }
    this.props.dispatch(userActions.getRank(temp));
    this.setState({ CurrentMatchType: "Team" })
  }


  render() {

    let { users,leng } = this.props;
    let { getRankData } = users;
    // console.log("getRankData::::batterbatterbatterbatter::render", getRankData);

    return (
      <>

        <View style={{ flexDirection: 'row', backgroundColor: 'darkred', }}>
          <View style={{ margin: 15, flexDirection: 'row', marginTop: 10, backgroundColor: 'darkred', }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
              <Image style={{ alignSelf: 'center', marginTop: 5 }} source={require("../../Statics/img/Home/back-arrow.png")} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: '600', color: 'white', marginLeft: 30, paddingTop: 3, marginLeft: 105 }}>{leng.theme=="en"?"Ranking":"रैंकिंग "}</Text>
          </View>
        </View>

        <View style={{}}>
          <View>
            <View style={{ flexDirection: 'row', paddingTop: 5, backgroundColor: 'darkred', justifyContent: 'space-around' }}>

              <TouchableOpacity onPress={() => this.ODI()} style={{}}>
                <Text style={this.state.currentGameType == "ODI" ? { color: 'white', fontSize: 16, fontWeight: 'bold', borderBottomWidth: 1, borderColor: 'yellow' } : { color: 'white', fontSize: 16, fontWeight: 'bold', }}>T20</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.T20()} style={{}}>
                <Text style={this.state.currentGameType == "T20" ? { color: 'white', fontSize: 16, fontWeight: 'bold', borderBottomWidth: 1, borderColor: 'yellow' } : { color: '#fff', fontSize: 16, fontWeight: 'bold', }}>ODI</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.TEST()} style={{}}>
                <Text style={this.state.currentGameType == "TEST" ? { color: 'white', fontSize: 16, fontWeight: 'bold', borderBottomWidth: 1, borderColor: 'yellow' } : { color: 'white', fontSize: 16, fontWeight: 'bold', }}>TEST</Text>

              </TouchableOpacity>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
              <View>
                <TouchableOpacity onPress={() => this.Batter()} style={{}}>
                  <Text style={this.state.CurrentMatchType == "Batter" ? { color: 'white', fontSize: 16, backgroundColor: 'darkred', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 5, textAlign: 'center' } : { color: 'black', fontSize: 16, backgroundColor: '#FFFFFF', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' }}>Batter</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.Bowler()} style={{}}>
                  <Text style={this.state.CurrentMatchType == "Bowler" ? { color: 'white', fontSize: 16, backgroundColor: 'darkred', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, backgroundColor: '#FFFFFF', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 5, textAlign: 'center' }}>Bowler</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.AllRounder()} style={{}}>
                  <Text style={this.state.CurrentMatchType == "AllRounder" ? { color: 'white', fontSize: 16, backgroundColor: 'darkred', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, backgroundColor: '#FFFFFF', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' }}>All-Rounder</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={() => this.Team()} style={{}}>
                  <Text style={this.state.CurrentMatchType == "Team" ? { color: 'white', fontSize: 16, backgroundColor: 'darkred', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, backgroundColor: '#FFFFFF', paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' }}>Team</Text>
                </TouchableOpacity>
              </View>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View style={{ marginBottom: 100 }}>
                <View style={{ width: '100%', alignSelf: 'center', }}>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#0D1D2A', paddingVertical: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "35%" }}>
                      <Text style={{ color: 'white', marginRight: 20, fontSize: 14, fontWeight: 'bold' }}>Rank</Text>
                      <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Player</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                      <Text style={{ color: 'white', marginRight: 10, fontSize: 14, fontWeight: 'bold' }}>Rarings</Text>
                    </View>
                  </View>






                  {
                    getRankData && getRankData.length > 0 ?

                      getRankData.map((element, index) => (
                        <>

                          <TouchableOpacity style={{ backgroundColor: index % 2 ? "#0D1D2A" : "#0D1425", flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 10, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "35%" }}>
                              <Text style={{ color: 'white', paddingTop: 6 }}>{element && element.rank ? element.rank : "NA"}</Text>
                              <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: 'white', paddingTop: 6, marginLeft: 15, fontWeight: 'bold' }}></Text>
                                <Image style={{ width: 35, height: 35, borderRadius: 50, marginHorizontal: 15 }} source={{ uri: element && element.imageLinkUrl ? element.imageLinkUrl : "NA" }} />
                                <Text style={{ color: 'white', paddingTop: 6 }}>{element && element.name ? element.name : "NA"}</Text>
                              </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                              <Text style={{ color: 'white', marginLeft: 10, marginRight: 15 }}>{element && element.rating ? element.rating : "NA"}</Text>
                            </View>
                          </TouchableOpacity>

                        </>

                      ))
                      : <Text style={{ fontSize: 14, color: 'white', alignSelf: 'center', marginTop: 30 }}>No Recored Found.</Text>

                  }

                </View>
              </View>
            </ScrollView>
          </View>
        </View>

      </>
    )
  }
}



function mapStateToProps(state) {

  const { loggingIn } = state.authentication;
  const { users, dashboard,leng } = state;
  return {
    loggingIn,
    users,
    dashboard,leng
  };
}


export default connect(mapStateToProps)(MenBatter);