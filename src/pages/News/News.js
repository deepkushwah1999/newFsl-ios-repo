import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, ScrollView,Dimensions } from 'react-native';
import colors from '../../config/colors';
import { userActions } from '../../_actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Loader } from '../../components/Loader';
const { width, height } = Dimensions.get('window');

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
    };
  }

  componentDidMount() {
    let temp = {
      keyWord: '',
      pageNo: this.state.page,
      size: this.state.size,
    };
    this.props.dispatch(userActions.getAllNews(temp));
  }

  render() {
    let { users, theme } = this.props;
    let { getAllNews,getAllAdsItems } = users;

   

    return (
      <View
        style={{ backgroundColor: theme && theme.secondary ? theme.secondary : null, }}>
        <>
          <ScrollView>
            <View
              style={{
                marginHorizontal: 10,
                backgroundColor: 'white',
                marginTop: 5,
                borderRadius: 10,
                marginBottom: 10,
              }}>


              {getAllNews && getAllNews.data && getAllNews.data.length > 0 ? (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('NewsDetails', {
                      news_id: getAllNews.data[0].news_id,
                    })
                  }
                  style={{
                    backgroundColor: 'white',
                    justifyContent: 'space-between',
                    borderRadius: 10,
                    elevation: 10,
                  }}>
                  <View style={{}}>
                    <Image
                      style={{
                        height: 200,
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        backgroundColor: 'white',
                      }}
                      source={{
                        uri:
                          getAllNews.data[0] && getAllNews.data[0].image
                            ? getAllNews.data[0].image
                            : 'NA',
                      }}
                    />
                  </View>
                  <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                    <View style={{ height: 110 }}>
                      <Text
                        style={{
                          
                          fontSize: 14,
                          color: 'black',
                          lineHeight: 20,
                        }}>
                        {getAllNews.data[0].title}
                      </Text>

                      <Text
                        style={{
                          // fontFamily: 'Poppins-Regular',
                          fontSize: 14,
                          color: 'black',
                          lineHeight: 20,
                          marginTop: 5,
                        }}>
                        {getAllNews.data[0].description}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                      }}>
                      <View style={{ borderRadius: 10 }}>
                        <Text
                          style={{
                            // fontFamily: 'Poppins-Regular',
                            fontSize: 12,
                            color: '#CC9301',
                            lineHeight: 20,
                            padding: 5,
                          }}>
                          {getAllNews.data[0].pub_date}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : null}

            </View>
            {getAllNews && getAllNews.data && getAllNews.data.length > 0 ? (
              getAllNews.data.map((element, index) => (
                <>
                  {index !== 0 ? (
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('NewsDetails', {
                          news_id: element.news_id,
                        })
                      }
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        height: 150,
                        marginHorizontal: 16,
                        marginVertical: 10,
                        justifyContent: 'space-between',
                        borderRadius: 10,
                        elevation: 10,
                      }}>
                      <View style={{ width: '40%' }}>
                        <Image
                          style={{
                            height: 147,
                            width: '100%',
                            borderRadius: 10,
                            backgroundColor: 'white',
                          }}
                          source={{
                            uri:
                              element && element.image
                                ? element.image
                                : 'NA',
                          }}
                        />
                      </View>
                      <View
                        style={{
                          width: '60%',
                          paddingHorizontal: 10,
                          paddingTop: 10,
                        }}>
                        <View style={{ height: 110 }}>
                          <Text
                            style={{
                              
                              fontSize: 14,
                              color: 'black',
                              lineHeight: 20,
                            }}>
                            {element.title}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                          }}>
                          <View
                            style={{
                              alignItems: 'center',
                              width: '80%',
                              borderRadius: 10,
                            }}>
                            <Text
                              style={{
                                //fontFamily: 'Poppins-SemiBold',
                                fontSize: 12,
                                color: '#CC9301',
                                lineHeight: 20,
                                padding: 5,
                              }}>
                              {element.pub_date}
                            </Text>
                          </View>

                        </View>
                      </View>
                    </TouchableOpacity>
                  ) : null}
                </>
              ))
            ) : (
              <Text
                style={{ fontSize: 12, color: 'white', alignSelf: 'center' }}>
                No Record Found.
              </Text>
            )}
            <View style={{marginTop:120}}>

            </View>
          </ScrollView>
        </>
        <View
              style={{ width: '100%', alignSelf: 'center', marginTop: -200 }}>
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
                  <View style={{ alignItems: 'center' }}>
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


    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard, theme } = state;
  return {
    loggingIn,
    users,
    dashboard,
    theme
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
export default connect(mapStateToProps)(News);
