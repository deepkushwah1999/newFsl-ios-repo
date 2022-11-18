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
  RefreshControl
} from 'react-native';
import { userActions } from '../../_actions';
import { Slides } from '../components/Slides';
import { Loader } from '../../components/Loader';

class TrendingSeries extends Component {
  constructor(props) {
    super(props);
    this._scrollRef = React.createRef();
    this.state = {
      // data: [],
      sportName: 'CRICKET',
      sportId: '4',
      currentPage: 0,
      count: 0,
      sportStatus: 'LIVE',
      loading: true,
      refresh: false
    };
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  componentDidMount() {




    const { navigation } = this.props;

    this.focusListener = navigation.addListener('focus', () => {

     
      this.props.dispatch(userActions.SeriesList());
      
      



    });

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

  

  componentWillUnmount() {
    if (this.focusListener != null && this.focusListener.remove) {
      this.focusListener.remove();
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
    let { users, theme ,leng} = this.props;
    let { SeriesListData } = users;



    return (
      <SafeAreaView style={{ height: '100%', backgroundColor: theme && theme.secondary ? theme.secondary : null }}>
        <View
          style={{
            backgroundColor: theme && theme.primary ? theme.primary : null,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={{ alignSelf: 'flex-start', marginLeft: 15 }}
              source={require('../../Statics/img/Home/back-arrow.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              //fontFamily: 'Poppins-Bold',
              color: '#fff',
              marginLeft: 70,
            }}>
          {leng.theme=="en"?"Trending Series":"ट्रेंडिंग सीरीज  "}
          </Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
            />
          }>
          {users.loading ? (

            <Loader />

          ) : SeriesListData &&
            SeriesListData.data &&
            SeriesListData.data.length > 0 ? (
            SeriesListData.data.map(item => (

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('SeriesData', {
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
                    backgroundColor: theme && theme.thirdback ? theme.thirdback : null,
                    borderRadius: 8,
                    borderBottomColor: '#e8e8e8',
                    borderBottomWidth: 1,
                    elevation: 5,
                    marginTop:10
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
            ))
          ) : null}
            <View style={{marginTop:50}} >

</View>
        </ScrollView>
      
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { users, dashboard, theme,leng } = state;
  return {
    loggingIn,
    users,
    dashboard,
    theme,leng
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

export default connect(mapStateToProps)(TrendingSeries);
