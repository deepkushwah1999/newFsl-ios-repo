import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('screen').width;

export const Slides = ({
  label,
  dateTime,
  country1,
  country2,
  score1,
  score2,
  over1,
  over2,
  flag1,
  flag2,
  title,
  result,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View styHTMLViewle={styles.middleContainer}>
        <View style={styles.leftContainer}>
          <View style={{alignItems: 'center'}}>
            <Image source={{uri: flag1}} style={styles.imgStyles} />
            <Text style={styles.countryText}>{country1}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.countryText}>{score1}</Text>
            <Text style={styles.overs}>{over1}</Text>
          </View>
        </View>
        <FontAwesome name="exchange" size={24} color="black" />
        <View style={styles.leftContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.countryText}>{score2}</Text>
            <Text style={styles.overs}>{over2}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image source={{uri: flag2}} style={styles.imgStyles} />
            <Text style={styles.countryText}>{country2}</Text>
          </View>
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
        <View style={{width: '60%'}}>
          <Text style={styles.titleStyles} numberOfLines={2}>
            {title}
          </Text>
        </View>
        <View style={styles.rowStyles}>
          <Text style={styles.resultText}>{result}</Text>
          <Text style={[styles.over1, {backgroundColor: 'red'}]}>1.45</Text>
          <Text style={[styles.over1, {backgroundColor: 'green'}]}>1.46</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: width - 40,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  labelStyles: {
    fontWeight: 'bold',
    color: '#b30000',
    fontSize: 13,
  },
  dateTimeStyles: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#808080',
  },
  liveBtn: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    marginHorizontal: 5,
    borderRadius: 5,
    paddingVertical: 3,
    paddingRight: 5,
  },
  liveText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
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
    justifyContent: 'space-evenly',
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

    elevation: 5,
  },
  countryText: {
    fontSize: 12,
    color: '#b30000',
    fontWeight: 'bold',
  },
  overs: {
    fontSize: 10,
    color: '#808080',
    fontWeight: 'bold',
  },
  titleStyles: {fontWeight: 'bold', fontSize: 12, color: '#808080'},
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
