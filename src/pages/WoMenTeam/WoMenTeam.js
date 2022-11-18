import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, Text, ScrollView,
  Image, TouchableOpacity
} from 'react-native';
import { userActions } from '../../_actions';
import { SafeAreaView } from 'react-native-safe-area-context';


class Team extends Component {
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


  render() {

    let { users,theme,leng } = this.props;
    let { getTeamRankData } = users;

    return (

      <SafeAreaView>
        <View style={{height:'100%'}}>
      <>

        <View style={{ flexDirection: 'row', backgroundColor: theme&&theme.primary?theme.primary:null, }}>
          <View style={{ margin: 15, flexDirection: 'row', marginTop: 10, backgroundColor:  theme&&theme.primary?theme.primary:null, }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
              <Image style={{ alignSelf: 'center' }} source={require("../../Statics/img/Home/back-arrow.png")} />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 100, alignSelf: 'center' }}>{leng.theme=="en"?"Team":"टीम "}</Text>
          </View>
        </View>

        <View style={{ backgroundColor:theme&&theme.secondary?theme.secondary:null, flex: 1 }}>
          <View>
            

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
              <TouchableOpacity onPress={() => this.ODI()} style={{ width: '30%' }}>
                <Text style={this.state.currentGameType == "ODI" ? { color: 'white', fontSize: 16, fontWeight: 'bold', backgroundColor:  theme&&theme.primary?theme.primary:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, fontWeight: 'bold', backgroundColor: theme&&theme.thirdback?theme.thirdback:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center',borderWidth:0.5 }}>ODI</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.T20()} style={{ width: '30%' }}>
                <Text style={this.state.currentGameType == "T20" ? { color: 'white', fontSize: 16, fontWeight: 'bold', backgroundColor:  theme&&theme.primary?theme.primary:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center' } : { color: 'black', fontSize: 16, fontWeight: 'bold', backgroundColor: theme&&theme.thirdback?theme.thirdback:null, paddingHorizontal: 5, paddingVertical: 5, borderRadius: 10, textAlign: 'center',borderWidth:0.5 }}>T20</Text>
              </TouchableOpacity>
            </View>


            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View style={{ marginBottom: 100 }}>
                <View style={{ width: '100%', alignSelf: 'center', margin: 10 }}>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: 'lightgray' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "35%" }}>
                      <Text style={{ color: 'black', marginRight: 20,fontSize:15,fontWeight:'bold',textDecorationLine:'underline' }}>{leng.theme=="en"?"Rank":"रैंक"}</Text>
                      <Text style={{ color: 'black', marginRight: 20,fontSize:15,fontWeight:'bold',textDecorationLine:'underline' }}>{leng.theme=="en"?"Team":"टीम "}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                    
                      <Text style={{ color: 'black', marginLeft: 15,fontSize:15,fontWeight:'bold',textDecorationLine:'underline' }}>{leng.theme=="en"?"Rating":"रेटिंग"}</Text>
                    </View>
                  </View>





                  {
                    getTeamRankData && getTeamRankData.length > 0 ?

                      getTeamRankData.map((element, index) => (
                        <>

                          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 10, backgroundColor:theme&&theme.thirdback?theme.thirdback:null, alignItems: 'center', marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "35%" }}>
                              <Text style={{ color: 'black', marginRight: 10, paddingTop: 6 }}>{element && element.rank ? element.rank : "NA"}</Text>
                              <View style={{ flexDirection: 'row', alignContent: 'flex-start', alignItems: 'flex-start', alignSelf: 'flex-start' }}>
                                <Image style={{ width: 35, height: 35, borderRadius: 50 }} source={{ uri: element && element.imageLinkUrl ? element.imageLinkUrl : "NA" }} />
                                <Text style={{ color: 'black', paddingTop: 6, marginLeft: 5 }}>{element && element.team ? element.team : "NA"}</Text>
                              </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                             
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


      </>
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
export default connect(mapStateToProps)(Team);

