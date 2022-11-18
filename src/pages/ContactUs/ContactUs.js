import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions, themeActions, languageActions } from '../../_actions';
import { dashboardActions } from '../../_actions';


import {
  View, Text, Dimensions, Button, Linking, Alert, OpenURLButton,
  TouchableOpacity, TextInput, Image, ScrollView, Share,
  Switch,
} from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Modal, Portal } from 'react-native-paper';

const { height, width } = Dimensions.get('window')


class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {



      modelvisible: false,
      showTeam: true,
      theamcolor: false,


    }
  }




  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://drive.google.com/file/d/1u9tNNSHVOe2rJSaho8mILyJmqh9z09g4/view?usp=sharing',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {

        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };



  gotoIntroScreen = () => {
    this.props.navigation.navigate('routes')
  }
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          ' Hi,Install Fairbets Cricket line to get in touch with Live Cricket Updates-Android app- https://play.google.com/store/apps/details?id=com.fairbets',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };





  submitTheam = (data) => {


    this.setState({ theamcolor: data })
    let { users, theme } = this.props;

    if (theme && theme.primary && theme.theme === "light") {
      this.props.dispatch(themeActions.setTheme({
        theme: "dark",
        primary: "#16213E",
        secondary: "#E1FFEE",
        thirdback: "#FCF8E8"

      }));

    } else {
      this.props.dispatch(themeActions.setTheme({
        theme: "light",
        primary: "darkred",
        secondary: "#f5f5f5",
        thirdback: "#FFF"

      }));
    }
  }




  submitLenguage = (data) => {


    this.setState({ theamcolor: data })
    let { users, theme, leng } = this.props;

    if (leng && leng.Change_Theame && leng.theme === "en") {
      this.props.dispatch(languageActions.setleng({
        theme: "hi",
        Change_Theame: "चेंज_थीम",


      }));

    } else {
      this.props.dispatch(languageActions.setleng({
        theme: "en",
        Change_Theame: "Change Theame",

      }));
    }
  }




  render() {


    let { showTeam, theamcolor, navig, modelvisible } = this.state;
    let { dashboard, theme, leng } = this.props;
    let { } = dashboard;

    console.log("11111111111111111111111111111111ssssssssssssssddddddsssssssssss", leng);

    return (



      <SafeAreaView>
        <View style={{ height: '100%' }}>
          <View style={{ backgroundColor: theme && theme.primary ? theme.primary : null, height: 60, justifyContent: 'center', paddingLeft: 20, flexDirection: 'row' }}>
            <Text style={{ color: "white", fontWeight: '400', textTransform: 'uppercase', fontSize: 16, alignSelf: 'center', letterSpacing: 1, }}>{leng.theme == "en" ? "More" : "मोर"}</Text>

          </View>
          <ScrollView style={{ backgroundColor: theme && theme.secondary ? theme.secondary : null }}>

            <View style={{}}>
              <View style={{ justifyContent: 'center', borderColor: "gray", }} />


              <TouchableOpacity onPress={() => this.RBSheet.open()}>
                <View style={{ marginTop: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', smarginHorizontal: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, marginLeft: 20 }}>{leng.theme == "en" ? "Change Theame" : "चेंज थीम"}
                    </Text>

                    <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />

                  </View>
                  <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                </View>
              </TouchableOpacity>

              <View style={{ height: 50, width: '100%' }}>
                <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '600', color: '#222', paddingTop: 15 }}>{leng.theme == "en" ? "Browse cricket" : "क्रिकेट ब्राउज़ करें"}</Text>
              </View>


              <TouchableOpacity style={{}} onPress={() => this.setState({ modelvisible: !this.state.modelvisible })}>
                <View style={{ height: 50, width: '100%' ,borderTopWidth:0.5,borderColor:'lightgray'}}>
                  <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '600', color: '#222', paddingTop: 15 }}>{leng.theme == "en" ? "Change Language" : "भाषा बदलो"}</Text>
                </View>
              </TouchableOpacity>

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
                    <Text style={{  textAlign: 'center', marginBottom: 5, marginTop: 5 }}>{leng.theme == "en" ? "Change Language" : "भाषा बदलो"}</Text>


                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <TouchableOpacity onPress={() => this.submitLenguage("en")} style={{ flexDirection: 'row' }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 15 }}>
                          <View style={{ flexDirection: 'row', backgroundColor: leng.theme == "en" ? "green" : "white", padding: 5, borderRadius: 15, height: 10 }}>

                          </View>
                        </View>
                        <Text style={{ marginHorizontal: 10, }}>English</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.submitLenguage("hi")} style={{ flexDirection: 'row' }}>

                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 15, marginLeft: 20 }}>
                          <View style={{ backgroundColor: leng.theme == "hi" ? "green" : "white", padding: 5, borderRadius: 10, height: 10 }}>

                          </View>
                        </View>
                        <Text style={{ marginHorizontal: 10, }}>Hindi</Text>
                      </TouchableOpacity>

                    </View>









                  </View>


                </Modal>
              </Portal>



              <View style={{ borderWidth: 1, borderColor: 'lightgray', backgroundColor: theme && theme.thirdback ? theme.thirdback : null, }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('TrendingSeries')}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', smarginHorizontal: 10, alignItems: 'center' }}>
                      <Image style={{ alignSelf: 'center', width: 20, height: 20, marginLeft: 15 }} source={require("../../images/9.png")} />
                      <Text style={{ fontSize: 15, marginRight: 170, }}>{leng.theme == "en" ? "Browse Series" : "ब्राउज शीरीज"}</Text>

                      <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />

                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                  </View>
                </TouchableOpacity>

                {showTeam ?
                  <TouchableOpacity onPress={() => this.setState({ showTeam: false })}>
                    <View style={{ marginTop: 10 }}>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/10.png")} />
                        <Text style={{ fontSize: 15, marginRight: 175, }}>{leng.theme == "en" ? "Browse Team" : "ब्राउज टीम"}</Text>
                        <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />
                      </View>
                      <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                    </View>
                  </TouchableOpacity>
                  :
                  <>
                    <TouchableOpacity onPress={() => this.setState({ showTeam: true })}>
                      <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                          <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/10.png")} />
                          <Text style={{ fontSize: 15, marginRight: 175, }}>{leng.theme == "en" ? "Browse Team" : "ब्राउज टीम"}</Text>
                          <Image style={{ alignSelf: 'center', width: 20, height: 20, margin: 15 }} source={require("../../images/dp.png")} />
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MenTeam')} >
                      <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                          <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/10.png")} />
                          <Text style={{ fontSize: 15, marginRight: 220, }}>{leng.theme == "en" ? "Mens Team" : "मैन टीम"}</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('WoMenTeam')}>
                      <View style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                          <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/10.png")} />
                          <Text style={{ fontSize: 15, marginRight: 200, }}>{leng.theme == "en" ? "Womens Team" : "वुमेन टीम"}</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                      </View>
                    </TouchableOpacity>
                  </>
                }


              </View>

              <View style={{ height: 50, width: '100%' }}>
                <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '600', color: '#222', paddingTop: 15 }}>  {leng.theme == "en" ? "Premium" : "प्रीमियम"}</Text>
              </View>
              <View style={{ borderColor: 'lightgray', backgroundColor: theme && theme.thirdback ? theme.thirdback : null, borderRadius: 10 }}>
                <TouchableOpacity onPress={() => {
                  Linking.openURL("https://play.google.com/store/apps/details?id=com.fairbets");
                }}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                      <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/12.png")} />
                      <Text style={{ fontSize: 15, marginRight: 125, }}>{leng.theme == "en" ? "Download The App" : "डाउनलोड करे "}</Text>
                      <TouchableOpacity>
                        <Image style={{ width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10 }}>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ height: 50, width: '100%' }}>
                <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '600', color: '#222', paddingTop: 15 }}>{leng.theme == "en" ? "Latest stories" : "लेटेस्ट स्टोरीज "}</Text>
              </View>
              <View style={{ backgroundColor: theme && theme.thirdback ? theme.thirdback : null, borderRadius: 10 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Rank')}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/13.png")} />
                      <Text style={{ fontSize: 15, marginRight: 215, }}>{leng.theme == "en" ? "Ranking" : "रैंकिंग "}</Text>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Rank')}>
                        <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15, marginTop: 5 }} source={require("../../images/p.png")} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>

                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Account_Setting')}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/14.png")} />
                      <Text style={{ fontSize: 15, marginRight: 155 }}>{leng.theme == "en" ? "Trending Articles" : "ट्रेंडिंग आर्टिकल "}</Text>
                      <TouchableOpacity>
                        <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15, }} source={require("../../images/p.png")} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ height: 50, width: '100%' }}>
                <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '600', color: '#222', paddingTop: 15 }}>{leng.theme == "en" ? "Browse Cricket" : "ब्राउज क्रिकेट  "}</Text>
              </View>

              <View style={{ borderColor: 'lightgray', backgroundColor: theme && theme.thirdback ? theme.thirdback : null, }}>
                <TouchableOpacity onPress={() => {
                  Linking.openURL("https://play.google.com/store/apps/details?id=com.fairbets");
                }} >
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/15.png")} />
                      <Text style={{ fontSize: 15, marginRight: 210, }}>{leng.theme == "en" ? "Rate Us" : "रेट अस "}</Text>
                      <TouchableOpacity>
                        <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={this.onShare}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/17.png")} />
                      <Text style={{ fontSize: 15, marginRight: 220, }}>{leng.theme == "en" ? "Share" : "शेयर "}</Text>
                      <TouchableOpacity>
                        <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 10 }}></View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ height: 50, width: '100%' }}>
                <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '600', color: '#222', paddingTop: 15 }}>{leng.theme == "en" ? "Follow Us" : "फॉलो अस  "}</Text>
              </View>
              <View style={{ borderColor: 'lightgray', backgroundColor: theme && theme.thirdback ? theme.thirdback : null, }}>
                <TouchableOpacity onPress={() => {
                  Linking.openURL("https://www.youtube.com/channel/UCIZUJv8VxwrxhjbLdY6fctw ");
                }}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', smarginHorizontal: 10, alignItems: 'center' }}>
                      <Text style={{ fontSize: 15, marginLeft: 20 }}>{leng.theme == "en" ? "Youtube" : "यूट्यूब"}</Text>

                      <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />

                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                  Linking.openURL("https://www.instagram.com/fairbetssportsline/");
                }}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', smarginHorizontal: 10, alignItems: 'center' }}>
                      <Text style={{ fontSize: 15, marginLeft: 20 }}>{leng.theme == "en" ? "Instagram" : "इंस्टाग्राम "}</Text>

                      <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />

                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  Linking.openURL("https://in.pinterest.com/fairbets/ ");
                }}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', smarginHorizontal: 10, alignItems: 'center' }}>
                      <Text style={{ fontSize: 15, marginLeft: 20 }}>{leng.theme == "en" ? "Pinterest" : "पिंटरेस्ट  "}</Text>

                      <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />

                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  Linking.openURL("https://twitter.com/FairbetsS");
                }}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', smarginHorizontal: 10, alignItems: 'center' }}>
                      <Text style={{ fontSize: 15, marginLeft: 20 }}>{leng.theme == "en" ? "Twitter" : "ट्विटर"}</Text>

                      <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />

                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  Linking.openURL("https://www.facebook.com/profile.php?id=100086541814051");
                }}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', smarginHorizontal: 10, alignItems: 'center' }}>
                      <Text style={{ fontSize: 15, marginLeft: 20 }}>{leng.theme == "en" ? "Facebook" : "फेसबुक "}</Text>

                      <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} />

                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                  </View>
                </TouchableOpacity>
              </View>



              <View style={{ justifyContent: "center", alignItems: "center", }}>
                <RBSheet
                  ref={ref => {
                    this.RBSheet = ref;
                  }}
                  height={480}
                  openDuration={1000}

                  customStyles={{

                  }}
                >
                  <View style={{ backgroundColor: theme && theme.secondary ? theme.secondary : null }}>

                    {theamcolor ?
                      <>
                        <Image style={{ alignSelf: 'center', width: 200, height: 350, margin: 15, borderWidth: 0.5, borderColor: 'gray', borderRadius: 5 }} source={require("../../images/1jpg.jpg")} />
                      </>

                      :
                      <>
                        <Image style={{ alignSelf: 'center', width: 200, height: 350, margin: 15, borderWidth: 0.5, borderColor: 'gray', borderRadius: 5 }} source={require("../../images/2ndjpg.jpg")} />
                      </>

                    }

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                      <TouchableOpacity onPress={() => this.submitTheam(false)} style={{ flexDirection: 'row' }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 15 }}>
                          <View style={{ flexDirection: 'row', backgroundColor: theamcolor ? 'white' : "green", padding: 5, borderRadius: 15, height: 10 }}>

                          </View>
                        </View>
                        <Text style={{ marginHorizontal: 10, }}>{leng.theme == "en" ? "Light" : "रोशनी"}</Text>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => this.submitTheam(true)} style={{ flexDirection: 'row' }}>

                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 15, marginLeft: 20 }}>
                          <View style={{ backgroundColor: theamcolor ? 'green' : "white", padding: 5, borderRadius: 10, height: 10 }}>

                          </View>
                        </View>
                        <Text style={{ marginHorizontal: 10, }}>{leng.theme == "en" ? "Dark" : "अँधेरा"}</Text>
                      </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={{ alignSelf: 'center', width: "25%", paddingVertical: 10, backgroundColor: "#47B5FF", borderRadius: 10, marginTop: 10, marginBottom: 20 }} onPress={() => this.RBSheet.close()}>
                      <Text style={{ textAlign: 'center', color: 'white' }}>{leng.theme == "en" ? "Done" : "ठीक"}</Text>


                    </TouchableOpacity>

                  </View>

                </RBSheet>
              </View>



              {/* term */}
              <View style={{ height: 50, width: '100%' }}>
                <Text style={{ marginLeft: 20, fontSize: 15, fontWeight: '600', color: '#222', paddingTop: 15 }}>{leng.theme == "en" ? "Term and Privacy" : "टर्म एंड प्राइवेसी  "}</Text>
              </View>
              <View style={{ backgroundColor: theme && theme.thirdback ? theme.thirdback : null, }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Term')}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/18.png")} />
                      <Text style={{ fontSize: 15, marginRight: 165 }}>{leng.theme == "en" ? "Term of Use" : "टर्म ऑफ़ यूज़   "}</Text><TouchableOpacity>
                        <Image style={{ alignSelf: 'center', width: 15, height: 15, margin: 15 }} source={require("../../images/p.png")} /></TouchableOpacity>

                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', marginTop: 10 }}></View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Privacy')}>
                  <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                      <Image style={{ alignSelf: 'center', width: 30, height: 30, marginLeft: 10 }} source={require("../../images/19.png")} />
                      <Text style={{ fontSize: 15, marginRight: 160 }}>{leng.theme == "en" ? "Privacy Policy" : " प्राइवेसी पॉलिसी "}</Text>
                      <TouchableOpacity>
                        <Image style={{ alignSelf: 'center', width: 15, height: 15, marginRight: 15 }} source={require("../../images/p.png")} /></TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>

              </View>
              <View style={{ alignSelf: 'center', marginTop: 40 }}>
                <Text>{leng.theme == "en" ? "App Version" : " एप्प वर्जन "}:1.0</Text>
              </View>
            </View>
            <View style={{ marginTop: 48, }}></View>
          </ScrollView>
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
    theme,
    leng
  };
}
export default connect(mapStateToProps)(ContactUs);
