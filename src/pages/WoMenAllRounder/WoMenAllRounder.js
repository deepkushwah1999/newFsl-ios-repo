import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';


import {
  View, Text, ScrollView,
  Image, TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


class AllRounder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentGameType: "ODI",
    }
  }


  componentDidMount() {
    let temp = {
      "type": "12",

    }
    this.props.dispatch(userActions.getRank(temp));
  }


  ODI = () => {

    let temp = {
      "type": "12",
    }
    this.props.dispatch(userActions.getRank(temp));
    this.setState({ currentGameType: "ODI" })
  }

  T20 = () => {

    let temp = {
      "type": "15",

    }
    this.props.dispatch(userActions.getRank(temp));
    this.setState({ currentGameType: "T20" })
  }



  render() {


    let { users, theme, leng } = this.props;
    let { getRankData } = users;
    return (
      <SafeAreaView>
        <View style={{ height: '100%' }}>
          <>


            <View style={{ flexDirection: 'row', backgroundColor: theme && theme.primary ? theme.primary : null, }}>
              <View style={{ margin: 15, flexDirection: 'row', marginTop: 10, }}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                  <Image style={{ alignSelf: 'center' }} source={require("../../Statics/img/Home/back-arrow.png")} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 100, alignSelf: 'center' }}>{leng.theme == "en" ? "AllRounder" : "ऑलरॉउंडर "}</Text>
              </View>
            </View>



            <View style={{ backgroundColor: theme && theme.secondary ? theme.secondary : null, flex: 1 }}>
              <View>




                <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                  <TouchableOpacity onPress={() => this.ODI()} style={{ width: '30%' }}>
                    <Text style={this.state.currentGameType == "ODI" ? { color: 'white', fontSize: 16, fontWeight: 'bold', backgroundColor: theme && theme.primary ? theme.primary : null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, fontWeight: 'bold', backgroundColor: theme && theme.thirdback ? theme.thirdback : null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center', borderWidth: 0.5 }}>ODI</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.T20()} style={{ width: '30%' }}>
                    <Text style={this.state.currentGameType == "T20" ? { color: 'white', fontSize: 16, fontWeight: 'bold', backgroundColor: theme && theme.primary ? theme.primary : null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, fontWeight: 'bold', backgroundColor: theme && theme.thirdback ? theme.thirdback : null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center', borderWidth: 0.5 }}>T20</Text>
                  </TouchableOpacity>
                </View>

                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  <View style={{ marginBottom: 100 }}>
                    <View style={{ width: '100%', alignSelf: 'center', margin: 10 }}>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: 'lightgray' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "35%" }}>
                          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline', marginRight: 20 }}>{leng.theme == "en" ? "Rank" : "रैंक"}</Text>
                          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline', marginRight: 20 }}>{leng.theme == "en" ? "Player" : "प्लेयर "}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                          <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', textDecorationLine: 'underline', marginLeft: 15 }}>{leng.theme == "en" ? "Rating" : "रेटिंग"}</Text>
                        </View>
                      </View>


                      {
                        getRankData && getRankData.length > 0 ?

                          getRankData.map((element, index) => (
                            <>

                              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 10, backgroundColor: theme && theme.thirdback ? theme.thirdback : null, alignItems: 'center', marginVertical: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "35%" }}>
                                  <Text style={{ color: 'black', marginRight: 10, paddingTop: 6 }}>{element && element.rank ? element.rank : "NA"}</Text>
                                  <View style={{ flexDirection: 'row', alignContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start' }}>
                                    <Image style={{ width: 35, height: 35, borderRadius: 50 }} source={{ uri: element && element.imageLinkUrl ? element.imageLinkUrl : "NA" }} />
                                    <Text style={{ color: 'black', paddingTop: 6, marginLeft: 5 }}>{element && element.name ? element.name : "NA"}</Text>
                                  </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                  <Text style={{ color: 'black', marginLeft: 10, marginRight: 15 }}>{element && element.rating ? element.rating : "NA"}</Text>
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
        </View>
      </SafeAreaView>
    )
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


export default connect(mapStateToProps)(AllRounder);