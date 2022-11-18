import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Linking,
  ImageBackground,
  FlatList,
  Switch,
  RefreshControl

} from 'react-native';
import { userActions, themeActions,languageActions } from '../../_actions';
import { Slides } from '../components/Slides';
import { Loader } from '../../components/Loader';

import { Modal, Portal } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
const { width, height } = Dimensions.get('window');


class firehome extends Component {
  constructor(props) {
    super(props);
    this._scrollRef = React.createRef();
    this.state = {
      // data: [],
      sportName: 'CRICKET',
      sportId: '4',
      currentPage: 0,
      count: 1,
      sportStatus: 'LIVE',
      loading: true,
      theamcolor: false,
      modelvisible: false,
      refresh: false
    };
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  componentDidMount() {

    console.log("component didi mount is calling ");

    const { navigation } = this.props;


    let data = {
      keyWord: '',
      pageNo: 1,
      size: 15,
    };
    this.props.dispatch(userActions.getAllVideo(data));
    this.props.dispatch(userActions.HomeList());
    this.props.dispatch(userActions.SeriesList());
    this.props.dispatch(userActions.getAllAds());


    this.focusListener = navigation.addListener('focus', () => {



      let data = {
        keyWord: '',
        pageNo: 1,
        size: 15,
      };
      this.props.dispatch(userActions.getAllVideo(data));
      this.props.dispatch(userActions.HomeList());
      this.props.dispatch(userActions.SeriesList());
      this.props.dispatch(userActions.getAllAds());
    });




    const intervalId = setInterval(() => {


      this.setState(prevState => {
        let { users } = this.props;
        let { liveScore, finishedMatchesScore, upcomingMatchesScore, getAllAdsItems } = users;

        let adsLength = getAllAdsItems && getAllAdsItems.length ? getAllAdsItems.length : 1
        let min = 0;
        let tempAds = this.getRandomInt(0, adsLength - 1)
        return {
          count: tempAds,
        };
      });
    }, 9000);
    this.setState({ intervalId })

  }





  componentWillUnmount() {

    if (this.focusListener != null && this.focusListener.remove) {
      this.focusListener.remove();
    }


  }




  _onScroll = e => {
    this.setState({
      currentPage: Math.round(
        parseFloat(
          e.nativeEvent.contentOffset.x / Dimensions.get('window').width,
        ),
      ),
    });
  };





  submitTheam = () => {



    this.setState({ theamcolor: !this.state.theamcolor })
    let { users, theme } = this.props;

    if (theme && theme.primary && theme.theme === "light") {
      this.props.dispatch(themeActions.setTheme({
        theme: "dark",
        primary: "#16213E",
        secondary: "#E1FFEE",
        thirdback: "#FCF8E8"

      }));

    }
    else {
      this.props.dispatch(themeActions.setTheme({
        theme: "light",
        primary: "darkred",
        secondary: "#f5f5f5",
        thirdback: "#FFF"

      }));
    }
  }



  pullme = () => {
    this.setState({ refresh: true })

    setTimeout(() => {
      this.setState({ refresh: false })
    }, 1000)
    this.componentDidMount()
  }





  render() {
    let { users, theme,leng } = this.props;
    let { theamcolor, modelvisible, refresh } = this.state;
    let { HomeListData, SeriesListData, getAllVideo, getAllAdsItems } = users;
    console.log("HomeListDataHomeListDataHomeListDataHomeListDataHomeListData1111", HomeListData);

    return (
      <SafeAreaView style={{ height: '100%', backgroundColor: theme && theme.secondary ? theme.secondary : null }}>
        <View style={{ height: "92.99%" }}>
          <View style={{ backgroundColor: theme && theme.primary ? theme.primary : null, height: 50 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../../Statics/img/Home/1.png')}
                  style={{ height: 40, width: 65, margin: 10 }}
                />
                <Text
                  style={{
                    color: 'white',
                    // fontFamily:'',
                    fontSize: 13,
                  }}>
                  FAIRBETS SPORT LINE

                </Text>
              </View>
              {/* <TouchableOpacity style={{ alignItems: 'center', marginRight: 10, marginTop: 20 }} onPress={() => this.setState({ modelvisible: true })}>
              <Text style={{ padding: 2, borderRadius: 5, backgroundColor: '#FFFFFF', color: "darkred",  fontSize: 13 }}>Mode</Text>
            </TouchableOpacity> */}
            </View>
          </View>

          <Portal>
            <Modal
              onDismiss={() => this.setState({ modelvisible: false })}
              contentContainerStyle={{
                width: '50%',
                height: '12%',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'lightgray',
                position: 'absolute',
                top: 20,
                alignSelf: 'center',
                backgroundColor: 'white'
              }}
              dismissable={true}
              visible={modelvisible}>

              <View style={{}}>
                <Text style={{  textAlign: 'center', marginBottom: 5, marginTop: 5 }}>Change Theame</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', }}>




                  <Switch
                    value={theamcolor}
                    onValueChange={() => this.submitTheam()} />



                </View>


              </View>


            </Modal>
          </Portal> 
          {users.loading ? (
            <Loader />
          ) : (
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  onRefresh={() => this.pullme()}
                />
              }
            >
              <View style={{ backgroundColor: theme && theme.primary ? theme.primary : null, height: 150 }} />
              <View style={{ marginTop: -140, elevation: 10 }}>
                <ScrollView
                  ref={ref => (this._scrollRef.current = ref)}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={10}
                  pagingEnabled
                  onScroll={this._onScroll}>
                  {HomeListData &&
                    HomeListData.data &&
                    HomeListData.data.length > 0
                    ? HomeListData.data.map(item => (
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('MatchDetails', {
                            match_id: item.match_id,
                            sportStatus: item.match_status,
                            team_a_short: item.team_a_short,
                            team_b_short: item.team_b_short
                          })
                        }
                        activeOpacity={0.5}>
                        <Slides
                          // key={item.id}
                          label={item.series}
                          date={item.match_date}
                          Time={item.match_time}
                          status={item.match_status}
                          country1={item.team_a_short}
                          country2={item.team_b_short}
                          // score1={item.score1}
                          // score2={item.score2}
                          // over1={item.over1}
                          // over2={item.over2}
                          flag1={item.team_a_img}
                          flag2={item.team_b_img}
                          title={item.venue}
                          min_rate={item.min_rate}
                          max_rate={item.max_rate}
                        // result={item.result}
                        />
                        {/* <Text></Text> */}
                      </TouchableOpacity>
                    ))
                    : null}
                </ScrollView>
              </View>
              <View style={styles.mainContainer}>
                <View style={styles.paginationContainer}>
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 0 ? styles.active : '',
                    ]}
                  />
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 1 ? styles.active : '',
                    ]}
                  />
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 2 ? styles.active : '',
                    ]}
                  />
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 3 ? styles.active : '',
                    ]}
                  />
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 4 ? styles.active : '',
                    ]}
                  />
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 5 ? styles.active : '',
                    ]}
                  />
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 6 ? styles.active : '',
                    ]}
                  />
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 7 ? styles.active : '',
                    ]}
                  />
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 8 ? styles.active : '',
                    ]}
                  />
                  <View
                    style={[
                      styles.pagination,
                      this.state.currentPage === 9 ? styles.active : '',
                    ]}
                  />
                </View>
              </View>

              <View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      //fontFamily: 'Poppins-Bold',
                      color: '#393939',
                    }}>
                    {leng.theme=="en"?"Trending Series":"ट्रेंडिंग सीरीज "}
                  </Text>
                  <Text
                    onPress={() =>
                      this.props.navigation.push('TrendingSeries')
                    }
                    style={{
                      fontSize: 12,
                      //fontFamily: 'Poppins-SemiBold',
                      color: '#3364b6',
                    }}>
                  {leng.theme=="en"?"View More":"और देखें"}
                  </Text>
                </View>

                {SeriesListData &&
                  SeriesListData.data &&
                  SeriesListData.data.length > 0 ? (

                  SeriesListData.data.map((item, index) => (

                    index < 2 ?
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.push('SeriesData', {
                            series_id: item.series_id,
                            series: item.series,
                          })
                        }>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 15,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            marginVertical: 5,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            borderBottomColor: '#e8e8e8',
                            borderBottomWidth: 1,
                            elevation: 5,
                          }}>
                          <View style={{ width: '90%' }}>
                            <Text
                              style={{
                                color: '#3364b6',
                                fontSize: 12,
                                //fontFamily: 'Poppins-SemiBold',
                              }}>
                              {item.series}
                            </Text>
                            <View style={{}}>
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: '#000',
                                  //fontFamily: 'Poppins-SemiBold',
                                }}>
                                {' '}
                                {item.total_matches} Matches . {item.start_date} -
                                {item.end_date}
                              </Text>
                            </View>
                          </View>
                          <View style={{ width: '10%' }}>
                            <Image
                              source={require('../../images/ar2.png')}
                              style={{
                                height: 20,
                                width: 20,
                                alignSelf: 'center',
                                marginTop: 5,
                              }}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      : null

                  ))
                ) : null}
              </View>


              <View style={{ marginBottom: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 20,
                    marginTop: 5,
                    //fontFamily: 'Poppins-SemiBold',
                  }}>
                   {leng.theme=="en"?"Features Video":"फीचर्स वीडियोस "}
                </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ backgroundColor: theme && theme.secondary ? theme.secondary : null }}>
                  {getAllVideo && getAllVideo.length
                    ? getAllVideo.map(element => (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                          Linking.openURL(element.video);
                        }}
                        style={{ alignSelf: 'center' }}>
                        <View
                          style={{
                            marginHorizontal: 5,
                            marginTop: 10,
                            marginBottom: 15,
                            backgroundColor: "#F5F5F5",
                            height: 230,
                            width: 350,
                            elevation: 5,
                            borderRadius: 10,
                          }}>
                          {/* <ImageBackground
                          source={{ uri: element.image }}
                          style={{
                            height: 190,
                            width: 350,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                          }}
                        /> */}
                          <ImageBackground
                            source={{ uri: element.image }}
                            style={{
                              height: 190,
                              width: 350,
                              borderRadius: 10,
                            }}>
                            <Image
                              source={require('../../images/play.png')}
                              style={{
                                height: 50,
                                width: 50,
                                alignSelf: 'center',
                                marginTop: 70,
                              }}
                            />
                          </ImageBackground>

                          <Text
                            style={{
                              marginHorizontal: 10,
                              marginTop: 2,
                              // fontFamily: 'Poppins-Regular',
                              fontSize: 13,
                              fontWeight: 'bold',
                            }}
                            numberOfLines={2}>
                            {element.description}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))
                    : null}


                </ScrollView>
              </View>
              {/* <View
              style={{width: '100%', alignSelf: 'center', marginBottom: 50,}}>
            
            {
              getAllAdsItems && getAllAdsItems && getAllAdsItems.length> 0 ? getAllAdsItems.map((element,index)=>(



                <>
              
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(element.url);
                  }}
                  style={{
                    alignSelf: 'center',
                
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Image
                      style={{
                        width: width,
                        height: 60,
                        resizeMode: 'cover',
                      }}
                      source={{
                        uri: element.imageLinkUrl,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              
                </> 

              )):null
            }
         
            
           
            </View> */}
              <View
                style={{ height: 90 }}></View>



            </ScrollView>


          )}

          <View style={{ width: '100%', alignSelf: 'center', marginTop: -110 }}>
            {getAllAdsItems && getAllAdsItems.length > 0 ? (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(getAllAdsItems[this.state.count].url);
                }}
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                  <Image
                    style={{
                      width: width - 10,
                      height: 70,
                      resizeMode: 'stretch',
                    }}
                    source={{
                      uri: getAllAdsItems[this.state.count].imageLinkUrl,
                    }}
                  />
                </View>
              </TouchableOpacity>
            ) : null}
          </View>

        </View>
      </SafeAreaView >
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard, theme,leng } = state;
  return {
    loggingIn,
    theme,
    users,
    dashboard,
    leng
  };
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
    height: 28,
    marginHorizontal: 5,
    // marginVertical: 5,
  },
  pagination: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: '#D1CFCF',
    overflow: 'hidden',
  },
  active: {
    backgroundColor: '#b30000',
    width: 10,
    height: 10,
    borderRadius: 100,
    overflow: 'hidden',
  },
});

export default connect(mapStateToProps)(firehome);
