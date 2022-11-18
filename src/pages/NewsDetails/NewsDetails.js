import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import { userActions } from '../../_actions';
import RenderHtml from 'react-native-render-html';
import { SafeAreaView } from 'react-native-safe-area-context';


class NewsDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    let temp = {
      news_id: this.props.route.params.news_id
    }
    this.props.dispatch(userActions.newsDetail(temp));
  }


  render() {

    let { users,theme,leng } = this.props;
    let { allNewsDetails } = users;

    return (
      <SafeAreaView>
      <>

        <View style={{ backgroundColor: theme&&theme.primary?theme.primary:null, height:'100%', marginBottom: 40 }}>
          <View style={{ flexDirection: 'row', backgroundColor:  theme&&theme.primary?theme.primary:null, }}>
            <View style={{ margin: 15, flexDirection: 'row', marginTop: 10,  }}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                <Image style={{ alignSelf: 'center', marginTop: 5 }} source={require("../../Statics/img/Home/back-arrow.png")} />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginLeft: 30, paddingTop: 3 }}>{leng.theme=="en"?"News Details":"न्यूज़ डिटेल्स "}</Text>
            </View>
          </View>
          <View style={{ justifyContent: 'center', borderBottomWidth: 2, borderColor: "black", height: 1, }} />
          <ScrollView>
            <View style={{ backgroundColor: theme&&theme.primary?theme.primary:null, }}>
              <Image style={{ height: 220, width: "100%", backgroundColor: theme&&theme.secondary?theme.secondary:null }} source={{ uri: allNewsDetails && allNewsDetails.image ? allNewsDetails.image : "NA" }} />
              <View style={{ backgroundColor: theme&&theme.secondary?theme.secondary:null, borderRadius: 20, marginTop: -20, paddingBottom: 30 ,marginBottom:20}}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#CC9301', lineHeight: 20, padding: 15 }}>{allNewsDetails && allNewsDetails.title ? allNewsDetails.title : "NA"}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#CC9301', lineHeight: 20, paddingLeft: 15, paddingBottom: 10 }}>{allNewsDetails && allNewsDetails.pub_date ? allNewsDetails.pub_date : "NA"}</Text>


                <Text style={{ fontSize: 16, color: 'black', lineHeight: 22, paddingLeft: 15,fontWeight:'700' }}>{allNewsDetails && allNewsDetails.description ? allNewsDetails.description : "NA"}</Text>

                {
                  allNewsDetails && allNewsDetails.content && allNewsDetails.content.length > 0 ? allNewsDetails.content.map((element, index) => (
                    <>
                      <View style={{ color: 'black', lineHeight: 22, paddindLeft: 15, }}>
                        <RenderHtml
                          contentWidth={100}
                          source={{ html: element ? element : "NA" }}
                          tagsStyles={{
                            body: {
                              borderRadius: 10,
                              padding: 10,
                              fontSize: 13,
                              color: "black",
                            }
                          }}
                        />
                      </View>
                    </>
                  )) : <Text style={{ fontSize: 12, color: 'black', alignSelf: 'center' }}>No Recored Found.</Text>
                }
              </View>
            </View>


          </ScrollView>
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
    theme,leng
  };
}
const styles = StyleSheet.create({
  screen: {

    backgroundColor: colors.light,
    padding: 6

  },
  itemContainer: {

    marginRight: 16,
    marginLeft: 6
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'lightblue',
  }
});
export default connect(mapStateToProps)(NewsDetails);
