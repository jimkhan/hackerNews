import React from 'react';
import {TouchableOpacity, View, StyleSheet, Share} from 'react-native';

import TitleText from './TitleText';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, WIDTH} from '../../config/Configure';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import AppText from './AppText';
const prettyMilliseconds = require('pretty-ms');

const Card = ({
  children,
  title = 'Hacker News',
  score = 123,
  by = 'jim',
  time,
  style,
  onPress,
  disabled,
}) => {
  // console.log(nTime);
  // function misToTime(ms) {
  //   let seconds = (ms / 1000).toFixed(0);
  //   let minutes = (ms / (1000 * 60)).toFixed(0);
  //   let hours = (ms / (1000 * 60 * 60)).toFixed(0);
  //   let days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
  //   if (seconds < 60) return seconds + ' Second';
  //   else if (minutes < 60) return minutes + ' Minutes';
  //   else if (hours < 24) return hours + ' Hours';
  //   else return days + ' Days';
  // }

  const onShare = async title => {
    try {
      const result = await Share.share({
        message: title,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}>
      <View style={styles.textArea}>
        <TitleText
          // numberOfLines={2}
          // ellipsizeMode="tail"
          style={styles.text}>
          {title}
        </TitleText>
        <AppText>
          {score} points by {by} {time} Milliseconds ago
        </AppText>
      </View>
      <TouchableOpacity style={styles.share} onPress={() => onShare(title)}>
        <Icon name="share-social-sharp" size={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: hp(10),
    borderRadius: hp(1),
    backgroundColor: Colors.white,
    marginVertical: hp(1),
    paddingLeft: wp(4),
    paddingRight: wp(4),
    elevation: 2,
  },
  textArea: {
    justifyContent: 'center',
    minHeight: hp(8),
    width: wp(73),
    marginVertical: hp(1),
    // backgroundColor: 'green',
  },
  share: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Closed,
    height: hp(4),
    width: hp(4),
    borderRadius: hp(3),
  },
  text: {
    paddingBottom: hp(0.8),
  },
});

export default Card;
