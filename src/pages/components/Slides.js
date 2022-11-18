import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('screen').width;

export const Slides = ({
  label,
  date,
  Time,
  country1,
  country2,

  flag1,
  flag2,
  title,

  status,
  Live,
  min_rate,
  max_rate,
  sportStatus
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topRow}>
        <View style={{ width: '70%' }}>
          <Text style={styles.labelStyles} numberOfLines={1}>
            {label}
          </Text>
          <Text style={styles.dateTimeStyles}>
            {date} {Time}
          </Text>
        </View>
        {
          status === "Live" ?

            (
              <View style={styles.liveBtn}>
                {/* <Image
                  source={require('../../images/black-circle2.png')}
                  style={{ height: 5, width: 5, marginRight: 12 }}
                /> */}

                <Text style={styles.liveText}>{status}</Text>
              </View>
            ) : (
              <View style={{
                flexDirection: 'row',
                backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                paddingVertical: 3,
                paddingHorizontal: 5,
              }}>


                <Text style={styles.liveText}>{status}</Text>
              </View>
            )

        }

      </View>
      <View style={styles.divider} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
        <View style={{}}>
          <View style={{ alignItems: 'center' }}>
            <Image source={{uri:flag1}} style={styles.imgStyles} />
            <Text style={styles.countryText}>{country1}</Text>
          </View>

        </View>

        <View>
          <Image
            source={require('../../images/arroW.png')}
            style={{ height: 20, width: 20, marginTop: 20 }}
          />
        </View>



        <View style={{ alignItems: 'center' }}>
          <Image source={{uri:flag2}} style={styles.imgStyles} />
          <Text style={styles.countryText}>{country2}</Text>
        </View>

      </View>
      <View style={styles.divider} />
      <View
        style={[
          styles.topRow,
          {
            justifyContent: 'space-between',
          },
        ]}>
        <View style={{ width: '60%' }}>
          <Text style={styles.titleStyles} numberOfLines={2}>
            Venue :{title}
          </Text>
        </View>
        <View style={styles.rowStyles}>

          <Text
            style={[
              styles.over1,
              { backgroundColor: 'red', 
              // fontFamily: 'Poppins-SemiBold'
               },
            ]}>
            {min_rate}
          </Text>
          <Text
            style={[
              styles.over1,
              { backgroundColor: 'green',
              //  fontFamily: 'Poppins-SemiBold'
                },
            ]}>
            {max_rate}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 30,
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between',
  },
  labelStyles: {
    //fontFamily: 'Poppins-SemiBold',
    color: '#b30000',
    fontSize: 13,
  },
  dateTimeStyles: {
    fontSize: 11,
    //fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  liveBtn: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  liveText: {
    fontSize: 10,
    color: '#fff',
    //fontFamily: 'Poppins-SemiBold',
  },
  divider: {
    height: 1.5,
    backgroundColor: '#cdcdcd',
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  leftContainer: {
    width: '45%',
    alignItems: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgStyles: {
    width: 50,
    height: 50,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,


  },
  countryText: {
    fontSize: 12,
    color: '#b30000',
    //fontFamily: 'Poppins-SemiBold',
  },
  overs: {
    fontSize: 10,
    color: '#808080',
    fontWeight: 'bold',
  },
  titleStyles: { 
    //fontFamily: 'Poppins-SemiBold', 
    fontSize: 12, color: '#E48400' 
  },
  rowStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 11,
    color: 'blue',
  },
  over1: {
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 8,
    color: '#fff',
    fontSize: 11,
  },
});
