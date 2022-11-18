import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, ScrollView, Linking, ImageBackground, Dimensions } from 'react-native';
import colors from '../../config/colors';
import { userActions } from '../../_actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Loader } from '../../components/Loader';
const { width, height } = Dimensions.get('window');
class Vedio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    let data = {
      "keyWord": "",
      "pageNo": 1,
      "size": 15
    };
    this.props.dispatch(userActions.getAllVideo(data));
  }

  render() {
    let { users, theme } = this.props;
    let { getAllVideo, getAllAdsItems } = users;

    return (

      // <SafeAreaView>

      <>
        {users.loading ? (
          <Loader />
        ) : (

          <View>
            <View
              style={{
                backgroundColor: theme && theme.secondary ? theme.secondary : null,

              }}>
              <ScrollView >
                {getAllVideo && getAllVideo.length ?
                  getAllVideo.map((element) => (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => {
                        Linking.openURL(
                          element.video
                        );
                      }}
                      style={{}}>

                      <>

                        <View
                          style={{
                            // marginHorizontal: 5,
                            marginVertical: 15,
                            backgroundColor: 'white',
                            height: 230,
                            width: 350,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            justifyContent: 'center',
                            alignSelf: 'center'
                          }}>


                          <ImageBackground
                            source={{ uri: element.image }}
                            style={{
                              height: 190,
                              width: 350,
                              borderTopLeftRadius: 10,
                              borderTopRightRadius: 10,
                            }}

                          >

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
                              fontSize: 12,
                              marginTop: 2,

                              fontWeight: 'bold'
                            }}
                            numberOfLines={2}>
                            {element.description}
                          </Text>
                        </View>
                      </>

                    </TouchableOpacity>

                  )) : null
                }
                <View style={{ marginTop: 80 }}>

                </View>
              </ScrollView>
            </View>
            <View
              style={{ width: '100%', alignSelf: 'center', marginTop: -135 }}>
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
        )}
        {/* </SafeAreaView> */}
      </>
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
export default connect(mapStateToProps)(Vedio);
