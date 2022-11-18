import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import {
  View, Text, ScrollView,
  Image, TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



class MenTeam extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGameType: "ODI",

    }
  }

  componentDidMount() {
    let temp = {
      "type": "1",
      
    }
    this.props.dispatch(userActions.teamRanking(temp));
  }

  ODI = () => {

    let temp = {
      "type": "1",
      "gameType": "ODI",
      "rankType": "TEAM"
    }
    this.props.dispatch(userActions.teamRanking(temp));
    this.setState({ currentGameType: "ODI" })
  }

  T20 = () => {

    let temp = {
      "type": "3",
    
    }
    this.props.dispatch(userActions.teamRanking(temp));
    this.setState({ currentGameType: "T20" })
  }

  TEST = () => {

    let temp = {
      "type": "2",
    
    }
    this.props.dispatch(userActions.teamRanking(temp));
    this.setState({ currentGameType: "TEST" })
  }


  render() {

    let { users,theme ,leng} = this.props;
    let { getTeamRankData } = users;

    return (
      <SafeAreaView>
        <>
          <View style={{height:'100%'}}>
            <View style={{ flexDirection: 'row', backgroundColor:theme&&theme.primary?theme.primary:null, }}>
              <View style={{ margin: 15, flexDirection: 'row', marginTop: 10, backgroundColor:theme&&theme.primary?theme.primary:null, }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                  <Image style={{ alignSelf: 'center', marginTop: 5 }} source={require("../../Statics/img/Home/back-arrow.png")} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 100, paddingTop: 3 }}>{leng.theme=="en"?"Team":"टीम "}</Text>
              </View>
            </View>

            <View style={{ backgroundColor: theme&&theme.secondary?theme.secondary:null, flex: 1 }}>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                  <TouchableOpacity onPress={() => this.ODI()} style={{ width: '30%' }}>
                    <Text style={this.state.currentGameType == "ODI" ? { color: 'white', fontSize: 16, fontWeight: 'bold', backgroundColor:theme&&theme.primary?theme.primary:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, fontWeight: 'bold', backgroundColor: theme&&theme.thirdback?theme.thirdback:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center',borderWidth:0.5 }}>ODI</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.T20()} style={{ width: '30%' }}>
                    <Text style={this.state.currentGameType == "T20" ? { color: 'white', fontSize: 16, fontWeight: 'bold', backgroundColor:theme&&theme.primary?theme.primary:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, fontWeight: 'bold', backgroundColor: theme&&theme.thirdback?theme.thirdback:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center',borderWidth:0.5 }}>T20</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.TEST()} style={{ width: '30%' }}>
                    <Text style={this.state.currentGameType == "TEST" ? { color: 'white', fontSize: 16, fontWeight: 'bold', backgroundColor:theme&&theme.primary?theme.primary:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, fontWeight: 'bold', backgroundColor: theme&&theme.thirdback?theme.thirdback:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center',borderWidth:0.5 }}>Test</Text>
                  </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <View style={{ marginBottom: 100 }}>
                    <View style={{ width: '100%', alignSelf: 'center', margin: 15 }}>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: 'lightgray', paddingVertical: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "40%", }}>
                          <Text style={{ color: 'black', marginRight: 20, fontSize: 15, fontWeight: 'bold',textDecorationLine:'underline' }}>{leng.theme=="en"?"Rank":"रैंक"}</Text>
                          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold',textDecorationLine:'underline' }}>{leng.theme=="en"?"Team":"टीम "}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                          <Text style={{ color: 'black', marginLeft: 12, fontSize: 15, fontWeight: 'bold',textDecorationLine:'underline' }}>{leng.theme=="en"?"Rating":"रेटिंग"}</Text>
                        </View>
                      </View>

                      {
                        getTeamRankData && getTeamRankData.length > 0 ?
                          getTeamRankData.map((element, index) => (
                            <>
                              <TouchableOpacity style={{ backgroundColor: index % 2 ? theme&&theme.secondary?theme.secondary:null : theme&&theme.thirdback?theme.thirdback:null, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, paddingHorizontal: 10, alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "40%" }}>
                                  <Text style={{ color: 'black', paddingTop: 6 }}>{element && element.rank ? element.rank : "NA"}</Text>
                                  <View style={{ flexDirection: 'row', alignContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start' }}>
                                    <Image style={{ width: 35, height: 35, borderRadius: 50 }} source={{ uri: element && element.imageLinkUrl ? element.imageLinkUrl : "NA" }} />
                                    <Text style={{ color: 'black', paddingTop: 6, marginLeft: 5 }}>{element && element.team ? element.team : "NA"}</Text>
                                  </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                
                                  <Text style={{ color: 'black', marginLeft: 10, marginRight: 15 }}>{element && element.rating ? element.rating : "NA"}</Text>
                                </View>
                              </TouchableOpacity>
                            </>

                          ))
                          : <Text style={{ fontSize: 14, color: 'black', alignSelf: 'center', marginTop: 30 }}>No Recored Found.</Text>

                      }

                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>

          </View>
        </>
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
    theme,
    leng
  };
}
export default connect(mapStateToProps)(MenTeam);

